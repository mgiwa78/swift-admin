import { Route, Routes } from "react-router-dom";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import { AuthLayout } from "./AuthLayout";
import { SetNewPassword } from "./components/SetNewPassword";
import { ForgotPassword } from "./components/ForgotPassword";
import { PasswordChanged } from "./components/PasswordChanged";
import { EmailSent } from "./components/EmailSent";
import { Logout } from "./components/Logout";

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="registration" element={<Registration />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="set-new-password" element={<SetNewPassword />} />
      <Route path="mail-sent" element={<EmailSent />} />
      <Route path="password-changed" element={<PasswordChanged />} />
      {/* <Route path="new-password/:token" element={<NewPassword />} /> */}
      <Route index element={<Login />} />
    </Route>
  </Routes>
);

export { AuthPage };
