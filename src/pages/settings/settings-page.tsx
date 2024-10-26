import { Route, Routes } from "react-router-dom";
import { SettingsLayout } from "./settings-layout";
import { EditProfile } from "./components/edit-profile";
import { ViewProfile } from "./components/view-profile";
import ErrandConfiguration from "./components/errand-configuration";
import { EditSystemSettings } from "./components/edit-system-settings";

const SettingsPage = () => (
  <Routes>
    <Route element={<SettingsLayout />}>
      <Route path="edit-profile" element={<EditProfile />} />
      <Route path="profile" element={<ViewProfile />} />
      <Route path="system-configuration" element={<EditSystemSettings />} />
      <Route index element={<ViewProfile />} />
    </Route>
  </Routes>
);

export { SettingsPage };
