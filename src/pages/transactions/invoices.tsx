import { Link, useNavigate } from "react-router-dom";
import ReusableTable from "../../components/ReusableTable";
import { useState } from "react";
import { useDebouncedValue } from "../../utils/assetHelper";
import Badge from "../../components/badge";
import { BadgeType } from "../../constants/enums";
import { useGetInvoicesQuery } from "../../redux/services/invoice";

export function AllInvoices() {
  const [filterParams, setFilterParams] = useState({
    search: "",
    status: "",
    type: "",
    plan: "",
    page: 1,
    limit: 10,
    sort: "createdAt:DESC",
  });
  const [sort, setsort] = useState<any>({
    createdAt: "desc",
  });

  const debouncedFilter = useDebouncedValue(filterParams);

  const { data: invoicesApiResponse, ...invoicesApiResponseDetails } =
    useGetInvoicesQuery({
      page: filterParams.page,
      limit: filterParams.limit,
      ...(debouncedFilter?.sort && { sort: debouncedFilter.sort }),
      ...(debouncedFilter?.search && { search: debouncedFilter.search }),
      ...(debouncedFilter?.status && {
        status: debouncedFilter.status,
      }),
      ...(debouncedFilter?.type && { type: debouncedFilter.type }),
    });

  const columns = [
    { header: "Customer", accessor: "customer", sortable: true },
    { header: "Status", accessor: "status" },
    { header: "Payment Method", accessor: "paymentMethod" },
    { header: "Errand", accessor: "errand" },
    { header: "Created", accessor: "createdAt" },
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
        { label: "Pending", value: "pending" },
        { label: "Succeeded", value: "succeeded" },
        { label: "Failed", value: "failed" },
      ],
    },
    {
      name: "type",
      onchange: (value: string) =>
        setFilterParams({ ...filterParams, type: value }),
      filterOptions: [
        { label: "Errand", value: "errand" },
        { label: "invoice", value: "invoice" },
      ],
    },
  ];

  const handleSubscriptionApiResponse = (data: any[]) => {
    return data?.map((invoice: any) => ({
      ...invoice,
      status: (
        <Badge status={`${invoice.status}`} type={BadgeType.PaymentStatus} />
      ),
      paymentMethod: (
        <Badge
          status={`${invoice.paymentMethod}`}
          type={BadgeType.PaymentMethod}
        />
      ),
      customer: invoice?.customer?.fullName,
      errand: invoice?.errand?.title,
      errandId: invoice?.errand?.id,
    }));
  };

  return (
    <>
      <main className="grow content pt-5 h-full" id="content" role="content">
        <div className="container-fixed">
          <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-xl font-semibold leading-none text-gray-900">
                All invoices
              </h1>
              <div className="flex items-center flex-wrap gap-1.5 font-medium">
                <span className="text-md text-gray-600">All:</span>
                <span className="text-md text-gray-800 font-semibold me-2">
                  {invoicesApiResponse?.total}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              {/* <a className="btn btn-sm btn-light" href="#">
               Import CSV
             </a> */}
              {/* <Link className="btn btn-sm btn-primary" to={"/users/add"}>
                Add Users
              </Link> */}
            </div>
          </div>
        </div>
        <div className="container-fixed">
          <div className="grid gap-5 lg:gap-7.5">
            <ReusableTable
              data={handleSubscriptionApiResponse(
                invoicesApiResponse?.data || []
              )}
              dataImage={true}
              columns={columns}
              isLoading={invoicesApiResponseDetails?.isFetching}
              error={null}
              totalItems={invoicesApiResponse?.total || 0}
              tableFilters={tableFilters}
              sort={{
                sortState: filterParams.sort,
                setSort: (newSort: string) =>
                  setFilterParams({ ...filterParams, sort: newSort }),
              }}
              handleRefresh={invoicesApiResponseDetails.refetch}
              currentPage={filterParams?.page}
              selectAction={false}
              itemsPerPage={filterParams.limit}
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
