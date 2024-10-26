// src/components/Sidebar/Sidebar.tsx
import React from "react";
import SidebarSection from "./SidebarSection";
import { sidebarSections } from "./sidebarData";

const Sidebar = () => {
  return (
    <div
      className="sidebar dark:bg-coal-600 bg-light border-r border-r-gray-200 dark:border-r-coal-100 fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0"
      data-drawer="true"
      data-drawer-class="drawer drawer-start top-0 bottom-0"
      data-drawer-enable="true|lg:false"
      id="sidebar"
    >
      <div
        className="sidebar-header hidden  lg:flex items-center relative justify-between px-3 lg:px-6 shrink-0"
        id="sidebar_header"
      >
        <a className="dark:hidden" href="#">
          <span className=" text-3xl uppercase font-extrabold">Swift</span>

          {/* <img
            className="default-logo h-[50px] max-w-none"
            src="/logo/complete_logo.png"
          />
          <img
            className="small-logo h-[50px] max-w-none"
            src="/logo/logo-icon.png"
          /> */}
        </a>
        {/* <a className="hidden dark:block" href="/html/demo1.html">
          <img
            className="default-logo h-[50px] max-w-none"
            src="/logo/complete_logo.png"
          />
          <img
            className="small-logo h-[50px] max-w-none"
            src="/logo/logo-icon.png"
          />
        </a> */}
        <button
          className="btn btn-icon btn-icon-md size-[30px] rounded-lg border border-gray-200 dark:border-gray-300 bg-light text-gray-500 hover:text-gray-700 toggle absolute left-full top-2/4 -translate-x-2/4 -translate-y-2/4"
          data-toggle="body"
          data-toggle-class="sidebar-collapse"
          id="sidebar_toggle"
        >
          <i className="ki-filled ki-black-left-line toggle-active:rotate-180 transition-all duration-300"></i>
        </button>
      </div>
      <div
        className="sidebar-content flex grow shrink-0 py-5 pr-2"
        id="sidebar_content"
      >
        <div
          className="scrollable-y-hover grow shrink-0 flex pl-2 lg:pl-5 pr-1 lg:pr-3"
          data-scrollable="true"
          data-scrollable-dependencies="#sidebar_header"
          data-scrollable-height="auto"
          data-scrollable-offset="0px"
          data-scrollable-wrappers="#sidebar_content"
          id="sidebar_scrollable"
        >
          <div
            className="menu flex flex-col grow gap-0.5"
            data-menu="true"
            data-menu-accordion-expand-all="false"
            id="sidebar_menu"
          >
            {sidebarSections.map((section: any) => (
              <SidebarSection key={section.heading} section={section} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
