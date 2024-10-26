// src/components/Sidebar/MenuSub.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import MenuItem from "./MenuItem";

interface MenuSubProps {
  sub: any;
}

const MenuSub: React.FC<MenuSubProps> = ({ sub }) => {
  return (
    <>
      <div className="menu-item pt-2.25 pb-px">
        <span className="menu-heading uppercase pl-[10px] pr-[10px] text-2sm font-semibold text-gray-500">
          {sub.label}
        </span>
      </div>

      {sub?.children?.map((child: any) => {
        return <MenuItem key={child.label} item={child} />;
      })}
    </>
  );
};

export default MenuSub;
