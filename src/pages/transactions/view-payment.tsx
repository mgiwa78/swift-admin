import React from "react";
import { IPayment } from "../../types/payment";
import ReusableDetailsComponent from "../../components/form/ReusableDetailsComponent";

type Props = { payment: IPayment; onClose: any };

const ViewPayment = ({ payment, onClose }: Props) => {
  const handlepaymentApiResponse = (payment: any) => {
    return {
      customer: payment.customer,
      amount: payment.amount,
      type: payment.type,
      date: payment.date,
      status: payment.status,
    };
  };
  console.log(payment);
  return (
    <ReusableDetailsComponent
      data={handlepaymentApiResponse(payment)}
      title="View Payment"
      onClose={() => onClose()}
    />
  );
};

export default ViewPayment;
