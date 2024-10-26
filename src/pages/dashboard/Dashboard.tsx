/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";

import { useSelector } from "react-redux";
import { DynamicDashboard } from "./AdminDashboard";

const DashboardPage: FC = () => {
  return (
    <>
      <DynamicDashboard />
    </>
  );
};

export { DashboardPage };
