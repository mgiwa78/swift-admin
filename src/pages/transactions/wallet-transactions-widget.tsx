import React, { useState } from "react";
import ReusableTable from "../../components/ReusableTable";
import Badge from "../../components/badge";
import { BadgeType } from "../../constants/enums";
import ITransaction from "../../types/transaction";
import { formatDateTime } from "../../utils/dateUtils";
import { formatToNaira } from "../../utils/helpers";

const WalletTransactions = ({ transactions = [] }: { transactions: any }) => {
  const [sort, setSort] = useState<any>({ createdAt: "desc" });

  const [filterParams, setFilterParams] = useState({
    search: "",
    status: "",
    role: "",
    page: 1,
    limit: 10,
    sort: "createdAt:DESC",
  });

  const columns = [
    { header: "Type", accessor: "type", sortable: false },
    { header: "Amount", accessor: "amount", sortable: false },
    { header: "Description", accessor: "description", sortable: false },
    { header: "Date", accessor: "date", sortable: true },
  ];

  const handleSortAction = (col: any) => {
    if (sort[col]) {
      setSort({ ...sort, [col]: sort[col] === "dsc" ? "asc" : "dsc" });
    } else {
      setSort({ ...sort, [col]: "dsc" });
    }
  };

  const handleTransactionsData = (data: ITransaction[]) => {
    return data.map((transaction) => ({
      ...transaction,
      date: formatDateTime(transaction.createdAt),
      amount: formatToNaira(transaction.amount),
      type: (
        <Badge
          status={`${transaction.type}`}
          type={BadgeType.TransactionType}
        />
      ),
    }));
  };

  return (
    <main className="grow content pt-5 h-full" id="content" role="content">
      <div className="container-fixed">
        <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-xl font-semibold leading-none text-gray-900">
              Wallet Transactions
            </h1>
            <div className="flex items-center flex-wrap gap-1.5 font-medium">
              <span className="text-md text-gray-600">All:</span>
              <span className="text-md text-gray-800 font-semibold me-2">
                {transactions?.total}
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
            data={handleTransactionsData(transactions)}
            columns={columns}
            isLoading={false}
            error={null}
            totalItems={transactions.length}
            sort={{
              sortState: filterParams.sort,
              setSort: (newSort: string) =>
                setFilterParams({ ...filterParams, sort: newSort }),
            }}
            currentPage={1}
            itemsPerPage={10}
            onSort={(head) => handleSortAction(head)}
            onPageChange={() => {}}
            onPerPageChange={() => {}}
          />
        </div>
      </div>
    </main>
  );
};

export default WalletTransactions;
