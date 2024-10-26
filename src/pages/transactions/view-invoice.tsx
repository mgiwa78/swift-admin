import React from "react";

import ReusableDetailsComponent from "../../components/form/ReusableDetailsComponent";
import IInvoice from "../../types/invoice";

type Props = { invoice: IInvoice; onClose: any };

const ViewInvoice = ({ invoice, onClose }: Props) => {
  const handleinvoiceApiResponse = (invoice: any) => {
    return {
      customer: invoice.customer,
      amount: invoice.amount,
      type: invoice.type,
      date: invoice.date,
      paymentMethod: invoice.paymentMethod,
      errand: invoice.errand,
      status: invoice.status,
    };
  };
  console.log(invoice);
  return (
    <ReusableDetailsComponent
      data={handleinvoiceApiResponse(invoice)}
      title="View Invoice"
      onClose={() => onClose()}
    />
  );
};

export default ViewInvoice;
