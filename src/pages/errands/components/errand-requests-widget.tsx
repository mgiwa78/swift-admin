import React, { useState } from "react";
import ReusableTable from "../../../components/ReusableTable";
import Badge from "../../../components/badge";
import { BadgeType } from "../../../constants/enums";

const ErrandRequestsWidget = () => {
  const [sort, setSort] = useState<any>({ createdAt: "desc" });

  const sampleErrands = [
    {
      id: 1,
      helper: { firstName: "John", lastName: "Doe" },
      receiver: { firstName: "Jane", lastName: "Smith" },
      errand: { name: "Grocery Delivery" },
      status: "requested",
      paymentStatus: "unpaid",
      date: "2024-09-10",
    },
    {
      id: 2,
      helper: { firstName: "Alice", lastName: "Johnson" },
      receiver: { firstName: "Bob", lastName: "Brown" },
      errand: { name: "Parcel Delivery" },
      status: "in-progress",
      paymentStatus: "paid",
      date: "2024-09-12",
    },
    {
      id: 3,
      helper: { firstName: "Chris", lastName: "Evans" },
      receiver: { firstName: "Sophia", lastName: "Green" },
      errand: { name: "Document Delivery" },
      status: "completed",
      paymentStatus: "paid",
      date: "2024-09-13",
    },
    {
      id: 4,
      helper: { firstName: "Mike", lastName: "Brown" },
      receiver: { firstName: "Anna", lastName: "Taylor" },
      errand: { name: "Laundry Pickup" },
      status: "cancelled",
      paymentStatus: "unpaid",
      date: "2024-09-15",
    },
  ];

  const columns = [
    { header: "Helper", accessor: "helper", sortable: false },
    { header: "Errand", accessor: "errand", sortable: false },
    { header: "Date", accessor: "date", sortable: true },
  ];

  const handleSortAction = (col: any) => {
    if (sort[col]) {
      setSort({ ...sort, [col]: sort[col] === "dsc" ? "asc" : "dsc" });
    } else {
      setSort({ ...sort, [col]: "dsc" });
    }
  };

  const handleErrandsData = (data: any[]) => {
    return data.map((errand) => ({
      ...errand,
      helper: `${errand.helper.firstName} ${errand.helper.lastName}`,
      receiver: `${errand.receiver.firstName} ${errand.receiver.lastName}`,
      errand: errand.errand.name,
      status: (
        <Badge status={`${errand.status}`} type={BadgeType.ErrandStatus} />
      ),
    }));
  };

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Errand Requests</h2>
      <ReusableTable
        data={handleErrandsData(sampleErrands)}
        columns={columns}
        isLoading={false}
        error={null}
        totalItems={sampleErrands.length}
        sort={sort}
        currentPage={1}
        itemsPerPage={10}
        onSort={(head) => handleSortAction(head)}
        onPageChange={() => {}}
        onPerPageChange={() => {}}
        selectAction={false}
        viewAction={() => {}}
        deleteAction={() => {}}
      />
    </>
  );
};

export default ErrandRequestsWidget;
