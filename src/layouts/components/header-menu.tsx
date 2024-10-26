import React from "react";
import { useGetProfileQuery } from "../../redux/services/auth";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Link, useNavigate } from "react-router-dom";
import { persistor } from "../../redux/store";
import { api } from "../../redux/services/api";
import { removeCredentials } from "../../redux/slice/authSlice";

type Props = {};

const HeaderManuWidget = (props: Props) => {
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
    <div className="menu" data-menu="true">
      <div
        className="menu-item"
        data-menu-item-offset="20px, 10px"
        data-menu-item-placement="bottom-end"
        data-menu-item-toggle="dropdown"
        data-menu-item-trigger="click|lg:click"
      >
        <div className="menu-toggle btn btn-icon rounded-full">
          <img
            alt=""
            className="size-9 rounded-full border-2 border-success shrink-0"
            src="/media/avatars/blank.png"
          />
        </div>
        <div className="menu-dropdown menu-default light:border-gray-300 w-full max-w-[250px]">
          <div className="flex items-center flex-wrap justify-between px-5 py-1.5 gap-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <img
                alt=""
                className="size-9 rounded-full border-2 border-success"
                src="/media/avatars/blank.png"
              />
              <div className="flex flex-col gap-1.5">
                <span className="text-sm text-gray-800 font-semibold leading-none">
                  {profileApiResponse?.fullName}
                </span>
                <a
                  className="text-xs text-gray-600 hover:text-primary font-medium leading-none"
                  href="html/demo1/account/home/get-started.html"
                >
                  {profileApiResponse?.email}
                </a>
              </div>
            </div>
            <span className="badge capitalize badge-xs badge-primary badge-outline">
              {profileApiResponse?.role?.name}
            </span>
          </div>
          <div className="menu-separator"></div>
          <div className="flex flex-col">
            {/* <div className="menu-item">
            <a
              className="menu-link"
              href="html/demo1/public-profile/profiles/default.html"
            >
              <span className="menu-icon">
                <i className="ki-filled ki-badge"></i>
              </span>
              <span className="menu-title">Public Profile</span>
            </a>
          </div> */}
            <div className="menu-item">
              <Link to={"/settings/profile"} className="menu-link">
                <span className="menu-icon">
                  <i className="ki-filled ki-profile-circle"></i>
                </span>
                <span className="menu-title">My Profile</span>
              </Link>
            </div>
            {/* <div
            className="menu-item"
            data-menu-item-offset="-50px, 0"
            data-menu-item-placement="left-start"
            data-menu-item-toggle="dropdown"
            data-menu-item-trigger="click|lg:hover"
          >
            <div className="menu-link">
              <span className="menu-icon">
                <i className="ki-filled ki-setting-2"></i>
              </span>
              <span className="menu-title">My Account</span>
              <span className="menu-arrow">
                <i className="ki-filled ki-right text-3xs"></i>
              </span>
            </div>
            <div className="menu-dropdown menu-default light:border-gray-300 w-full max-w-[220px]">
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="html/demo1/account/home/get-started.html"
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-coffee"></i>
                  </span>
                  <span className="menu-title">Get Started</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="html/demo1/account/home/user-profile.html"
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-some-files"></i>
                  </span>
                  <span className="menu-title">My Profile</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="#">
                  <span className="menu-icon">
                    <i className="ki-filled ki-icon"></i>
                  </span>
                  <span className="menu-title">Billing</span>
                  <span
                    className="menu-badge"
                    data-tooltip="true"
                    data-tooltip-placement="top"
                  >
                    <i className="ki-filled ki-information-2 text-md text-gray-500"></i>
                    <span
                      className="tooltip"
                      data-tooltip-content="true"
                    >
                      Payment and subscription info
                    </span>
                  </span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="html/demo1/account/security/overview.html"
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-medal-star"></i>
                  </span>
                  <span className="menu-title">Security</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="html/demo1/account/members/teams.html"
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-setting"></i>
                  </span>
                  <span className="menu-title">
                    Members &amp; Roles
                  </span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="html/demo1/account/integrations.html"
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-switch"></i>
                  </span>
                  <span className="menu-title">Integrations</span>
                </a>
              </div>
              <div className="menu-separator"></div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="html/demo1/account/security/overview.html"
                >
                  <span className="menu-icon">
                    <i className="ki-filled ki-shield-tick"></i>
                  </span>
                  <span className="menu-title">Notifications</span>
                  <label className="switch switch-sm">
                    <input
                      defaultdefaultChecked={false}
                      name="check"
                      type="checkbox"
                      defaultValue={1}
                    />
                  </label>
                </a>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="https://devs.keenthemes.com">
              <span className="menu-icon">
                <i className="ki-filled ki-message-programming"></i>
              </span>
              <span className="menu-title">Dev Forum</span>
            </a>
          </div>
          <div
            className="menu-item"
            data-menu-item-offset="-10px, 0"
            data-menu-item-placement="left-start"
            data-menu-item-toggle="dropdown"
            data-menu-item-trigger="click|lg:hover"
          >
            <div className="menu-link">
              <span className="menu-icon">
                <i className="ki-filled ki-icon"></i>
              </span>
              <span className="menu-title">Language</span>
              <div className="flex items-center gap-1.5 rounded-md border border-gray-300 text-gray-600 p-1.5 text-2xs font-medium shrink-0">
                English
                <img
                  alt=""
                  className="inline-block size-3.5 rounded-full"
                  src="/media/flags/united-states.svg"
                />
              </div>
            </div>
            <div className="menu-dropdown menu-default light:border-gray-300 w-full max-w-[170px]">
              <div className="menu-item active">
                <a className="menu-link h-10" href="#">
                  <span className="menu-icon">
                    <img
                      alt=""
                      className="inline-block size-4 rounded-full"
                      src="/media/flags/united-states.svg"
                    />
                  </span>
                  <span className="menu-title">English</span>
                  <span className="menu-badge">
                    <i className="ki-solid ki-check-circle text-success text-base"></i>
                  </span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link h-10" href="#">
                  <span className="menu-icon">
                    <img
                      alt=""
                      className="inline-block size-4 rounded-full"
                      src="/media/flags/spain.svg"
                    />
                  </span>
                  <span className="menu-title">Spanish</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link h-10" href="#">
                  <span className="menu-icon">
                    <img
                      alt=""
                      className="inline-block size-4 rounded-full"
                      src="/media/flags/germany.svg"
                    />
                  </span>
                  <span className="menu-title">German</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link h-10" href="#">
                  <span className="menu-icon">
                    <img
                      alt=""
                      className="inline-block size-4 rounded-full"
                      src="/media/flags/japan.svg"
                    />
                  </span>
                  <span className="menu-title">Japanese</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link h-10" href="#">
                  <span className="menu-icon">
                    <img
                      alt=""
                      className="inline-block size-4 rounded-full"
                      src="/media/flags/france.svg"
                    />
                  </span>
                  <span className="menu-title">French</span>
                </a>
              </div>
            </div>
          </div> */}
          </div>
          <div className="menu-separator"></div>
          <div className="flex flex-col">
            <div className="menu-item mb-0.5">
              <div className="menu-link">
                <span className="menu-icon">
                  <i className="ki-filled ki-moon"></i>
                </span>
                <span className="menu-title">Dark Mode</span>
                <label className="switch switch-sm">
                  <input
                    data-theme-state="dark"
                    data-theme-toggle="true"
                    name="check"
                    type="checkbox"
                    defaultValue={1}
                  />
                </label>
              </div>
            </div>
            <div className="menu-item px-4 py-1.5">
              <button
                onClick={() => handleLogout()}
                className="btn btn-sm btn-light justify-center"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderManuWidget;
