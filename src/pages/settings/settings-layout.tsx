/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, Link, useLocation } from "react-router-dom";

const SettingsLayout = () => {
  const location = useLocation();
  return (
    <main className="grow content pt-5" id="content" role="content">
      <div className="container-fixed" id="content_container"></div>
      <div className="flex flex-nowrap items-center lg:items-end justify-between border-b border-b-gray-200 dark:border-b-coal-100 gap-6 mb-5 lg:mb-5">
        <div className="container-fixed">
          <div className="grid">
            <div className="scrollable-x-auto">
              <div className="menu gap-3" data-menu="true">
                <div
                  className={`menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary ${
                    location.pathname.includes("/profile") ||
                    location.pathname === "/settings"
                      ? "active"
                      : ""
                  } `}
                >
                  <Link
                    className="menu-link gap-1.5 pb-2 lg:pb-4 px-2"
                    to={"/settings/profile"}
                    tabIndex={0}
                  >
                    <span className="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
                      Profile
                    </span>
                  </Link>
                </div>
                <div
                  className={`menu-item border-b-2 border-b-transparent menu-item-active:border-b-primary menu-item-here:border-b-primary ${
                    location.pathname.includes("/settings/system-configuration")
                      ? "active"
                      : ""
                  } `}
                >
                  <Link
                    className="menu-link gap-1.5 pb-2 lg:pb-4 px-2"
                    to={"/settings/system-configuration"}
                    tabIndex={0}
                  >
                    <span className="menu-title text-nowrap font-medium text-sm text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-item-here:text-primary menu-item-here:font-semibold menu-item-show:text-primary menu-link-hover:text-primary">
                      System Configuration
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </main>
  );
};

export { SettingsLayout };
