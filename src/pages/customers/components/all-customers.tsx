import { Link, useNavigate } from "react-router-dom";
import ReusableTable from "../../../components/ReusableTable";
import { useState } from "react";
import { useDebouncedValue } from "../../../utils/assetHelper";
import {
  useDeleteCustomerMutation,
  useGetCustomersQuery,
} from "../../../redux/services/customers";
import Badge from "../../../components/badge";
import { BadgeType } from "../../../constants/enums";
import useAlert from "../../../utils/use-alert";
import { ICustomer } from "../../../types/customers";
import { useGetZonesQuery } from "../../../redux/services/zones";
import LoadingSplash from "../../../components/common/loading-splash";

export function AllCustomers() {
  const [showCreateOrganizationModal, setShowCreateOrganizationModal] =
    useState<boolean>(false);
  const [deleteCustomer] = useDeleteCustomerMutation();

  const [filterParams, setFilterParams] = useState({
    search: "",
    status: "",
    zone: "",
    customerType: "",
    page: 1,
    limit: 10,
    sort: "createdAt:DESC",
  });
  const [sort, setsort] = useState<any>({
    createdAt: "desc",
  });

  const debouncedFilter = useDebouncedValue(filterParams);
  const { data: zoneApiResponse, ...zoneApiResponseDetails } = useGetZonesQuery(
    {}
  );
  const { data: customersApiResponse, ...customersApiResponseDetails } =
    useGetCustomersQuery({
      page: filterParams.page,
      limit: filterParams.limit,
      ...(debouncedFilter?.sort && { sort: debouncedFilter.sort }),
      ...(debouncedFilter?.search && { search: debouncedFilter.search }),
      ...(debouncedFilter?.status && { status: debouncedFilter.status }),
      ...(debouncedFilter?.zone && { zone: debouncedFilter.zone }),
      ...(debouncedFilter?.customerType && {
        customerType: debouncedFilter.customerType,
      }),
    });

  const columns = [
    { header: "Name", accessor: "name", sortable: true },
    { header: "Status", accessor: "status" },
    { header: "Customer Type", accessor: "customerType" },
    { header: "Address", accessor: "address" },
  ];

  const handleViewCustomer = (customer: ICustomer) => {
    console.log(customer.id);
    navigate(`/customers/view-customer/${customer.id}`);
  };

  const handleDeleteCustomer = (customer: ICustomer) => {
    useAlert(
      "Are you sure you want to delete this customer",
      "Delete",
      () => deleteCustomer(customer.id),
      "User  deleted"
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

  if (zoneApiResponseDetails.isLoading) {
    return <LoadingSplash />;
  }

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
      name: "zone",
      onchange: (value: string) =>
        setFilterParams({ ...filterParams, zone: value }),
      filterOptions: [
        { label: "Select Zone", value: "" },
        ...(zoneApiResponse?.data
          ? zoneApiResponse?.data?.map((zone) => ({
              label: zone.name,
              value: Number(zone.id),
            }))
          : []),
      ],
    },
    {
      name: "role",
      onchange: (value: string) =>
        setFilterParams({ ...filterParams, customerType: value }),
      filterOptions: [
        { label: "Reciever", value: "reciever" },
        { label: "Helper", value: "helper" },
      ],
    },
  ];

  const debouncedSearchQuery = useDebouncedValue(filterParams.search);

  const handleCustomerApiResponse = (data: any[]) => {
    return data?.map((customer: any) => ({
      ...customer,
      name: customer.fullName,
      status: (
        <Badge status={`${customer.status}`} type={BadgeType.UserStatus} />
      ),
      customerType: (
        <Badge
          status={`${customer.customerType}`}
          type={BadgeType.CustomerType}
        />
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
                All Customers
              </h1>
              <div className="flex items-center flex-wrap gap-1.5 font-medium">
                <span className="text-md text-gray-600">All Members:</span>
                <span className="text-md text-gray-800 font-semibold me-2">
                  {customersApiResponse?.total}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              {/* <a className="btn btn-sm btn-light" href="#">
               Import CSV
             </a> */}
              <Link className="btn btn-sm btn-primary" to={"/customers/add"}>
                Add Customers
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fixed">
          <div className="grid gap-5 lg:gap-7.5">
            <ReusableTable
              data={handleCustomerApiResponse(customersApiResponse?.data || [])}
              dataImage={true}
              columns={columns}
              isLoading={customersApiResponseDetails?.isFetching}
              error={null}
              totalItems={customersApiResponse?.total || 0}
              tableFilters={tableFilters as any}
              sort={{
                sortState: filterParams.sort,
                setSort: (newSort: string) =>
                  setFilterParams({ ...filterParams, sort: newSort }),
              }}
              handleRefresh={customersApiResponseDetails.refetch}
              deleteAction={handleDeleteCustomer}
              viewAction={handleViewCustomer}
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
