import { Route, Routes } from "react-router-dom";
import { ReportsLayout } from "./ReportsLayout";
import { ErrandsReports } from "./components/ErrandsReports";
import { UsersActivityReports } from "./components/UsersActivityReports";
import { SubscriptionsReports } from "./components/SubscriptionsReports";

const ReportsPage = () => (
  <Routes>
    <Route element={<ReportsLayout />}>
      <Route path="errands" element={<ErrandsReports />} />
      <Route path="user-activity" element={<UsersActivityReports />} />
      <Route path="subscriptions" element={<SubscriptionsReports />} />
      <Route index element={<ErrandsReports />} />
    </Route>
  </Routes>
);

export { ReportsPage };
