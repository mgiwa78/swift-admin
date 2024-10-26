import { Route, Routes } from "react-router-dom";
import { Faqs } from "./components/Faqs";
import { ContentLayout } from "./ContentLayout";
import { FaqCategories } from "./components/faq-categories";
import CreateFaq from "./components/create-faq";
import EditFaqCategory from "./components/edit-faq-category";
import CreateFaqCategory from "./components/create-faq-category";
import EditFaq from "./components/edit-faq";
import PolicyContent from "./policy";

const ContentPage = () => (
  <Routes>
    <Route element={<ContentLayout />}>
      <Route path="faqs">
        <Route index element={<Faqs />} />
        <Route path="categories" element={<FaqCategories />} />
        <Route path="create" element={<CreateFaq />} />
        <Route path="categories/create" element={<CreateFaqCategory />} />
        <Route path=":id/edit" element={<EditFaq />} />
        <Route path="categories/:id/edit" element={<EditFaqCategory />} />
      </Route>
      <Route path="policy">
        <Route index element={<PolicyContent />} />
      </Route>
      {/* <Route path="faqs" element={<Faqs />} />
      <Route path="faqs/categories" element={<FaqCategories />} />
      <Route path="faqs/create" element={<CreateFaq />} />
      <Route path="faqs/categories/create" element={<CreateFaqCategory />} />
      <Route path="faqs/:id/edit" element={<EditFaq />} />
      <Route path="faqs/categories/:id/edit" element={<EditFaqCategory />} />
      <Route index element={<Faqs />} /> */}
    </Route>
  </Routes>
);

export { ContentPage };
