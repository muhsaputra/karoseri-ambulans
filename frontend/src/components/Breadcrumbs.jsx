import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  if (location.pathname === "/") return null;

  return (
    <nav className="flex items-center justify-center gap-1 text-sm text-white/90 mt-2">
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-white transition-colors"
      >
        <MdHome size={18} /> Home
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const label = value.charAt(0).toUpperCase() + value.slice(1);
        return (
          <React.Fragment key={to}>
            <MdKeyboardArrowRight size={20} className="text-white/60" />
            <Link
              to={to}
              className="hover:text-white transition-colors capitalize"
            >
              {label.replace("-", " ")}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};
export default Breadcrumbs;
