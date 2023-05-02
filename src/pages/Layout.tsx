import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="sm:container max-w-[90%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
