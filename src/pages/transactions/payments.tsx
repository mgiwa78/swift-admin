import { Link, useNavigate } from "react-router-dom";
import ReusableTable from "../../components/ReusableTable";
import { useState } from "react";
import { useDebouncedValue } from "../../utils/assetHelper";
import { useGetPaymentsQuery } from "../../redux/services/payments";
import Badge from "../../components/badge";
import { BadgeType } from "../../constants/enums";
import { formatDateTime } from "../../utils/dateUtils";
import { formatToNaira } from "../../utils/helpers";
import ViewPayment from "./view-payment";

export function AllPayments() {
  const [filterParams, setFilterParams] = useState({
    search: "",
    status: "",
    paymentStatus: "",
    type: "",
    page: 1,
    limit: 10,
    sort: "createdAt:DESC",
  });
  const [sort, setsort] = useState<any>({
    createdAt: "desc",
  });

  const debouncedFilter = useDebouncedValue(filterParams);

  const [selectedPayment, setSelectedPayment] = useState<any>(null);

  const { data: paymentsApiResponse, ...paymentsApiResponseDetails } =
    useGetPaymentsQuery({
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
    { header: "amount", accessor: "amount", sortable: true },
    { header: "Paid on", accessor: "date" },
    { header: "Type", accessor: "type" },
    { header: "Payment Status", accessor: "status" },
  ];

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
      name: "payment status",
      onchange: (value: string) =>
        setFilterParams({ ...filterParams, status: value }),
      filterOptions: [
        { label: "Succeded", value: "succeeded" },
        { label: "Failed", value: "failed" },
      ],
    },
    {
      name: "type",
      onchange: (value: string) =>
        setFilterParams({ ...filterParams, type: value }),
      filterOptions: [{ label: "Errand Payment", value: "payment" }],
    },
  ];

  const debouncedSearchQuery = useDebouncedValue(filterParams.search);

  const handlepaymentApiResponse = (data: any[]) => {
    return data?.map((payment: any) => ({
      ...payment,
      customer: payment.customer.fullName,
      amount: formatToNaira(payment.amount),
      type: payment.type,
      date: formatDateTime(payment.createdAt),

      status: (
        <Badge status={`${payment.status}`} type={BadgeType.PaymentStatus} />
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
                Allpayments
              </h1>
              <div className="flex items-center flex-wrap gap-1.5 font-medium">
                <span className="text-md text-gray-600">All:</span>
                <span className="text-md text-gray-800 font-semibold me-2">
                  {paymentsApiResponse?.total}
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
              data={handlepaymentApiResponse(paymentsApiResponse?.data || [])}
              dataImage={true}
              columns={columns}
              isLoading={paymentsApiResponseDetails?.isLoading}
              error={null}
              viewAction={setSelectedPayment}
              totalItems={paymentsApiResponse?.total || 0}
              tableFilters={tableFilters}
              sort={{
                sortState: filterParams.sort,
                setSort: (newSort: string) =>
                  setFilterParams({ ...filterParams, sort: newSort }),
              }}
              handleRefresh={paymentsApiResponseDetails.refetch}
              currentPage={filterParams?.page}
              selectAction={false}
              itemsPerPage={filterParams.limit}
              // onSearch={(value) =>
              //   setFilterParams({ ...filterParams, search: value })
              // }
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

      {selectedPayment && (
        <ViewPayment
          payment={selectedPayment}
          onClose={() => setSelectedPayment(null)}
        />
      )}
    </>
  );
}
