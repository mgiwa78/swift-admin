// src/components/Sidebar/SidebarSection.tsx
import React from "react";
import MenuItem from "./MenuItem";

interface SidebarSectionProps {
  section: any;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ section }) => {
  return (
    <>
      {section.heading && (
        <div className="menu-item pt-2.25 pb-px">
          <span className="menu-heading uppercase pl-[10px] pr-[10px] text-2sm font-semibold text-gray-500">
            {section.heading}
          </span>
        </div>
      )}

      {section.items.map((item: any) => (
        <MenuItem key={item.label} item={item} />
      ))}
    </>
  );
};

export default SidebarSection;
