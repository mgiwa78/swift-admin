import LoadingSpinner from "../../../components/common/LoadingSpinner";
import { useGetWalletQuery } from "../../../redux/services/wallet";
import { formatToNaira } from "../../../utils/helpers";
import WalletTransactions from "../../transactions/wallet-transactions-widget";

export function Wallet() {
  const { data: walletApiResponse, ...walletApiResponseDetails } =
    useGetWalletQuery();

  if (walletApiResponseDetails.isLoading) {
    <LoadingSpinner />;
  }
  return (
    <>
      <div className="container-fixed">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-semibold leading-none text-gray-900">
              Setting - Wallet
            </h1>
          </div>
          <div className="flex">
            <button
              onClick={() => walletApiResponseDetails.refetch()}
              disabled={walletApiResponseDetails.isLoading}
              style={{ height: "35px" }}
              className="btn btn-sm d-flex gap-2 justify-content-center align-items-center fw-bold btn-primary"
            >
              <i className="ki-filled ki-arrows-circle"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container-fixed">
        <div className="grid grid-cols-1  mx-auto xl:w-[38.75rem] gap-5 lg:gap-7.5">
          <div className="col-span-2">
            <div className="flex flex-col gap-5 lg:gap-7.5">
              <div className="card">
                <div className="card-body lg:py-7.5">
                  <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
                    <div className="flex flex-wrap items-center gap-5 justify-between">
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-col items-start gap-1">
                          <h2 className="text-md font-semibold text-gray-500">
                            Wallet Balance
                          </h2>
                          <h2 className="text-2xl font-semibold text-gray-900">
                            {formatToNaira(walletApiResponse?.balance || 0)}
                          </h2>
                        </div>
                      </div>
                      <div className="flex gap-2.5">
                        <a className="btn btn-sm btn-light" href="#">
                          Make Withdraw
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <WalletTransactions
                transactions={walletApiResponse?.transactions || []}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
