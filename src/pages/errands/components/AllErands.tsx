import { Link, useNavigate } from "react-router-dom";
import ReusableTable from "../../../components/ReusableTable";
import { useState } from "react";
import { useDebouncedValue } from "../../../utils/assetHelper";
import {
  useDeleteErrandMutation,
  useGetErrandsQuery,
} from "../../../redux/services/errands";
import Badge from "../../../components/badge";
import { BadgeType } from "../../../constants/enums";
import CreateErrandModal from "./create-errand";
import ReusableDetailsComponent from "../../../components/form/ReusableDetailsComponent";
import EditErrandModal from "./edit-errand";
import { IErrand } from "../../../types/errand";
import useAlert from "../../../utils/use-alert";

export function AllErrands() {
  const [deleteErrand] = useDeleteErrandMutation();

  const [showCreateOrganizationModal, setShowCreateOrganizationModal] =
    useState<boolean>(false);
  const [isCreateErrandModalOpen, setIsCreateErrandModalOpen] = useState(false);
  const [selectedErrand, setSelectedErrand] = useState<any>({
    action: "",
    errand: null,
  });

  const [filterParams, setFilterParams] = useState({
    search: "",
    status: "",
    paymentStatus: "",
    category: "",
    page: 1,
    limit: 10,
    sort: "createdAt:DESC",
  });

  const [sort, setsort] = useState<any>({
    createdAt: "desc",
  });

  const debouncedFilter = useDebouncedValue(filterParams);

  const { data: usersApiResponse, ...usersApiResponseDetails } =
    useGetErrandsQuery({
      page: filterParams.page,
      limit: filterParams.limit,
      ...(debouncedFilter?.sort && { sort: debouncedFilter.sort }),
      ...(debouncedFilter?.search && { search: debouncedFilter.search }),
      ...(debouncedFilter?.paymentStatus && {
        paymentStatus: debouncedFilter.paymentStatus,
      }),
      ...(debouncedFilter?.status && { status: debouncedFilter.status }),
      ...(debouncedFilter?.category && { category: debouncedFilter.category }),
    });

  const columns = [
    { header: "Helper", accessor: "helper", sortable: false },
    { header: "Receiver", accessor: "receiver", sortable: false },
    { header: "Category", accessor: "category", sortable: false },
    { header: "Status", accessor: "status", sortable: false },
  ];

  const handleSortAction = (col: any) => {
    if (sort[col]) {
      setsort({ ...sort, [col]: sort[col] === "dsc" ? "asc" : "dsc" });
    } else {
      setsort({ ...sort, [col]: "dsc" });
    }
  };

  const navigate = useNavigate();

  const handleViewOrganization = (organizationId: string) => {
    navigate(`/user-management/organizations/${organizationId}`);
  };
  const handleSearchChange = (e: any) => {
    setFilterParams({ ...filterParams, search: e.target.value });
  };

  const tableFilters = [
    {
      name: "status",
      onchange: (value: string) =>
        setFilterParams({ ...filterParams, status: value }),
      filterOptions: [
        { label: "Requested", value: "requested" },
        { label: "In-progress", value: "in-progress" },
        { label: "Completed", value: "completed" },
        { label: "Cancelled", value: "cancelled" },
      ],
    },
    {
      name: "category",
      onchange: (value: string) =>
        setFilterParams({ ...filterParams, category: value }),
      filterOptions: [
        { label: "Type 1", value: "type1" },
        { label: "Type 2", value: "type2" },
      ],
    },
    {
      name: "paymentStatus",
      onchange: (value: string) =>
        setFilterParams({ ...filterParams, paymentStatus: value }),
      filterOptions: [
        { label: "Unpaid", value: "unpaid" },
        { label: "Paid", value: "paid" },
      ],
    },
  ];

  const handleDeleteErrand = (errand: IErrand) => {
    useAlert(
      "Are you sure you want to delete this errand",
      "Delete",
      () => deleteErrand(errand.id),
      "Errand deleted"
    );
  };

  const handleViewErrand = (errand: IErrand) => {
    navigate(`${errand.id}/view`);
  };

  const handleErrandsApiResponse = (data: any[]) => {
    return data?.map((errand: any) => ({
      ...errand,
      helper: errand?.helper?.fullName || "No Helper Yet",
      receiver: errand?.receiver?.fullName,
      category: errand?.category?.name,
      status: (
        <Badge status={`${errand.status}`} type={BadgeType.ErrandStatus} />
      ),
    }));
  };

  return (
    <>
      <main className="grow content pt-5 h-full" id="content" role="content">
        <div className="container-fixed">
          <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-xl font-semibold leading-none text-gray-900">
                All Errands
              </h1>
              <div className="flex items-center flex-wrap gap-1.5 font-medium">
                <span className="text-md text-gray-600">All:</span>
                <span className="text-md text-gray-800 font-semibold me-2">
                  {usersApiResponse?.total || 0}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              {/* <a className="btn btn-sm btn-light" href="#">
               Import CSV
             </a> */}
              <Link className="btn btn-sm btn-primary" to={"/errands/create"}>
                Create Errand
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fixed">
          <div className="grid gap-5 lg:gap-7.5">
            <ReusableTable
              data={handleErrandsApiResponse(usersApiResponse?.data || [])}
              dataImage={true}
              columns={columns}
              deleteAction={handleDeleteErrand}
              isLoading={usersApiResponseDetails?.isFetching}
              error={null}
              totalItems={usersApiResponse?.total || 0}
              tableFilters={tableFilters}
              sort={{
                sortState: filterParams.sort,
                setSort: (newSort: string) =>
                  setFilterParams({ ...filterParams, sort: newSort }),
              }}
              currentPage={filterParams?.page}
              selectAction={false}
              itemsPerPage={filterParams.limit}
              onSearch={(value) =>
                setFilterParams({ ...filterParams, search: value })
              }
              viewAction={handleViewErrand}
              onSort={(head) => handleSortAction(head)}
              onPageChange={(value) =>
                setFilterParams({ ...filterParams, page: value })
              }
              onPerPageChange={(value) =>
                setFilterParams({ ...filterParams, limit: value })
              }
              onActionClick={() => null}
            />
          </div>
        </div>
      </main>

      {selectedErrand && selectedErrand.action === "view" && (
        <ReusableDetailsComponent
          data={selectedErrand.errand}
          title="View Errand"
          onClose={() => setSelectedErrand(null)}
        />
      )}
    </>
  );
}
