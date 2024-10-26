import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { IErrand } from "../../../types/errand";
import {
  useCreateErrandRequestMutation,
  useGetErrandRequestQuery,
  useGetErrandRequestsQuery,
  useUpdateErrandErrandRequestStatusMutation,
} from "../../../redux/services/errand-requests";
import LoadingSplash from "../../../components/common/loading-splash";
import { BadgeType, ERRAND_REQUEST_STATUS } from "../../../constants/enums";
import ReusableDetailsComponent from "../../../components/form/ReusableDetailsComponent";
import { IErrandRequest } from "../../../types/errand-request";
import { formatToNaira } from "../../../utils/helpers";
import Badge from "../../../components/badge";
import { formatDateTime } from "../../../utils/dateUtils";

type Props = { errandRequest: IErrandRequest; onClose: any };

const ErrandRequestDetails = ({ errandRequest, onClose }: Props) => {
  const [updateErrandRequestStatus, { ...updateErrandRequestStatusDetails }] =
    useUpdateErrandErrandRequestStatusMutation();
  const { errandId } = useParams();

  const { data: errandRequestApiResponse, ...errandRequestApiResponseDetails } =
    useGetErrandRequestQuery(errandRequest?.id, {
      skip: !errandRequest?.id,
    });

  if (errandRequestApiResponseDetails.isLoading) {
    <LoadingSplash />;
  }

  const handleErrandsRequestApiResponse = (data: any) => {
    console.log(data);
    return {
      requested: data?.createdAt && formatDateTime(data?.createdAt),
      errand: data?.errand?.title,
      requester: data?.requester?.fullName,
      category: data?.errand?.category?.name,
      price: formatToNaira(data?.errand?.price),
      id: data?.id,
      statusName: data?.status,
      status: (
        <Badge
          status={`${data?.status}`}
          type={BadgeType.ErrandRequestStatus}
        />
      ),
    };
  };

  const ViewErrandRequestActions = errandRequestApiResponse
    ? [
        ...(errandRequestApiResponse?.status === ERRAND_REQUEST_STATUS.Pending
          ? [
              {
                text: "Reject",
                isLoading: updateErrandRequestStatusDetails.isLoading,
                btn: "danger",
                onClick: () =>
                  updateErrandRequestStatus({
                    id: errandRequest.id,
                    data: { status: "rejected" },
                  }),
              },
              {
                text: "Approve",
                isLoading: updateErrandRequestStatusDetails.isLoading,
                btn: "primary",
                onClick: () =>
                  updateErrandRequestStatus({
                    id: errandRequestApiResponse?.id,
                    data: {
                      helperId: errandRequestApiResponse?.requester?.id,
                      errand: errandRequestApiResponse?.errand?.id,
                      status: "accepted",
                    },
                  }),
              },
            ]
          : []),
      ]
    : [];

  return (
    <>
      <ReusableDetailsComponent
        isLoading={errandRequestApiResponseDetails.isLoading}
        data={handleErrandsRequestApiResponse(errandRequestApiResponse)}
        title="View Errand"
        actions={ViewErrandRequestActions}
        onClose={() => onClose()}
      />
    </>
  );
};

export default ErrandRequestDetails;
