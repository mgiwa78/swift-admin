import { Link, useNavigate, useParams } from "react-router-dom";
import ReusableTable from "../../../components/ReusableTable";
import { useState } from "react";
import { useDebouncedValue } from "../../../utils/assetHelper";
import {
  useDeleteErrandMutation,
  useGetErrandsQuery,
} from "../../../redux/services/errands";
import Badge from "../../../components/badge";
import {
  BadgeType,
  ERRAND_REQUEST_STATUS,
  SOCKET_EVENTS_ENUMS,
} from "../../../constants/enums";
import ReusableDetailsComponent from "../../../components/form/ReusableDetailsComponent";
import { IErrand } from "../../../types/errand";
import useAlert from "../../../utils/use-alert";
import {
  useGetErrandRequestQuery,
  useGetErrandRequestsForErrandQuery,
  useGetErrandRequestsQuery,
  useUpdateErrandErrandRequestStatusMutation,
} from "../../../redux/services/errand-requests";
import { IErrandRequest } from "../../../types/errand-request";
import { formatToNaira } from "../../../utils/helpers";
import ErrandRequestDetails from "./errand-request-details";
import { formatDateTime } from "../../../utils/dateUtils";
import { useSocketEvent } from "../../../hooks/useSocketEvent";

export function AllRequestsForErrand() {
  const [deleteErrand] = useDeleteErrandMutation();
  const { customerRole } = useParams();

  const [updateErrandRequestStatus, { ...updateErrandRequestStatusDetails }] =
    useUpdateErrandErrandRequestStatusMutation();
  const { errandId } = useParams();

  const [selectedErrandRequest, setSelectedErrandRequest] = useState<any>({
    action: "",
    errandRequest: null,
  });

  const { data: errandRequestApiResponse, ...errandRequestApiResponseDetails } =
    useGetErrandRequestQuery(selectedErrandRequest?.errandRequest?.id, {
      skip: !selectedErrandRequest?.errandRequest?.id,
    });

  const [filterParams, setFilterParams] = useState({
    search: "",
    status: "",
    page: 1,
    limit: 10,
    sort: "createdAt:DESC",
  });

  const debouncedFilter = useDebouncedValue(filterParams);

  const {
    data: singleErrandRequestsApiResponse,
    ...singleErrandRequestsApiResponseDetails
  } = useGetErrandRequestsForErrandQuery(
    {
      errand: errandId,
      role: customerRole,
      page: filterParams.page,
      limit: filterParams.limit,
      ...(debouncedFilter?.status && {
        status: debouncedFilter.status,
      }),
    },
    { skip: !errandId }
  );

  const [sort, setsort] = useState<any>({
    createdAt: "desc",
  });

  const {
    data: errandRequestsApiResponse,
    ...errandRequestsApiResponseDetails
  } = useGetErrandRequestsQuery(
    {
      page: filterParams.page,
      limit: filterParams.limit,
      role: customerRole,
      ...(debouncedFilter?.status && {
        status: debouncedFilter.status,
      }),
    },
    { skip: !!errandId }
  );

  const columns = [
    { header: "Requester", accessor: "requester", sortable: false },
    // { header: "Errand", accessor: "errand", sortable: false },
    { header: "Status", accessor: "status", sortable: false },
    { header: "Requested", accessor: "requested", sortable: true },
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
      name: "status",
      onchange: (value: string) =>
        setFilterParams({ ...filterParams, status: value }),
      filterOptions: [
        { label: "Rejected", value: ERRAND_REQUEST_STATUS.Rejected },
        { label: "Pending", value: ERRAND_REQUEST_STATUS.Pending },
        { label: "Accepted", value: ERRAND_REQUEST_STATUS.Accepted },
      ],
    },
  ];

  const handleDeleteErrand = (errand: IErrand) => {
    useAlert(
      "Are you sure you want to delete this errand",
      "Delete",
      () => deleteErrand(errand.id),
      "Errand deleted"
    );
  };

  const handleViewErrandRequest = (errandRequest: IErrandRequest) => {
    setSelectedErrandRequest({
      action: "view",
      errandRequest,
    });
  };

  const handleErrandsRequestApiResponse = (data: any) => {
    return data?.map((errandRequestResponse: any) => ({
      requested: formatDateTime(errandRequestResponse?.createdAt),
      errand: errandRequestResponse?.errand?.title,
      requester: errandRequestResponse?.requester?.fullName,
      category: errandRequestResponse?.errand?.category?.name,
      price: formatToNaira(errandRequestResponse?.price),
      id: errandRequestResponse?.id,
      statusName: errandRequestResponse?.status,
      status: (
        <Badge
          status={`${errandRequestResponse?.status}`}
          type={BadgeType.ErrandRequestStatus}
        />
      ),
    }));
  };

  useSocketEvent(SOCKET_EVENTS_ENUMS.NEW_ERRAND_REQUEST, {
    toastType: "info",
    getMessage: (data: any) =>
      data.message || `New errand request submitted created: ${data.id}`,
    action: () => singleErrandRequestsApiResponseDetails.refetch(),
  });

  return (
    <>
      <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-xl font-semibold leading-none text-gray-900">
            Errand Requests
          </h1>
          <div className="flex items-center flex-wrap gap-1.5 font-medium">
            <span className="text-md text-gray-600">All:</span>
            <span className="text-md text-gray-800 font-semibold me-2">
              {errandId
                ? singleErrandRequestsApiResponse?.total
                : errandRequestsApiResponse?.total || 0}
            </span>
          </div>
        </div>
      </div>
      <div className="grid gap-5 lg:gap-7.5">
        <ReusableTable
          data={handleErrandsRequestApiResponse(
            errandId
              ? singleErrandRequestsApiResponse?.data
              : errandRequestsApiResponse?.data
          )}
          dataImage={true}
          columns={columns}
          deleteAction={handleDeleteErrand}
          isLoading={
            errandId
              ? singleErrandRequestsApiResponseDetails?.isFetching
              : errandRequestsApiResponseDetails?.isFetching
          }
          error={null}
          handleRefresh={() =>
            errandId
              ? singleErrandRequestsApiResponseDetails?.refetch()
              : errandRequestsApiResponseDetails?.refetch()
          }
          totalItems={
            errandId
              ? singleErrandRequestsApiResponse?.total || 0
              : errandRequestsApiResponse?.total || 0
          }
          tableFilters={tableFilters}
          sort={{
            sortState: filterParams.sort,
            setSort: (newSort: string) =>
              setFilterParams({ ...filterParams, sort: newSort }),
          }}
          currentPage={filterParams?.page}
          selectAction={false}
          itemsPerPage={filterParams.limit}
          // onSearch={(value) =>
          //   setFilterParams({ ...filterParams, search: value })
          // }
          viewAction={handleViewErrandRequest}
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

      {selectedErrandRequest && selectedErrandRequest.action === "view" && (
        <ErrandRequestDetails
          errandRequest={selectedErrandRequest.errandRequest}
          onClose={() => setSelectedErrandRequest(null)}
        />
      )}
    </>
  );
}
