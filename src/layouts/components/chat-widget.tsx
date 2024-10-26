import React from "react";

type Props = {};

const ChatWidget = (props: Props) => {
  return (
    <div
      className="dropdown"
      data-dropdown="true"
      data-dropdown-offset="170px, 10px"
      data-dropdown-placement="bottom-end"
      data-dropdown-trigger="click|lg:click"
    >
      <button className="dropdown-toggle btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary dropdown-open:bg-primary-light dropdown-open:text-primary text-gray-500">
        <i className="ki-filled ki-messages"></i>
      </button>
      <div className="dropdown-content light:border-gray-300 w-full max-w-[450px]">
        <div className="">
          <div className="flex items-center justify-between gap-2.5 text-sm text-gray-900 font-semibold px-5 py-2.5">
            Chat
            <button
              className="btn btn-sm btn-icon btn-light btn-clear shrink-0"
              data-dropdown-dismiss="true"
            >
              <i className="ki-filled ki-cross"></i>
            </button>
          </div>
          <div className="border-b border-b-gray-200"></div>
          <div className="shadow-card border-b border-gray-200 py-2.5">
            <div className="flex items-center justify-between flex-wrap gap-2 px-5">
              <div className="flex items-center flex-wrap gap-2">
                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-200 size-11">
                  <img
                    alt=""
                    className="size-7"
                    src="/media/brand-logos/gitlab.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <a
                    className="text-2sm font-semibold text-gray-900 hover:text-primary-active"
                    href="#"
                  >
                    HR Team
                  </a>
                  <span className="text-2xs font-medium italic text-gray-500">
                    Jessy is typing..
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  <div className="flex">
                    <img
                      className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                      src="/media/avatars/300-4.png"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                      src="/media/avatars/300-1.png"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-[30px]"
                      src="/media/avatars/300-2.png"
                    />
                  </div>
                  <div className="flex">
                    <span className="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-[30px] text-success-inverse size-6 ring-success-light bg-success">
                      +10
                    </span>
                  </div>
                </div>
                <div className="menu" data-menu="true">
                  <div
                    className="menu-item"
                    data-menu-item-offset="0, 10px"
                    data-menu-item-placement="bottom-end"
                    data-menu-item-toggle="dropdown"
                    data-menu-item-trigger="click|lg:hover"
                  >
                    <button className="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                      <i className="ki-filled ki-dots-vertical"></i>
                    </button>
                    <div
                      className="menu-dropdown menu-default w-full max-w-[175px]"
                      data-menu-dismiss="true"
                    >
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="html/demo1/account/members/teams.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-users"></i>
                          </span>
                          <span className="menu-title">Invite Users</span>
                        </a>
                      </div>
                      <div
                        className="menu-item"
                        data-menu-item-offset="-15px, 0"
                        data-menu-item-placement="right-start"
                        data-menu-item-toggle="dropdown"
                        data-menu-item-trigger="click|lg:hover"
                      >
                        <div className="menu-link">
                          <span className="menu-icon">
                            <i className="ki-filled ki-people"></i>
                          </span>
                          <span className="menu-title">Team</span>
                          <span className="menu-arrow">
                            <i className="ki-filled ki-right text-3xs"></i>
                          </span>
                        </div>
                        <div className="menu-dropdown menu-default w-full max-w-[175px]">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/account/members/import-members.html"
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-shield-search"></i>
                              </span>
                              <span className="menu-title">Find Members</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/account/members/import-members.html"
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-calendar"></i>
                              </span>
                              <span className="menu-title">Meetings</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="html/demo1/account/members/import-members.html"
                            >
                              <span className="menu-icon">
                                <i className="ki-filled ki-filter-edit"></i>
                              </span>
                              <span className="menu-title">Group Settings</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="html/demo1/account/security/privacy-settings.html"
                        >
                          <span className="menu-icon">
                            <i className="ki-filled ki-setting-3"></i>
                          </span>
                          <span className="menu-title">Settings</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="scrollable-y-auto"
          data-scrollable="true"
          data-scrollable-dependencies="#header"
          data-scrollable-max-height="auto"
          data-scrollable-offset="280px"
        >
          <div className="flex flex-col gap-5 py-5">
            <div className="flex items-end gap-3.5 px-5">
              <img
                alt=""
                className="rounded-full size-9"
                src="/media/avatars/300-5.png"
              />
              <div className="flex flex-col gap-1.5">
                <div className="card shadow-none flex flex-col bg-gray-100 gap-2.5 p-3 rounded-bl-none">
                  <p className="text-2sm font-medium text-gray-700">
                    Hello!
                    <br />
                    Next week we are closing the project. Do You have questions?
                  </p>
                </div>
                <span className="text-2xs font-medium text-gray-500">
                  14:04
                </span>
              </div>
            </div>
            <div className="flex items-end justify-end gap-3.5 px-5">
              <div className="flex flex-col gap-1.5">
                <div className="card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-br-none">
                  <p className="text-2sm font-medium text-light">
                    This is excellent news!
                  </p>
                </div>
                <div className="flex items-center justify-end relative">
                  <span className="text-2xs font-medium text-gray-600 mr-6">
                    14:08
                  </span>
                  <i className="ki-filled ki-double-check text-lg absolute text-success"></i>
                </div>
              </div>
              <div className="relative shrink-0">
                <img
                  alt=""
                  className="rounded-full size-9"
                  src="/media/avatars/300-2.png"
                />
                <span className="size-[4.8px] badge badge-circle badge-success absolute top-7 end-0 transform -translate-y-1/2"></span>
              </div>
            </div>
            <div className="flex items-end gap-3.5 px-5">
              <img
                alt=""
                className="rounded-full size-9"
                src="/media/avatars/300-4.png"
              />
              <div className="flex flex-col gap-1.5">
                <div className="card shadow-none flex flex-col bg-gray-100 gap-2.5 p-3 rounded-bl-none">
                  <p className="text-2sm font-medium text-gray-700">
                    I have checked the features, can not wait to demo them!
                  </p>
                </div>
                <span className="text-2xs font-medium text-gray-500">
                  14:26
                </span>
              </div>
            </div>
            <div className="flex items-end gap-3.5 px-5">
              <img
                alt=""
                className="rounded-full size-9"
                src="/media/avatars/300-1.png"
              />
              <div className="flex flex-col gap-1.5">
                <div className="card shadow-none flex flex-col bg-gray-100 gap-2.5 p-3 rounded-bl-none">
                  <p className="text-2sm font-medium text-gray-700">
                    I have looked over the rollout plan, and everything seems
                    spot on. I am ready on my end and can not wait for the user
                    feedback.
                  </p>
                </div>
                <span className="text-2xs font-medium text-gray-500">
                  15:09
                </span>
              </div>
            </div>
            <div className="flex items-end justify-end gap-3.5 px-5">
              <div className="flex flex-col gap-1.5">
                <div className="card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-br-none">
                  <p className="text-2sm font-medium text-light">
                    Haven't seen the build yet, I'll look now.
                  </p>
                </div>
                <div className="flex items-center justify-end relative">
                  <span className="text-2xs font-medium text-gray-600 mr-6">
                    15:52
                  </span>
                  <i className="ki-filled ki-double-check text-lg absolute text-gray-400"></i>
                </div>
              </div>
              <div className="relative shrink-0">
                <img
                  alt=""
                  className="rounded-full size-9"
                  src="/media/avatars/300-2.png"
                />
                <span className="size-[4.8px] badge badge-circle badge-success absolute top-7 end-0 transform -translate-y-1/2"></span>
              </div>
            </div>
            <div className="flex items-end justify-end gap-3.5 px-5">
              <div className="flex flex-col gap-1.5">
                <div className="card shadow-none flex bg-primary flex-col gap-2.5 p-3 rounded-br-none">
                  <p className="text-2sm font-medium text-light">
                    Checking the build now
                  </p>
                </div>
                <div className="flex items-center justify-end relative">
                  <span className="text-2xs font-medium text-gray-600 mr-6">
                    15:52
                  </span>
                  <i className="ki-filled ki-double-check text-lg absolute text-gray-400"></i>
                </div>
              </div>
              <div className="relative shrink-0">
                <img
                  alt=""
                  className="rounded-full size-9"
                  src="/media/avatars/300-2.png"
                />
                <span className="size-[4.8px] badge badge-circle badge-success absolute top-7 end-0 transform -translate-y-1/2"></span>
              </div>
            </div>
            <div className="flex items-end gap-3.5 px-5">
              <img
                alt=""
                className="rounded-full size-9"
                src="/media/avatars/300-4.png"
              />
              <div className="flex flex-col gap-1.5">
                <div className="card shadow-none flex flex-col bg-gray-100 gap-2.5 p-3 rounded-bl-none">
                  <p className="text-2sm font-medium text-gray-700">
                    Tomorrow, I will send the link for the meeting
                  </p>
                </div>
                <span className="text-2xs font-medium text-gray-500">
                  17:40
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2.5">
          <div
            className="flex grow gap-2 p-5 bg-gray-100 mb-2.5"
            id="join_request"
          >
            <div className="relative shrink-0">
              <img
                alt=""
                className="rounded-full size-8"
                src="/media/avatars/300-14.png"
              />
              <span className="size-1.5 badge badge-circle bg-gray-400 absolute top-7 end-0.5 ring-1 ring-light transform -translate-y-1/2"></span>
            </div>
            <div className="flex items-center justify-between gap-3 grow">
              <div className="flex flex-col">
                <div className="text-2sm mb-px">
                  <a
                    className="hover:text-primary-active font-semibold text-gray-900"
                    href="#"
                  >
                    Jane Perez
                  </a>
                  <span className="text-gray-600">wants to join chat</span>
                </div>
                <span className="flex items-center text-2xs font-medium text-gray-500">
                  1 day ago
                  <span className="badge badge-circle bg-gray-500 size-1 mx-1.5"></span>
                  Design Team
                </span>
              </div>
              <div className="flex gap-2.5">
                <button
                  className="btn btn-light btn-xs"
                  data-dismiss="#join_request"
                >
                  Decline
                </button>
                <button className="btn btn-dark btn-xs">Accept</button>
              </div>
            </div>
          </div>
          <div className="relative grow mx-5">
            <img
              alt=""
              className="rounded-full size-[30px] absolute left-0 top-2/4 -translate-y-2/4 ms-2.5"
              src="/media/avatars/300-2.png"
            />
            <input
              className="input h-auto py-4 ps-12 bg-transparent"
              placeholder="Write a message..."
              type="text"
              defaultValue=""
            />
            <div className="flex items-center gap-2.5 absolute right-3 top-1/2 -translate-y-1/2">
              <button className="btn btn-sm btn-icon btn-light btn-clear">
                <i className="ki-filled ki-exit-up"></i>
              </button>
              <a className="btn btn-dark btn-sm" href="#">
                Send
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
