import { Route, Routes } from "react-router-dom";

import Error404 from "./404";
import { ErrorsLayout } from "./ErrorsLayout";

const ErrorsPage = () => (
  <Routes>
    <Route element={<ErrorsLayout />}>
      <Route path="404" element={<Error404 />} />
      <Route index element={<Error404 />} />
    </Route>
  </Routes>
);

export { ErrorsPage };
