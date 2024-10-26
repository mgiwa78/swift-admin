import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Badge from "../../../components/badge";
import {
  BadgeType,
  CustomerTypes,
  ERRAND_STATUS,
  PAYMENT_STATUS,
} from "../../../constants/enums";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import * as Yup from "yup";

import { formatDateTime } from "../../../utils/dateUtils";
import {
  useGetErrandQuery,
  useUpdateErrandMutation,
} from "../../../redux/services/errands";
import { useGetErrandCategoriesQuery } from "../../../redux/services/errand-categories";
import { useSelector } from "react-redux";
import {
  useInitializePaymentMutation,
  useVerifyPaymentMutation,
} from "../../../redux/services/payments";
import { useGetProfileQuery } from "../../../redux/services/auth";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { formatToNaira } from "../../../utils/helpers";
import { toast } from "react-toastify";
import { suspenseHide, suspenseShow } from "../../../redux/slice/suspenseSlice";
type Props = {};

const ErrandOverview = (props: Props) => {
  const { errandId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { data: profileApiResponse } = useGetProfileQuery();
  const dispatch = useAppDispatch();
  const queryParams = new URLSearchParams(location.search);

  const reference = queryParams.get("reference");

  const handlePaymentVerification = async () => {
    try {
      const verificatioResponse: any = await verifyPayment(reference).unwrap();

      if (verificatioResponse.paymentStatus === PAYMENT_STATUS.Succeeded) {
        toast("Payment processed successfully");
        navigate(`/errands/view-errand/${errandId}`);
      } else {
        toast.error("Error processing payment");
      }
    } catch (error) {
    } finally {
      dispatch(suspenseHide());
    }
  };

  const [updateErrand, { ...updateErrandDetails }] = useUpdateErrandMutation();
  const [initializePayment, { ...initializePaymentDetails }] =
    useInitializePaymentMutation();

  const [verifyPayment, { ...verifyPaymentDetails }] =
    useVerifyPaymentMutation();

  useEffect(() => {
    if (reference) {
      handlePaymentVerification();
    }
  }, [reference]);

  const { data: errandApiResponse, ...errandApiResponseDetails } =
    useGetErrandQuery(errandId || "");

  if (errandApiResponseDetails.isLoading) {
    return <LoadingSpinner />;
  }

  const errandActions = errandApiResponse
    ? [
        ...(errandApiResponse?.status === ERRAND_STATUS["In-progress"]
          ? [
              {
                text: "Mark as complete",
                isLoading: updateErrandDetails.isLoading,
                btn: "primary",
                onClick: () =>
                  updateErrand({
                    id: errandApiResponse.id,
                    data: { status: ERRAND_STATUS.Completed },
                  }),
              },
            ]
          : []),
      ]
    : [];

  return (
    <div className=" gap-3 flex flex-col">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Erand overview</h3>
        </div>
        <div className="card-body pt-4 pb-3">
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="text-sm font-medium text-gray-500 pb-3.5 pe-3">
                  Title:
                </td>
                <td className="text-sm capitalize font-medium text-gray-800 pb-3.5">
                  {errandApiResponse?.title}
                </td>
              </tr>
              <tr>
                <td className="text-sm font-medium text-gray-500 pb-3.5 pe-3">
                  Description:
                </td>
                <td className="text-sm capitalize font-medium text-gray-800 pb-3.5">
                  {errandApiResponse?.description}
                </td>
              </tr>

              <tr>
                <td className="text-sm font-medium text-gray-500 pb-3.5 pe-3">
                  Helper:
                </td>
                <td className="text-sm capitalize font-medium text-gray-800 pb-3.5">
                  {errandApiResponse?.helper?.fullName || "No Helper"}
                </td>
              </tr>
              <tr>
                <td className="text-sm font-medium text-gray-500 pb-3.5 pe-3">
                  Category:
                </td>
                <td className="text-sm capitalize font-medium text-gray-800 pb-3.5">
                  {errandApiResponse?.category?.name}
                </td>
              </tr>
              <tr>
                <td className="text-sm font-medium text-gray-500 pb-3.5 pe-3">
                  Price:
                </td>
                <td className="text-sm capitalize font-medium text-gray-800 pb-3.5">
                  {formatToNaira(errandApiResponse?.price || 0)}
                </td>
              </tr>
              <tr>
                <td className="text-sm font-medium text-gray-500 pb-3.5 pe-3">
                  Payment status:
                </td>
                <td className="text-sm capitalize font-medium text-gray-800 pb-3.5">
                  {errandApiResponse?.paymentStatus}
                </td>
              </tr>
              <tr>
                <td className="text-sm font-medium text-gray-500 pb-3.5 pe-3">
                  Status:
                </td>
                <td className="text-sm capitalize font-medium text-gray-800 pb-3.5">
                  {errandApiResponse?.createdAt &&
                    formatDateTime(errandApiResponse?.createdAt)}
                </td>
              </tr>
              <tr>
                <td className="text-sm font-medium text-gray-500 pb-3.5 pe-3">
                  Status:
                </td>
                <td className="text-sm capitalize font-medium text-gray-800 pb-3.5">
                  <Badge
                    status={`${errandApiResponse?.status}`}
                    type={BadgeType.ErrandStatus}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {errandActions.length !== 0 && (
          <div className="modal-footer flex gap-4">
            {errandActions.map((errandActions: any) => (
              <button
                onClick={() =>
                  errandActions?.onClick && errandActions.onClick()
                }
                className={`btn btn-${errandActions?.btn || "secondary "} `}
                disabled={errandActions?.isLoading}
                type="button"
              >
                {errandActions?.isLoading ? (
                  <span>Loading</span>
                ) : (
                  errandActions?.text
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* 
      <ReusableForm
        attributes={attributes}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        handleCancel={handleCancel}
        title="Update project details"
        isLoading={false}
      /> */}
    </div>
  );
};

export default ErrandOverview;
