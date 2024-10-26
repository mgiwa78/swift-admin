import { Link, useNavigate } from "react-router-dom";
import ReusableTable from "../../../components/ReusableTable";
import { useState } from "react";
import { useDebouncedValue } from "../../../utils/assetHelper";
import {
  useDeleteAdminMutation,
  useGetAdminsQuery,
} from "../../../redux/services/admin";
import Badge from "../../../components/badge";
import { BadgeType } from "../../../constants/enums";
import useAlert from "../../../utils/use-alert";
import { IAdmin } from "../../../types/admin";

export function AllAdmins() {
  const [showCreateOrganizationModal, setShowCreateOrganizationModal] =
    useState<boolean>(false);
  const [deleteAdmin] = useDeleteAdminMutation();

  const [filterParams, setFilterParams] = useState({
    search: "",
    status: "",
    role: "",
    page: 1,
    limit: 10,
    sort: "createdAt:DESC",
  });
  const [sort, setsort] = useState<any>({
    createdAt: "desc",
  });

  const debouncedFilter = useDebouncedValue(filterParams);

  const { data: adminApiResponse, ...adminApiResponseDetails } =
    useGetAdminsQuery({
      page: filterParams.page,
      limit: filterParams.limit,
      ...(debouncedFilter?.sort && { sort: debouncedFilter.sort }),
      ...(debouncedFilter?.search && { search: debouncedFilter.search }),
      ...(debouncedFilter?.status && { status: debouncedFilter.status }),
      ...(debouncedFilter?.role && { role: debouncedFilter.role }),
    });

  const columns = [
    { header: "Name", accessor: "fullName", sortable: true },
    { header: "Role", accessor: "role" },
    { header: "Status", accessor: "status" },
    { header: "Address", accessor: "address" },
  ];

  const handleViewAdmin = (admin: IAdmin) => {
    console.log(admin.id);
    navigate(`/admins/view-admin/${admin.id}`);
  };

  const handleDeleteAdmin = (admin: IAdmin) => {
    useAlert(
      "Are you sure you want to delete this admin",
      "Delete",
      () => deleteAdmin(admin.id),
      "Admin deleted"
    );
  };

  const handleSortAction = (col: any) => {
    if (sort[col]) {
      setsort({ ...sort, [col]: sort[col] === "dsc" ? "asc" : "dsc" });
    } else {
      setsort({ ...sort, [col]: "dsc" });
    }
  };

  const navigate = useNavigate();

  const tableFilters = [
    {
      name: "status",
      onchange: (value: string) =>
        setFilterParams({ ...filterParams, status: value }),
      filterOptions: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
      ],
    },
    {
      name: "role",
      onchange: (value: string) =>
        setFilterParams({ ...filterParams, role: value }),
      filterOptions: [
        { label: "Admin", value: "admin" },
        { label: "Admin", value: "admin" },
      ],
    },
  ];

  const debouncedSearchQuery = useDebouncedValue(filterParams.search);

  const handleAdminApiResponse = (data: any[]) => {
    return data?.map((admin: any) => ({
      ...admin,
      fullName: admin.fullName,
      role: admin.role.name,
      status: <Badge status={`${admin.status}`} type={BadgeType.UserStatus} />,
    }));
  };

  return (
    <>
      <main className="grow content pt-5 h-full" id="content" role="content">
        <div className="container-fixed">
          <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-xl font-semibold leading-none text-gray-900">
                All Admins
              </h1>
              <div className="flex items-center flex-wrap gap-1.5 font-medium">
                <span className="text-md text-gray-600">All Members:</span>
                <span className="text-md text-gray-800 font-semibold me-2">
                  {adminApiResponse?.total}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              {/* <a className="btn btn-sm btn-light" href="#">
               Import CSV
             </a> */}
              <Link className="btn btn-sm btn-primary" to={"/admins/add"}>
                Add Admins
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fixed">
          <div className="grid gap-5 lg:gap-7.5">
            <ReusableTable
              data={handleAdminApiResponse(adminApiResponse?.data || [])}
              dataImage={true}
              columns={columns}
              isLoading={adminApiResponseDetails?.isFetching}
              error={null}
              totalItems={adminApiResponse?.total || 0}
              tableFilters={tableFilters}
              sort={{
                sortState: filterParams.sort,
                setSort: (newSort: string) =>
                  setFilterParams({ ...filterParams, sort: newSort }),
              }}
              handleRefresh={adminApiResponseDetails.refetch}
              deleteAction={handleDeleteAdmin}
              viewAction={handleViewAdmin}
              currentPage={filterParams?.page}
              selectAction={false}
              itemsPerPage={filterParams.limit}
              onSearch={(value) =>
                setFilterParams({ ...filterParams, search: value })
              }
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
    </>
  );
}
