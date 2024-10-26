import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "./admins-layout";
import { AllAdmins } from "./components/all-admins";
import { AddAdmin } from "./components/add-admin";
import AdminProfile from "./components/admins-profile";
import ViewAdmin from "./components/view-admins";
import { AllRoles } from "./components/roles";
import { AllPermissions } from "./components/permissions";
import CreateRole from "./components/create-role";

const AdminPage = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route path="all" element={<AllAdmins />} />
      <Route path="add" element={<AddAdmin />} />
      <Route path="roles" element={<AllRoles />} />
      <Route path="roles/create" element={<CreateRole />} />
      <Route path="roles/:id/permissions" element={<AllPermissions />} />
      <Route path="view-admin/:adminId" element={<ViewAdmin />}>
        <Route index element={<AdminProfile />} />
      </Route>
      <Route index element={<AllAdmins />} />
    </Route>
  </Routes>
);

export { AdminPage };
