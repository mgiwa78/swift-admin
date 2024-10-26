import { Route, Routes } from "react-router-dom";
import { AllErrands } from "./components/AllErands";
import { ErrandsLayout } from "./ErrandsLayout";
import { AllErrandCategories } from "./components/AllErrandCategories";
import CreateErrand from "./components/create-errand";
import CreateCategory from "./components/create-errand-category";
import EditErrandCategory from "./components/edit-errand-category";
import EditErrand from "./components/edit-errand";
import ViewErrand from "./components/view-errand";
import ErrandOverview from "./components/errand-overview";
import { ErrandConversation } from "./components/errand-conversation";
import { AllRequestsForErrand } from "./components/errand-requests";

const ErrandsPage = () => (
  <Routes>
    <Route element={<ErrandsLayout />}>
      <Route path="all" element={<AllErrands />} />
      <Route path=":errandId/edit" element={<EditErrand />} />
      <Route path="create" element={<CreateErrand />} />

      <Route path=":errandId/view" element={<ViewErrand />}>
        <Route index element={<ErrandOverview />} />
        <Route path="conversation" element={<ErrandConversation />} />

        <Route
          path="requests"
          element={
            <>
              <AllRequestsForErrand />
            </>
          }
        />
      </Route>
      <Route path="categories" element={<AllErrandCategories />} />
      <Route path="categories/create" element={<CreateCategory />} />
      <Route path="categories/:id/edit" element={<EditErrandCategory />} />
      <Route index element={<AllErrands />} />
    </Route>
  </Routes>
);

export { ErrandsPage };
