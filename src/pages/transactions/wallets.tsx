import { Link, useNavigate } from "react-router-dom";
import ReusableTable from "../../components/ReusableTable";
import { useState } from "react";
import { useDebouncedValue } from "../../utils/assetHelper";
import { useGetWalletsQuery } from "../../redux/services/wallet";
import { formatDateTime } from "../../utils/dateUtils";
import { formatToNaira } from "../../utils/helpers";
import Iwallet from "../../types/wallet";

export function AllWallets() {
  const [filterParams, setFilterParams] = useState({
    search: "",
    page: 1,
    limit: 10,
    sort: "createdAt:DESC",
  });

  const [sort, setsort] = useState<any>({
    createdAt: "desc",
  });

  const debouncedFilter = useDebouncedValue(filterParams);

  const { data: walletsApiResponse, ...walletsApiResponseDetails } =
    useGetWalletsQuery({
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
    { header: "Payment Method", accessor: "balance" },
    { header: "Last Transaction", accessor: "lastTransaction" },
  ];

  const handleSortAction = (col: any) => {
    if (sort[col]) {
      setsort({ ...sort, [col]: sort[col] === "dsc" ? "asc" : "dsc" });
    } else {
      setsort({ ...sort, [col]: "dsc" });
    }
  };

  const navigate = useNavigate();

  const handleViewWallet = (wallet: Iwallet) => {
    console.log(wallet);
    navigate(`${wallet.id}/view`);
  };
  const handleSearchChange = (e: any) => {
    setFilterParams({ ...filterParams, search: e.target.value });
  };

  const handleWalletApiResponse = (data: any[]) => {
    return data?.map((wallet: any) => ({
      ...wallet,
      customer: wallet?.customer?.fullName,
      balance: formatToNaira(wallet?.balance),
      lastTransaction: formatDateTime(wallet?.updatedAt),
    }));
  };

  return (
    <>
      <main className="grow content pt-5 h-full" id="content" role="content">
        <div className="container-fixed">
          <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-xl font-semibold leading-none text-gray-900">
                All wallets
              </h1>
              <div className="flex items-center flex-wrap gap-1.5 font-medium">
                <span className="text-md text-gray-600">All:</span>
                <span className="text-md text-gray-800 font-semibold me-2">
                  {walletsApiResponse?.total}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5"></div>
          </div>
        </div>
        <div className="container-fixed">
          <div className="grid gap-5 lg:gap-7.5">
            <ReusableTable
              data={handleWalletApiResponse(walletsApiResponse?.data || [])}
              columns={columns}
              isLoading={walletsApiResponseDetails?.isFetching}
              error={null}
              totalItems={walletsApiResponse?.total || 0}
              sort={{
                sortState: filterParams.sort,
                setSort: (newSort: string) =>
                  setFilterParams({ ...filterParams, sort: newSort }),
              }}
              viewAction={handleViewWallet}
              handleRefresh={walletsApiResponseDetails.refetch}
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
