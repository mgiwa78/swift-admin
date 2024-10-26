import { Route, Routes } from "react-router-dom";
import { CustomerLayout } from "./customers-layout";
import { AllCustomers } from "./components/all-customers";
import { AddCustomer } from "./components/add-customer";
import CustomerProfile from "./components/customer-profile";
import ViewCustomer from "./components/view-customer";

const CustomerPage = () => (
  <Routes>
    <Route element={<CustomerLayout />}>
      <Route path="all" element={<AllCustomers />} />
      <Route path="add" element={<AddCustomer />} />
      <Route path="view-customer/:customerId" element={<ViewCustomer />}>
        <Route index element={<CustomerProfile />} />
      </Route>
      <Route index element={<AllCustomers />} />
    </Route>
  </Routes>
);

export { CustomerPage };
