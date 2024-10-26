// src/components/Sidebar/MenuItem.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

interface MenuItemProps {
  item: any;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <>
      {item.path ? (
        <Link to={item.path} className="menu-item">
          <div
            className="menu-label border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
            tabIndex={0}
          >
            {item?.icon && (
              <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                <i className={`ki-filled   ${item.icon} text-lg`}></i>
              </span>
            )}
            <span className="menu-title text-sm font-semibold text-gray-700">
              {item?.label}
            </span>
            {/* <span className="menu-badge mr-[-10px]">
              <span className="badge badge-xs">Soon</span>
            </span> */}
          </div>
        </Link>
      ) : (
        //   {item.path ? (
        //     <Link to={item.path}>
        //       <div
        //         className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
        //         tabIndex={0}
        //       >
        //         {item?.icon && (
        //           <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
        //             <i className={`ki-filled   ${item.icon} text-lg`}></i>
        //           </span>
        //         )}
        //         <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
        //           {item?.label}
        //         </span>
        //         {item?.badge && (
        //           <span className="menu-badge text-xs bg-gray-200 text-gray-500 rounded px-2 ml-auto">
        //             {item?.badge}
        //           </span>
        //         )}
        //         {hasChildren && (
        //           <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
        //             <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
        //             <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
        //           </span>
        //         )}
        //       </div>
        //     </Link>
        //   ) : (
        //     <div
        //       className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
        //       tabIndex={0}
        //     >
        //       {item?.icon && (
        //         <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
        //           <i className={`ki-filled   ${item.icon} text-lg`}></i>
        //         </span>
        //       )}
        //       <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
        //         {item?.label}
        //       </span>
        //       {item?.badge && (
        //         <span className="menu-badge text-xs bg-gray-200 text-gray-500 rounded px-2 ml-auto">
        //           {item?.badge}
        //         </span>
        //       )}
        //       {hasChildren && (
        //         <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
        //           <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
        //           <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
        //         </span>
        //       )}
        //     </div>
        //   )}
        // </div>
        <div
          className="menu-item"
          data-menu-item-toggle="accordion"
          data-menu-item-trigger="click"
        >
          {item.path ? (
            <Link to={item.path}>
              <div
                className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
                tabIndex={0}
              >
                {item?.icon && (
                  <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                    <i className={`ki-filled   ${item.icon} text-lg`}></i>
                  </span>
                )}
                <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
                  {item?.label}
                </span>
                {item?.badge && (
                  <span className="menu-badge text-xs bg-gray-200 text-gray-500 rounded px-2 ml-auto">
                    {item?.badge}
                  </span>
                )}
                {hasChildren && (
                  <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                    <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                    <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                  </span>
                )}
              </div>
            </Link>
          ) : (
            <div
              className="menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px]"
              tabIndex={0}
            >
              {item?.icon && (
                <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                  <i className={`ki-filled   ${item.icon} text-lg`}></i>
                </span>
              )}
              <span className="menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary">
                {item?.label}
              </span>
              {item?.badge && (
                <span className="menu-badge text-xs bg-gray-200 text-gray-500 rounded px-2 ml-auto">
                  {item?.badge}
                </span>
              )}
              {hasChildren && (
                <span className="menu-arrow text-gray-400 w-[20px] shrink-0 justify-end ml-1 mr-[-10px]">
                  <i className="ki-filled ki-plus text-2xs menu-item-show:hidden"></i>
                  <i className="ki-filled ki-minus text-2xs hidden menu-item-show:inline-flex"></i>
                </span>
              )}
            </div>
          )}

          <div className="menu-accordion gap-0.5 pl-[10px] relative before:absolute before:left-[20px] before:top-0 before:bottom-0 before:border-l before:border-gray-200">
            {item?.children?.map((child: any, i: any) => (
              <div className="menu-item" key={i}>
                <Link
                  className="menu-link gap-[14px] pl-[10px] pr-[10px] py-[8px] border border-transparent items-center grow menu-item-active:bg-secondary-active dark:menu-item-active:bg-coal-300 dark:menu-item-active:border-gray-100 menu-item-active:rounded-lg hover:bg-secondary-active dark:hover:bg-coal-300 dark:hover:border-gray-100 hover:rounded-lg"
                  to={`${child.path}`}
                  tabIndex={0}
                >
                  <span className="menu-bullet flex w-[6px] relative before:absolute before:top-0 before:size-[6px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 menu-item-active:before:bg-primary menu-item-hover:before:bg-primary"></span>
                  <span className="menu-title text-2sm font-medium text-gray-700 menu-item-active:text-primary menu-item-active:font-semibold menu-link-hover:!text-primary">
                    {child.label}
                  </span>
                </Link>
              </div>
              // <MenuItem key={child.label} item={child} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItem;
