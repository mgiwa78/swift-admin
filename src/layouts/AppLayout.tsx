import React from "react";
import Footer from "../components/Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSocketContext } from "../hooks/useSocket";

type Props = {};

const AppLayout = (props: Props) => {
  const socket = useSocketContext();

  return (
    <>
      <div className="flex grow">
        <Sidebar />
        <div className="wrapper flex grow flex-col">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
      <div className="modal" data-modal="true" id="search_modal">
        <div className="modal-content max-w-[600px] top-[15%]">
          <div className="modal-header py-4 px-5">
            <i className="ki-filled ki-magnifier text-gray-700 text-xl"></i>
            <input
              className="input px-0 border-none bg-transparent shadow-none ml-2.5"
              name="query"
              placeholder="Tap to start search"
              type="text"
            />
            <button
              className="btn btn-sm btn-icon btn-light btn-clear shrink-0"
              data-modal-dismiss="true"
            >
              <i className="ki-filled ki-cross"></i>
            </button>
          </div>
          <div className="modal-body p-0 pb-5">
            <div className="tabs justify-between px-5 mb-2.5" data-tabs="true">
              <div className="flex items-center gap-5">
                <button
                  className="tab py-5 active"
                  data-tab-toggle="#search_modal_mixed"
                >
                  Mixed
                </button>
                <button
                  className="tab py-5"
                  data-tab-toggle="#search_modal_settings"
                >
                  Settings
                </button>
                <button
                  className="tab py-5"
                  data-tab-toggle="#search_modal_integrations"
                >
                  Integrations
                </button>
                <button
                  className="tab py-5"
                  data-tab-toggle="#search_modal_users"
                >
                  Users
                </button>
                <button
                  className="tab py-5"
                  data-tab-toggle="#search_modal_docs"
                >
                  Docs
                </button>
                <button
                  className="tab py-5"
                  data-tab-toggle="#search_modal_empty"
                >
                  Empty
                </button>
                <button
                  className="tab py-5"
                  data-tab-toggle="#search_modal_no-results"
                >
                  No Results
                </button>
              </div>
              <div className="menu -mt-px" data-menu="true">
                <div
                  className="menu-item menu-item-dropdown"
                  data-menu-item-offset="0, 10px"
                  data-menu-item-placement="bottom-end"
                  data-menu-item-toggle="dropdown"
                  data-menu-item-trigger="click|lg:hover"
                >
                  <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                    <i className="ki-filled ki-setting-2"></i>
                  </button>
                  <div
                    className="menu-dropdown menu-default w-full max-w-[175px]"
                    data-menu-dismiss="true"
                  >
                    <div className="menu-item">
                      <a className="menu-link" href="#">
                        <span className="menu-icon">
                          <i className="ki-filled ki-document"></i>
                        </span>
                        <span className="menu-title">View</span>
                      </a>
                    </div>
                    <div
                      className="menu-item menu-item-dropdown"
                      data-menu-item-offset="-15px, 0"
                      data-menu-item-placement="right-start"
                      data-menu-item-toggle="dropdown"
                      data-menu-item-trigger="click|lg:hover"
                    >
                      <div className="menu-link">
                        <span className="menu-icon">
                          <i className="ki-filled ki-notification-status"></i>
                        </span>
                        <span className="menu-title">Export</span>
                        <span className="menu-arrow">
                          <i className="ki-filled ki-right text-3xs"></i>
                        </span>
                      </div>
                      <div className="menu-dropdown menu-default w-full max-w-[175px]">
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/home/settings-sidebar.html"
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-sms"></i>
                            </span>
                            <span className="menu-title">Email</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/home/settings-sidebar.html"
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-message-notify"></i>
                            </span>
                            <span className="menu-title">SMS</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link"
                            href="html/demo1/account/home/settings-sidebar.html"
                          >
                            <span className="menu-icon">
                              <i className="ki-filled ki-notification-status"></i>
                            </span>
                            <span className="menu-title">Push</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link" href="#">
                        <span className="menu-icon">
                          <i className="ki-filled ki-pencil"></i>
                        </span>
                        <span className="menu-title">Edit</span>
                      </a>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link" href="#">
                        <span className="menu-icon">
                          <i className="ki-filled ki-trash"></i>
                        </span>
                        <span className="menu-title">Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="scrollable-y-auto"
              data-scrollable="true"
              data-scrollable-max-height="auto"
              data-scrollable-offset="300px"
              style={{ maxHeight: "402px" }}
            >
              <div className="" id="search_modal_mixed">
                <div className="flex flex-col gap-2.5">
                  <div>
                    <div className="text-xs text-gray-600 font-medium pt-2.5 pb-1.5 pl-5">
                      Settings
                    </div>
                    <div className="menu menu-default p-0 flex-col">
                      <div className="menu-item">
                        <a className="menu-link" href="#">
                          <span className="menu-icon">
                            <i className="ki-filled ki-badge"></i>
                          </span>
                          <span className="menu-title">Public Profile</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="#">
                          <span className="menu-icon">
                            <i className="ki-filled ki-setting-2"></i>
                          </span>
                          <span className="menu-title">My Account</span>
                        </a>
                      </div>
                      <div className="menu-item">
                        <a className="menu-link" href="#">
                          <span className="menu-icon">
                            <i className="ki-filled ki-message-programming"></i>
                          </span>
                          <span className="menu-title">Devs Forum</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div>
                    <div className="text-xs text-gray-600 font-medium pt-2.5 pb-1.5 pl-5">
                      Integrations
                    </div>
                    <div className="menu menu-default p-0 flex-col">
                      <div className="menu-item">
                        <div className="menu-link flex items-center jistify-between gap-2">
                          <div className="flex items-center grow gap-2">
                            <div className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                              <img
                                alt=""
                                className="size-6 shrink-0"
                                src="/media/brand-logos/jira.svg"
                              />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <a
                                className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                                href="#"
                              >
                                Jira
                              </a>
                              <span className="text-2xs font-medium text-gray-600">
                                Project management
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-end shrink-0">
                            <div className="flex -space-x-2">
                              <div className="flex">
                                <img
                                  className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                  src="/media/avatars/300-4.png"
                                />
                              </div>
                              <div className="flex">
                                <img
                                  className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                  src="/media/avatars/300-1.png"
                                />
                              </div>
                              <div className="flex">
                                <img
                                  className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                  src="/media/avatars/300-2.png"
                                />
                              </div>
                              <div className="flex">
                                <span className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-6 text-success-inverse size-6 ring-success-light bg-success">
                                  +3
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="menu-item">
                        <div className="menu-link flex items-center jistify-between gap-2">
                          <div className="flex items-center grow gap-2">
                            <div className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                              <img
                                alt=""
                                className="size-6 shrink-0"
                                src="/media/brand-logos/inferno.svg"
                              />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <a
                                className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                                href="#"
                              >
                                Inferno
                              </a>
                              <span className="text-2xs font-medium text-gray-600">
                                Real-time photo sharing app
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-end shrink-0">
                            <div className="flex -space-x-2">
                              <div className="flex">
                                <img
                                  className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                  src="/media/avatars/300-14.png"
                                />
                              </div>
                              <div className="flex">
                                <img
                                  className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                  src="/media/avatars/300-12.png"
                                />
                              </div>
                              <div className="flex">
                                <img
                                  className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                                  src="/media/avatars/300-9.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-b-gray-200"></div>
                  <div>
                    <div className="text-xs text-gray-600 font-medium pt-2.5 pb-1.5 pl-5">
                      Users
                    </div>
                    <div className="menu menu-default p-0 flex-col">
                      <div className="grid gap-1">
                        <div className="menu-item">
                          <div className="menu-link flex justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <img
                                alt=""
                                className="rounded-full size-9 shrink-0"
                                src="/media/avatars/300-3.png"
                              />
                              <div className="flex flex-col">
                                <a
                                  className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                  href="#"
                                >
                                  Tyler Hero
                                </a>
                                <span className="text-2sm font-normal text-gray-500">
                                  tyler.hero@gmail.com connections
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <div className="badge badge-pill badge-outline badge-success gap-1.5">
                                <span className="badge badge-dot badge-success size-1.5"></span>
                                In Office
                              </div>
                              <button className="btn btn-icon btn-light btn-clear btn-sm">
                                <i className="ki-filled ki-dots-vertical"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item">
                          <div className="menu-link flex justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <img
                                alt=""
                                className="rounded-full size-9 shrink-0"
                                src="/media/avatars/300-1.png"
                              />
                              <div className="flex flex-col">
                                <a
                                  className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                                  href="#"
                                >
                                  Esther Howard
                                </a>
                                <span className="text-2sm font-normal text-gray-500">
                                  esther.howard@gmail.com connections
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <div className="badge badge-pill badge-outline badge-danger gap-1.5">
                                <span className="badge badge-dot badge-danger size-1.5"></span>
                                On Leave
                              </div>
                              <button className="btn btn-icon btn-light btn-clear btn-sm">
                                <i className="ki-filled ki-dots-vertical"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden" id="search_modal_settings">
                <div className="menu menu-default p-0 flex-col">
                  <div className="text-xs text-gray-600 font-medium pt-2.5 pl-5 pb-1.5">
                    Shortcuts
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="#">
                      <span className="menu-icon">
                        <i className="ki-filled ki-home-2"></i>
                      </span>
                      <span className="menu-title">Go to Dashboard</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="#">
                      <span className="menu-icon">
                        <i className="ki-filled ki-badge"></i>
                      </span>
                      <span className="menu-title">Public Profile</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="#">
                      <span className="menu-icon">
                        <i className="ki-filled ki-profile-circle"></i>
                      </span>
                      <span className="menu-title">My Profile</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="#">
                      <span className="menu-icon">
                        <i className="ki-filled ki-setting-2"></i>
                      </span>
                      <span className="menu-title">My Account</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="#">
                      <span className="menu-icon">
                        <i className="ki-filled ki-message-programming"></i>
                      </span>
                      <span className="menu-title">Devs Forum</span>
                    </a>
                  </div>
                  <div className="text-xs text-gray-600 font-medium pt-2.5 pl-5 pt-2.5 pb-1.5">
                    Actions
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="#">
                      <span className="menu-icon">
                        <i className="ki-filled ki-user"></i>
                      </span>
                      <span className="menu-title">Create User</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="#">
                      <span className="menu-icon">
                        <i className="ki-filled ki-user-edit"></i>
                      </span>
                      <span className="menu-title">Create Team</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="#">
                      <span className="menu-icon">
                        <i className="ki-filled ki-subtitle"></i>
                      </span>
                      <span className="menu-title">Change Plan</span>
                    </a>
                  </div>
                  <div className="menu-item">
                    <a className="menu-link" href="#">
                      <span className="menu-icon">
                        <i className="ki-filled ki-setting"></i>
                      </span>
                      <span className="menu-title">Setup Branding</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden" id="search_modal_integrations">
                <div className="menu menu-default p-0 flex-col">
                  <div className="menu-item">
                    <div className="menu-link flex items-center jistify-between gap-2">
                      <div className="flex items-center grow gap-2">
                        <div className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                          <img
                            alt=""
                            className="size-6 shrink-0"
                            src="/media/brand-logos/jira.svg"
                          />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <a
                            className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                            href="#"
                          >
                            Jira
                          </a>
                          <span className="text-2xs font-medium text-gray-600">
                            Project management
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end shrink-0">
                        <div className="flex -space-x-2">
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-4.png"
                            />
                          </div>
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-1.png"
                            />
                          </div>
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-2.png"
                            />
                          </div>
                          <div className="flex">
                            <span className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-6 text-success-inverse size-6 ring-success-light bg-success">
                              +3
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-link flex items-center jistify-between gap-2">
                      <div className="flex items-center grow gap-2">
                        <div className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                          <img
                            alt=""
                            className="size-6 shrink-0"
                            src="/media/brand-logos/inferno.svg"
                          />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <a
                            className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                            href="#"
                          >
                            Inferno
                          </a>
                          <span className="text-2xs font-medium text-gray-600">
                            Real-time photo sharing app
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end shrink-0">
                        <div className="flex -space-x-2">
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-14.png"
                            />
                          </div>
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-12.png"
                            />
                          </div>
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-9.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-link flex items-center jistify-between gap-2">
                      <div className="flex items-center grow gap-2">
                        <div className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                          <img
                            alt=""
                            className="size-6 shrink-0"
                            src="/media/brand-logos/evernote.svg"
                          />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <a
                            className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                            href="#"
                          >
                            Evernote
                          </a>
                          <span className="text-2xs font-medium text-gray-600">
                            Notes management app
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end shrink-0">
                        <div className="flex -space-x-2">
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-6.png"
                            />
                          </div>
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-3.png"
                            />
                          </div>
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-1.png"
                            />
                          </div>
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-8.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-link flex items-center jistify-between gap-2">
                      <div className="flex items-center grow gap-2">
                        <div className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                          <img
                            alt=""
                            className="size-6 shrink-0"
                            src="/media/brand-logos/gitlab.svg"
                          />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <a
                            className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                            href="#"
                          >
                            Gitlab
                          </a>
                          <span className="text-2xs font-medium text-gray-600">
                            Notes management app
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end shrink-0">
                        <div className="flex -space-x-2">
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-18.png"
                            />
                          </div>
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-17.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-link flex items-center jistify-between gap-2">
                      <div className="flex items-center grow gap-2">
                        <div className="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                          <img
                            alt=""
                            className="size-6 shrink-0"
                            src="/media/brand-logos/google-webdev.svg"
                          />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <a
                            className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                            href="#"
                          >
                            Google webdev
                          </a>
                          <span className="text-2xs font-medium text-gray-600">
                            Building web expierences
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-end shrink-0">
                        <div className="flex -space-x-2">
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-14.png"
                            />
                          </div>
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-20.png"
                            />
                          </div>
                          <div className="flex">
                            <img
                              className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6"
                              src="/media/avatars/300-21.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item px-4 pt-2">
                    <a className="btn btn-sm btn-light justify-center" href="#">
                      Go to Apps
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden" id="search_modal_users">
                <div className="menu menu-default p-0 flex-col">
                  <div className="grid gap-1">
                    <div className="menu-item">
                      <div className="menu-link flex justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <img
                            alt=""
                            className="rounded-full size-9 shrink-0"
                            src="/media/avatars/300-3.png"
                          />
                          <div className="flex flex-col">
                            <a
                              className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                              href="#"
                            >
                              Tyler Hero
                            </a>
                            <span className="text-2sm font-normal text-gray-500">
                              tyler.hero@gmail.com connections
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="badge badge-pill badge-outline badge-success gap-1.5">
                            <span className="badge badge-dot badge-success size-1.5"></span>
                            In Office
                          </div>
                          <button className="btn btn-icon btn-light btn-clear btn-sm">
                            <i className="ki-filled ki-dots-vertical"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-link flex justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <img
                            alt=""
                            className="rounded-full size-9 shrink-0"
                            src="/media/avatars/300-1.png"
                          />
                          <div className="flex flex-col">
                            <a
                              className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                              href="#"
                            >
                              Esther Howard
                            </a>
                            <span className="text-2sm font-normal text-gray-500">
                              esther.howard@gmail.com connections
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="badge badge-pill badge-outline badge-danger gap-1.5">
                            <span className="badge badge-dot badge-danger size-1.5"></span>
                            On Leave
                          </div>
                          <button className="btn btn-icon btn-light btn-clear btn-sm">
                            <i className="ki-filled ki-dots-vertical"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-link flex justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <img
                            alt=""
                            className="rounded-full size-9 shrink-0"
                            src="/media/avatars/300-11.png"
                          />
                          <div className="flex flex-col">
                            <a
                              className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                              href="#"
                            >
                              Jacob Jones
                            </a>
                            <span className="text-2sm font-normal text-gray-500">
                              jacob.jones@gmail.com connections
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="badge badge-pill badge-outline badge-primary gap-1.5">
                            <span className="badge badge-dot badge-primary size-1.5"></span>
                            Remote
                          </div>
                          <button className="btn btn-icon btn-light btn-clear btn-sm">
                            <i className="ki-filled ki-dots-vertical"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-link flex justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <img
                            alt=""
                            className="rounded-full size-9 shrink-0"
                            src="/media/avatars/300-5.png"
                          />
                          <div className="flex flex-col">
                            <a
                              className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                              href="#"
                            >
                              TLeslie Alexander
                            </a>
                            <span className="text-2sm font-normal text-gray-500">
                              leslie.alexander@gmail.com connections
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="badge badge-pill badge-outline badge-success gap-1.5">
                            <span className="badge badge-dot badge-success size-1.5"></span>
                            In Office
                          </div>
                          <button className="btn btn-icon btn-light btn-clear btn-sm">
                            <i className="ki-filled ki-dots-vertical"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-link flex justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <img
                            alt=""
                            className="rounded-full size-9 shrink-0"
                            src="/media/avatars/300-2.png"
                          />
                          <div className="flex flex-col">
                            <a
                              className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                              href="#"
                            >
                              Cody Fisher
                            </a>
                            <span className="text-2sm font-normal text-gray-500">
                              cody.fisher@gmail.com connections
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <div className="badge badge-pill badge-outline badge-primary gap-1.5">
                            <span className="badge badge-dot badge-primary size-1.5"></span>
                            Remote
                          </div>
                          <button className="btn btn-icon btn-light btn-clear btn-sm">
                            <i className="ki-filled ki-dots-vertical"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item px-4 pt-2">
                      <a
                        className="btn btn-sm btn-light justify-center"
                        href="#"
                      >
                        Go to Users
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden" id="search_modal_docs">
                <div className="menu menu-default p-0 flex-col">
                  <div className="grid">
                    <div className="menu-item">
                      <div className="menu-link flex items-center">
                        <div className="flex items-center grow gap-2.5">
                          <img src="/media/file-types/pdf.svg" />
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                              Project-pitch.pdf
                            </span>
                            <span className="text-xs font-medium text-gray-500">
                              4.7 MB 26 Sep 2024 3:20 PM
                            </span>
                          </div>
                        </div>
                        <button className="btn btn-icon btn-light btn-clear btn-sm">
                          <i className="ki-filled ki-dots-vertical"></i>
                        </button>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-link flex items-center">
                        <div className="flex items-center grow gap-2.5">
                          <img src="/media/file-types/doc.svg" />
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                              Report-v1.docx
                            </span>
                            <span className="text-xs font-medium text-gray-500">
                              2.3 MB 1 Oct 2024 12:00 PM
                            </span>
                          </div>
                        </div>
                        <button className="btn btn-icon btn-light btn-clear btn-sm">
                          <i className="ki-filled ki-dots-vertical"></i>
                        </button>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-link flex items-center">
                        <div className="flex items-center grow gap-2.5">
                          <img src="/media/file-types/javascript.svg" />
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                              Framework-App.js
                            </span>
                            <span className="text-xs font-medium text-gray-500">
                              0.8 MB 17 Oct 2024 6:46 PM
                            </span>
                          </div>
                        </div>
                        <button className="btn btn-icon btn-light btn-clear btn-sm">
                          <i className="ki-filled ki-dots-vertical"></i>
                        </button>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-link flex items-center">
                        <div className="flex items-center grow gap-2.5">
                          <img src="/media/file-types/ai.svg" />
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                              Framework-App.js
                            </span>
                            <span className="text-xs font-medium text-gray-500">
                              0.8 MB 17 Oct 2024 6:46 PM
                            </span>
                          </div>
                        </div>
                        <button className="btn btn-icon btn-light btn-clear btn-sm">
                          <i className="ki-filled ki-dots-vertical"></i>
                        </button>
                      </div>
                    </div>
                    <div className="menu-item">
                      <div className="menu-link flex items-center">
                        <div className="flex items-center grow gap-2.5">
                          <img src="/media/file-types/php.svg" />
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                              appController.js
                            </span>
                            <span className="text-xs font-medium text-gray-500">
                              0.1 MB 21 Nov 2024 3:20 PM
                            </span>
                          </div>
                        </div>
                        <button className="btn btn-icon btn-light btn-clear btn-sm">
                          <i className="ki-filled ki-dots-vertical"></i>
                        </button>
                      </div>
                    </div>
                    <div className="menu-item px-4 pt-2.5">
                      <a
                        className="btn btn-sm btn-light justify-center"
                        href="#"
                      >
                        Go to Users
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden" id="search_modal_empty">
                <div className="flex flex-col text-center py-9 gap-5">
                  <div className="flex justify-center">
                    <img
                      alt="image"
                      className="dark:hidden max-h-[113px]"
                      src="/media/illustrations/33.svg"
                    />
                    <img
                      alt="image"
                      className="light:hidden max-h-[113px]"
                      src="/media/illustrations/33-dark.svg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-semibold text-gray-900 text-center">
                      Looking for something..
                    </h3>
                    <span className="text-2sm font-medium text-center text-gray-600">
                      Initiate your digital experience with
                      <br />
                      our intuitive dashboard
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <a
                      className="btn btn-sm btn-light flex justify-center"
                      href="#"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden" id="search_modal_no-results">
                <div className="flex flex-col text-center py-9 gap-5">
                  <div className="flex justify-center">
                    <img
                      alt="image"
                      className="dark:hidden max-h-[113px]"
                      src="/media/illustrations/33.svg"
                    />
                    <img
                      alt="image"
                      className="light:hidden max-h-[113px]"
                      src="/media/illustrations/33-dark.svg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-semibold text-gray-900 text-center">
                      No Results Found
                    </h3>
                    <span className="text-2sm font-medium text-center text-gray-600">
                      Refine your query to discover relevant items
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <a
                      className="btn btn-sm btn-light flex justify-center"
                      href="#"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal"
        data-modal="true"
        data-modal-disable-scroll="false"
        id="share_profile_modal"
      >
        <div className="modal-content max-w-[500px] top-5 lg:top-[15%]">
          <div className="modal-header pr-2.5">
            <h3 className="modal-title">Share Profile</h3>
            <button
              className="btn btn-sm btn-icon btn-light btn-clear shrink-0"
              data-modal-dismiss="true"
            >
              <i className="ki-filled ki-cross"></i>
            </button>
          </div>
          <div className="modal-body grid gap-5 px-0 py-5">
            <div className="flex flex-col px-5 gap-2.5">
              <div className="flex flex-center gap-1">
                <label className="text-gray-900 font-semibold text-2sm">
                  Share read-only link
                </label>
                <i className="ki-filled ki-information-2 text-gray-500 text-2sm"></i>
              </div>
              <label className="input">
                <input type="text" />
                <button className="btn btn-icon">
                  <i className="ki-filled ki-copy"></i>
                </button>
              </label>
            </div>
            <div className="border-b border-b-gray-200"></div>
            <div className="flex flex-col px-5 gap-2.5">
              <div className="flex flex-center gap-1">
                <label className="text-gray-900 font-semibold text-2sm">
                  Share via email
                </label>
                <i className="ki-filled ki-information-2 text-gray-500 text-2sm"></i>
              </div>
              <div className="flex flex-center gap-2.5">
                <label className="input">
                  <input type="text" />
                </label>
                <button className="btn btn-primary">Share</button>
              </div>
            </div>
            <div
              className="scrollable-y-auto"
              data-scrollable="true"
              data-scrollable-max-height="auto"
              data-scrollable-offset="1000px"
            >
              <div className="flex flex-col px-5 gap-3">
                <div className="flex items-center flex-wrap gap-2">
                  <div className="flex items-center grow gap-2.5">
                    <img
                      alt=""
                      className="rounded-full size-9 shrink-0"
                      src="/media/avatars/300-3.png"
                    />
                    <div className="flex flex-col">
                      <a
                        className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                        href="#"
                      >
                        Tyler Hero
                      </a>
                      <a
                        className="hover:text-primary-active text-2sm font-medium text-gray-600"
                        href="#"
                      >
                        tyler.hero@gmail.com
                      </a>
                    </div>
                  </div>
                  <select className="select select-sm max-w-24">
                    <option>Owner</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </select>
                </div>
                <div className="flex items-center flex-wrap gap-2">
                  <div className="flex items-center grow gap-2.5">
                    <img
                      alt=""
                      className="rounded-full size-9 shrink-0"
                      src="/media/avatars/300-1.png"
                    />
                    <div className="flex flex-col">
                      <a
                        className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                        href="#"
                      >
                        Esther Howard
                      </a>
                      <a
                        className="hover:text-primary-active text-2sm font-medium text-gray-600"
                        href="#"
                      >
                        esther.howard@gmail.com
                      </a>
                    </div>
                  </div>
                  <select className="select select-sm max-w-24">
                    <option>Owner</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </select>
                </div>
                <div className="flex items-center flex-wrap gap-2">
                  <div className="flex items-center grow gap-2.5">
                    <img
                      alt=""
                      className="rounded-full size-9 shrink-0"
                      src="/media/avatars/300-11.png"
                    />
                    <div className="flex flex-col">
                      <a
                        className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                        href="#"
                      >
                        Jacob Jones
                      </a>
                      <a
                        className="hover:text-primary-active text-2sm font-medium text-gray-600"
                        href="#"
                      >
                        jacob.jones@gmail.com
                      </a>
                    </div>
                  </div>
                  <select className="select select-sm max-w-24">
                    <option>Owner</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="border-b border-b-gray-200"></div>
            <div className="flex flex-col px-5 gap-4">
              <label className="text-gray-900 font-semibold text-2sm">
                Settings
              </label>
              <div className="flex flex-center justify-between flex-wrap gap-2">
                <div className="flex flex-center gap-1.5">
                  <i className="ki-filled ki-user text-gray-500"></i>
                  <div className="flex flex-center text-gray-700 font-medium text-xs">
                    Anyone at
                    <a className="text-xs font-medium link mx-1" href="#">
                      KeenThemes
                    </a>
                    can view
                  </div>
                </div>
                <button className="btn btn-sm btn-link">Change Access</button>
              </div>
              <div className="flex flex-center justify-between flex-wrap gap-2 mb-1">
                <div className="flex flex-center gap-1.5">
                  <i className="ki-filled ki-icon text-gray-500"></i>
                  <div className="flex flex-center text-gray-700 font-medium text-xs">
                    Anyone with link can edit
                  </div>
                </div>
                <button className="btn btn-sm btn-link">Set Password</button>
              </div>
              <button className="btn btn-primary justify-center">Done</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" data-modal="true" id="give_award_modal">
        <div className="modal-content max-w-[500px] top-[15%]">
          <div className="modal-header pr-2.5">
            <h3 className="modal-title">Give Award</h3>
            <button
              className="btn btn-sm btn-icon btn-light btn-clear shrink-0"
              data-modal-dismiss="true"
            >
              <i className="ki-filled ki-black-left"></i>
            </button>
          </div>
          <div className="modal-body grid gap-5 px-0 py-5">
            <div className="flex flex-col px-5 gap-2.5">
              <div className="flex flex-center gap-1">
                <label className="text-gray-900 font-semibold text-2sm">
                  Share read-only link
                </label>
                <i className="ki-filled ki-information-2 text-gray-500 text-2sm"></i>
              </div>
              <label className="input">
                <input type="text" />
                <button className="btn btn-icon">
                  <i className="ki-filled ki-copy"></i>
                </button>
              </label>
            </div>
            <div className="border-b border-b-gray-200"></div>
            <div className="flex flex-col px-5 gap-2.5">
              <div className="flex flex-center gap-1">
                <label className="text-gray-900 font-semibold text-2sm">
                  Share via email
                </label>
                <i className="ki-filled ki-information-2 text-gray-500 text-2sm"></i>
              </div>
              <div className="flex flex-center gap-2.5">
                <label className="input">
                  <input type="text" />
                </label>
                <button className="btn btn-primary">Share</button>
              </div>
            </div>
            <div
              className="scrollable-y-auto"
              data-scrollable="true"
              data-scrollable-max-height="auto"
              data-scrollable-offset="1000px"
            >
              <div className="flex flex-col px-5 gap-3">
                <div className="flex items-center flex-wrap gap-2">
                  <div className="flex items-center grow gap-2.5">
                    <img
                      alt=""
                      className="rounded-full size-9 shrink-0"
                      src="/media/avatars/300-3.png"
                    />
                    <div className="flex flex-col">
                      <a
                        className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                        href="#"
                      >
                        Tyler Hero
                      </a>
                      <a
                        className="hover:text-primary-active text-2sm font-medium text-gray-600"
                        href="#"
                      >
                        tyler.hero@gmail.com
                      </a>
                    </div>
                  </div>
                  <select className="select select-sm max-w-24">
                    <option>Owner</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </select>
                </div>
                <div className="flex items-center flex-wrap gap-2">
                  <div className="flex items-center grow gap-2.5">
                    <img
                      alt=""
                      className="rounded-full size-9 shrink-0"
                      src="/media/avatars/300-1.png"
                    />
                    <div className="flex flex-col">
                      <a
                        className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                        href="#"
                      >
                        Esther Howard
                      </a>
                      <a
                        className="hover:text-primary-active text-2sm font-medium text-gray-600"
                        href="#"
                      >
                        esther.howard@gmail.com
                      </a>
                    </div>
                  </div>
                  <select className="select select-sm max-w-24">
                    <option>Owner</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </select>
                </div>
                <div className="flex items-center flex-wrap gap-2">
                  <div className="flex items-center grow gap-2.5">
                    <img
                      alt=""
                      className="rounded-full size-9 shrink-0"
                      src="/media/avatars/300-11.png"
                    />
                    <div className="flex flex-col">
                      <a
                        className="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px"
                        href="#"
                      >
                        Jacob Jones
                      </a>
                      <a
                        className="hover:text-primary-active text-2sm font-medium text-gray-600"
                        href="#"
                      >
                        jacob.jones@gmail.com
                      </a>
                    </div>
                  </div>
                  <select className="select select-sm max-w-24">
                    <option>Owner</option>
                    <option>Editor</option>
                    <option>Viewer</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="border-b border-b-gray-200"></div>
            <div className="flex flex-col px-5 gap-4">
              <label className="text-gray-900 font-semibold text-2sm">
                Settings
              </label>
              <div className="flex flex-center justify-between flex-wrap gap-2">
                <div className="flex flex-center gap-1.5">
                  <i className="ki-filled ki-user text-gray-500"></i>
                  <div className="flex flex-center text-gray-700 font-medium text-xs">
                    Anyone at
                    <a className="text-xs font-medium link mx-1" href="#">
                      KeenThemes
                    </a>
                    can view
                  </div>
                </div>
                <button className="btn btn-sm btn-link">Change Access</button>
              </div>
              <div className="flex flex-center justify-between flex-wrap gap-2 mb-1">
                <div className="flex flex-center gap-1.5">
                  <i className="ki-filled ki-icon text-gray-500"></i>
                  <div className="flex flex-center text-gray-700 font-medium text-xs">
                    Anyone with link can edit
                  </div>
                </div>
                <button className="btn btn-sm btn-link">Set Password</button>
              </div>
              <button className="btn btn-primary justify-center">Done</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" data-modal="true" id="report_user_modal">
        <div className="modal-content max-w-[500px] top-[15%]">
          <div className="modal-header pr-2.5">
            <h3 className="modal-title">Report User</h3>
            <button
              className="btn btn-sm btn-icon btn-light btn-clear shrink-0"
              data-modal-dismiss="true"
            >
              <i className="ki-filled ki-cross"></i>
            </button>
          </div>
          <div className="modal-body p-0">
            <div className="p-5">
              <div className="grid place-items-center gap-1">
                <div className="flex justify-center items-center rounded-full">
                  <img
                    className="rounded-full max-h-[55px] max-w-full"
                    src="/media/avatars/300-1.png"
                  />
                </div>
                <div className="flex items-center justify-center gap-1">
                  <a
                    className="hover:text-primary-active text-2sm leading-5 font-semibold text-gray-900"
                    href="#"
                  >
                    Jenny Klabber
                  </a>
                  <svg
                    className="text-primary"
                    fill="none"
                    height="13"
                    viewBox="0 0 15 16"
                    width="13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5425 6.89749L13.5 5.83999C13.4273 5.76877 13.3699 5.6835 13.3312 5.58937C13.2925 5.49525 13.2734 5.39424 13.275 5.29249V3.79249C13.274 3.58699 13.2324 3.38371 13.1527 3.19432C13.0729 3.00494 12.9565 2.83318 12.8101 2.68892C12.6638 2.54466 12.4904 2.43073 12.2998 2.35369C12.1093 2.27665 11.9055 2.23801 11.7 2.23999H10.2C10.0982 2.24159 9.99722 2.22247 9.9031 2.18378C9.80898 2.1451 9.72371 2.08767 9.65249 2.01499L8.60249 0.957487C8.30998 0.665289 7.91344 0.50116 7.49999 0.50116C7.08654 0.50116 6.68999 0.665289 6.39749 0.957487L5.33999 1.99999C5.26876 2.07267 5.1835 2.1301 5.08937 2.16879C4.99525 2.20747 4.89424 2.22659 4.79249 2.22499H3.29249C3.08699 2.22597 2.88371 2.26754 2.69432 2.34731C2.50494 2.42709 2.33318 2.54349 2.18892 2.68985C2.04466 2.8362 1.93073 3.00961 1.85369 3.20013C1.77665 3.39064 1.73801 3.5945 1.73999 3.79999V5.29999C1.74159 5.40174 1.72247 5.50275 1.68378 5.59687C1.6451 5.691 1.58767 5.77627 1.51499 5.84749L0.457487 6.89749C0.165289 7.19 0.00115967 7.58654 0.00115967 7.99999C0.00115967 8.41344 0.165289 8.80998 0.457487 9.10249L1.49999 10.16C1.57267 10.2312 1.6301 10.3165 1.66878 10.4106C1.70747 10.5047 1.72659 10.6057 1.72499 10.7075V12.2075C1.72597 12.413 1.76754 12.6163 1.84731 12.8056C1.92709 12.995 2.04349 13.1668 2.18985 13.3111C2.3362 13.4553 2.50961 13.5692 2.70013 13.6463C2.89064 13.7233 3.0945 13.762 3.29999 13.76H4.79999C4.90174 13.7584 5.00275 13.7775 5.09687 13.8162C5.191 13.8549 5.27627 13.9123 5.34749 13.985L6.40499 15.0425C6.69749 15.3347 7.09404 15.4988 7.50749 15.4988C7.92094 15.4988 8.31748 15.3347 8.60999 15.0425L9.65999 14C9.73121 13.9273 9.81647 13.8699 9.9106 13.8312C10.0047 13.7925 10.1057 13.7734 10.2075 13.775H11.7075C12.1212 13.775 12.518 13.6106 12.8106 13.3181C13.1031 13.0255 13.2675 12.6287 13.2675 12.215V10.715C13.2659 10.6132 13.285 10.5122 13.3237 10.4181C13.3624 10.324 13.4198 10.2387 13.4925 10.1675L14.55 9.10999C14.6953 8.96452 14.8104 8.79176 14.8887 8.60164C14.9671 8.41152 15.007 8.20779 15.0063 8.00218C15.0056 7.79656 14.9643 7.59311 14.8847 7.40353C14.8051 7.21394 14.6888 7.04197 14.5425 6.89749ZM10.635 6.64999L6.95249 10.25C6.90055 10.3026 6.83864 10.3443 6.77038 10.3726C6.70212 10.4009 6.62889 10.4153 6.55499 10.415C6.48062 10.4139 6.40719 10.3982 6.33896 10.3685C6.27073 10.3389 6.20905 10.2961 6.15749 10.2425L4.37999 8.44249C4.32532 8.39044 4.28169 8.32793 4.25169 8.25867C4.22169 8.18941 4.20593 8.11482 4.20536 8.03934C4.20479 7.96387 4.21941 7.88905 4.24836 7.81934C4.27731 7.74964 4.31999 7.68647 4.37387 7.63361C4.42774 7.58074 4.4917 7.53926 4.56194 7.51163C4.63218 7.484 4.70726 7.47079 4.78271 7.47278C4.85816 7.47478 4.93244 7.49194 5.00112 7.52324C5.0698 7.55454 5.13148 7.59935 5.18249 7.65499L6.56249 9.05749L9.84749 5.84749C9.95296 5.74215 10.0959 5.68298 10.245 5.68298C10.394 5.68298 10.537 5.74215 10.6425 5.84749C10.6953 5.90034 10.737 5.96318 10.7653 6.03234C10.7935 6.1015 10.8077 6.1756 10.807 6.25031C10.8063 6.32502 10.7908 6.39884 10.7612 6.46746C10.7317 6.53608 10.6888 6.59813 10.635 6.64999Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="border-b border-b-gray-200"></div>
            <div className="flex flex-col gap-5 p-5">
              <div className="text-2sm text-gray-900 font-semibold">
                Let us know why you’re reporing this person
              </div>
              <div className="flex flex-col gap-3.5">
                <label className="form-label flex items-center gap-2.5">
                  <input
                    className="radio radio-sm"
                    name="report-option"
                    type="radio"
                    value="1"
                  />
                  <div className="flex flex-col gap-0.5">
                    <div className="text-sm font-semibold text-gray-900">
                      Impersonation
                    </div>
                    <div className="text-2sm font-medium text-gray-600">
                      It looks like this profile might be impersonating someone
                      else
                    </div>
                  </div>
                </label>
                <label className="form-label flex items-center gap-2.5">
                  <input
                    className="radio radio-sm"
                    name="report-option"
                    type="radio"
                    value="2"
                  />
                  <div className="flex flex-col gap-0.5">
                    <div className="text-sm font-semibold text-gray-900">
                      Spammy
                    </div>
                    <div className="text-2sm font-medium text-gray-600">
                      This person profile, comments or posts contain misleading
                      text
                    </div>
                  </div>
                </label>
                <label className="form-label flex items-center gap-2.5">
                  <input
                    className="radio radio-sm"
                    name="report-option"
                    type="radio"
                    value="3"
                  />
                  <div className="flex flex-col gap-0.5">
                    <div className="text-sm font-semibold text-gray-900">
                      Off bumble behavior
                    </div>
                    <div className="text-2sm font-medium text-gray-600">
                      This person has engaged in behavior that is abusive,
                      bullying
                    </div>
                  </div>
                </label>
                <label className="form-label flex items-center gap-2.5">
                  <input
                    className="radio radio-sm"
                    name="report-option"
                    type="radio"
                    value="4"
                  />
                  <div className="flex flex-col gap-0.5">
                    <div className="text-sm font-semibold text-gray-900">
                      Something else
                    </div>
                    <div className="text-2sm font-medium text-gray-600">
                      None of the reasons listed above are suitable
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="border-b border-b-gray-200"></div>
            <div className="text-2sm font-medium text-center text-gray-800 p-5">
              Don't worry, your report is completely anonymous; the person
              you're
              <br />
              reporting will not be informed that you've submitted it
            </div>
            <div className="border-b border-b-gray-200"></div>
            <div
              className="flex items-center gap-2.5 justify-end p-5"
              id="report_user_modal"
            >
              <button className="btn btn-sm btn-primary">
                Report this person
              </button>
              <button
                className="btn btn-sm btn-light"
                data-modal-dismiss="true"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <svg
        id="SvgjsSvg1001"
        width="2"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{
          overflow: "hidden",
          top: "-100%",
          left: "-100%",
          position: "absolute",
          opacity: "0",
        }}
      >
        <defs id="SvgjsDefs1002"></defs>
        <polyline id="SvgjsPolyline1003" points="0,0"></polyline>
        <path id="SvgjsPath1004" d="M0 0 "></path>
      </svg>
    </>
  );
};

export default AppLayout;