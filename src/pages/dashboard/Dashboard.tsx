/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";

import { useSelector } from "react-redux";
import { DynamicDashboard } from "./AdminDashboard";
import { useGetProfileQuery } from "../../redux/services/auth";
import LoadingSplash from "../../components/common/loading-splash";

const DashboardPage: FC = () => {
  const { data: profileApiResponse, ...profileApiResponseDetails } =
    useGetProfileQuery();

  if (profileApiResponseDetails.isLoading) {
    return <LoadingSplash />;
  }

  return (
    <>
      <DynamicDashboard />
    </>
  );
};

export { DashboardPage };
