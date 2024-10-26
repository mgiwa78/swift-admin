/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.style.height = "100%";
    }
    return () => {
      if (root) {
        root.style.height = "auto";
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center grow bg-center bg-no-repeat page-bg">
      <Outlet />
    </div>
  );
};

export { AdminLayout };
