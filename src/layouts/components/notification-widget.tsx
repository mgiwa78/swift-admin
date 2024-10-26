import React from "react";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { useGetNotificationsQuery } from "../../redux/services/notification";
import { timeAgo } from "../../utils/dateUtils";

type Props = {};

const NotificationWidget = (props: Props) => {
  const { data: notificationsApiResponse, ...notificationsApiResponseDetails } =
    useGetNotificationsQuery({});

  const {
    data: isNotReadNotificationsApiResponse,
    ...isNotReadNotificationsApiResponseDetails
  } = useGetNotificationsQuery({ isRead: false });

  if (
    isNotReadNotificationsApiResponseDetails.isLoading ||
    notificationsApiResponseDetails.isLoading
  ) {
    return <LoadingSpinner />;
  }

  return (
    <div
      className="dropdown"
      data-dropdown="true"
      data-dropdown-offset="70px, 10px"
      data-dropdown-placement="bottom-end"
      data-dropdown-trigger="click|lg:click"
    >
      <button className="dropdown-toggle btn btn-icon btn-icon-lg relative cursor-pointer size-9 rounded-full hover:bg-primary-light hover:text-primary dropdown-open:bg-primary-light dropdown-open:text-primary text-gray-500">
        <i className="ki-filled ki-notification-on"></i>
        <span
          className={`badge badge-dot ${
            isNotReadNotificationsApiResponse?.total ? "badge-success" : ""
          } size-[5px] absolute top-0.5 right-0.5 transform translate-y-1/2`}
        ></span>
      </button>
      <div className="dropdown-content light:border-gray-300 w-full max-w-[460px]">
        <div
          className="flex items-center justify-between gap-2.5 text-sm text-gray-900 font-semibold px-5 py-2.5"
          id="notifications_header"
        >
          Notifications
          <button
            className="btn btn-sm btn-icon btn-light btn-clear shrink-0"
            data-dropdown-dismiss="true"
          >
            <i className="ki-filled ki-cross"></i>
          </button>
        </div>
        <div className="border-b border-b-gray-200"></div>

        <div className="flex flex-col">
          <div
            className="scrollable-y-auto"
            data-scrollable="true"
            data-scrollable-dependencies="#header"
            data-scrollable-max-height="auto"
            data-scrollable-offset="200px"
          >
            <div className="flex flex-col gap-5 pt-3 pb-4 divider-y divider-gray-200">
              <div className="flex grow gap-2.5 px-5">
                <div className="flex flex-col gap-3.5">
                  {notificationsApiResponse?.data?.map((notification) => (
                    <div className="flex flex-col gap-1">
                      <div className="text-2sm font-medium">
                        <h2 className="text-gray-700">{notification.title}</h2>
                        <a
                          className="hover:text-primary-active text-gray-600 font-semibold"
                          href="#"
                        >
                          {notification.message}
                        </a>
                        <br />
                        <a
                          className="hover:text-primary-active text-primary"
                          href="#"
                        >
                          View
                        </a>
                      </div>
                      <span className="flex items-center text-2xs font-medium text-gray-500">
                        {timeAgo(notification.createdAt)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-b-gray-200"></div>
          <div className="p-5 gap-2.5" id="notifications_all_footer">
            <div className=" flex w-full justify-end items-end">
              <button className="btn btn-sm btn-light">Mark all as read</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationWidget;
