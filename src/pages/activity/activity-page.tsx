import { Route, Routes } from "react-router-dom";
import { ActivityLayout } from "./activity-layout";
import Activities from "./profile-activity";

const ActivityPage = () => (
  <Routes>
    <Route element={<ActivityLayout />}>
      <Route index element={<Activities />} />
    </Route>
  </Routes>
);

export { ActivityPage };
