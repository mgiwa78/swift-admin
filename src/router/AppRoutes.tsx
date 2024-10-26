import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";

import App from "../App";
import { AuthPage } from "../pages/auth/AuthPage";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { ErrorsPage } from "../pages/errors/ErrorsPage";
import { useGetProfileQuery } from "../redux/services/auth";
import { useSelector } from "react-redux";
import { selectUserToken } from "../redux/selectors/auth";

const { VITE_PUBLIC_URL } = import.meta.env;

const AppRoutes: FC = () => {
  const token = useSelector(selectUserToken);
  return (
    <BrowserRouter basename={VITE_PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="error/*" element={<ErrorsPage />} />
          {token ? (
            <>
              <Route path="/*" element={<PrivateRoutes />} />
              <Route index element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <>
              <Route path="auth/*" element={<AuthPage />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
