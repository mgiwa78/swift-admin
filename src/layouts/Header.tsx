import { Link, useNavigate } from "react-router-dom";

import React from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { persistor } from "../redux/store";
import { removeCredentials } from "../redux/slice/authSlice";
import { api } from "../redux/services/api";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectUser } from "../redux/selectors/auth";
import { useGetProfileQuery } from "../redux/services/auth";
import NotificationWidget from "./components/notification-widget";
import HeaderManuWidget from "./components/header-menu";

type Props = {};

const Header = (props: Props) => {
  const { data: profileApiResponse } = useGetProfileQuery();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    persistor.purge();
    dispatch(api.util.resetApiState());
    dispatch(removeCredentials());
    navigate("/auth/login");
  };

  return (
    <header
      className="header fixed top-0 z-10 left-0 right-0 flex items-stretch shrink-0 bg-[#fefefe] dark:bg-coal-500"
      data-sticky="true"
      data-sticky-class="shadow-sm dark:border-b dark:border-b-coal-100"
      data-sticky-name="header"
      id="header"
    >
      {/* begin: container */}
      <div
        className="container-fixed flex justify-between items-stretch lg:gap-4"
        id="header_container"
      >
        <div className="flex gap-1 lg:hidden items-center -ml-1">
          <a className="shrink-0" href="html/demo1.html">
            <img
              className="max-h-[25px] w-full"
              src="/media/app/mini-logo.svg"
            />
          </a>
          <div className="flex items-center">
            <button
              className="btn btn-icon btn-light btn-clear btn-sm"
              data-drawer-toggle="#sidebar"
            >
              <i className="ki-filled ki-menu"></i>
            </button>
            <button
              className="btn btn-icon btn-light btn-clear btn-sm"
              data-drawer-toggle="#megamenu_wrapper"
            >
              <i className="ki-filled ki-burger-menu-2"></i>
            </button>
          </div>
        </div>
        <div className="flex items-stretch" id="megamenu_container">
          <div
            className="flex items-stretch"
            data-reparent="true"
            data-reparent-mode="prepend|lg:prepend"
            data-reparent-target="body|lg:#megamenu_container"
          >
            <div
              className="hidden lg:flex lg:items-stretch"
              data-drawer="true"
              data-drawer-class="drawer drawer-start fixed z-10 top-0 bottom-0 w-full mr-5 max-w-[250px] p-5 lg:p-0 overflow-auto"
              data-drawer-enable="true|lg:false"
              id="megamenu_wrapper"
            >
              <div
                className="menu flex-col lg:flex-row gap-5 lg:gap-7.5"
                data-menu="true"
                id="megamenu"
              >
                <div className="menu-item active">
                  <Link
                    className="menu-link text-nowrap text-sm text-gray-700 font-medium menu-item-hover:text-primary menu-item-active:text-gray-900 menu-item-active:font-semibold"
                    to="/dashboard"
                  >
                    <span className="menu-title text-nowrap">Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-3.5">
          <NotificationWidget />
          <HeaderManuWidget />
        </div>
      </div>
    </header>
  );
};

export default Header;
