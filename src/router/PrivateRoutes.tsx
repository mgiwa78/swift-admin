import { Route, Routes, Navigate } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard/Dashboard";
import AppLayout from "../layouts/AppLayout";
import { TransactionsPage } from "../pages/transactions/transactions-page";
import { ErrandsPage } from "../pages/errands/ErrandsPage";
import { ContentPage } from "../pages/content/ContentPage";
import { ReportsPage } from "../pages/reports/ReportsPage";
import { CustomerPage } from "../pages/customers/customers-page";
import { AdminPage } from "../pages/admins/admins-page";
import { ActivityPage } from "../pages/activity/activity-page";
import { SettingsPage } from "../pages/settings/settings-page";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="admins/*" element={<AdminPage />} />
        <Route path="customers/*" element={<CustomerPage />} />
        <Route path="activities/*" element={<ActivityPage />} />
        <Route path="transactions/*" element={<TransactionsPage />} />
        <Route path="errands/*" element={<ErrandsPage />} />
        <Route path="settings/*" element={<SettingsPage />} />
        <Route path="content/*" element={<ContentPage />} />
        <Route path="reports/*" element={<ReportsPage />} />

        <Route
          path="*"
          element={
            <>
              <Navigate to="/error/404" />
            </>
          }
        />
      </Route>
    </Routes>
  );
};

// const SuspensedView: FC<WithChildren> = ({children}) => {
//   const baseColor = getCSSVariableValue('--bs-primary')
//   TopBarProgress.config({
//     barColors: {
//       '0': baseColor,
//     },
//     barThickness: 1,
//     shadowBlur: 5,
//   })
//   return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
// }

export { PrivateRoutes };
