import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../mycomponents/Navbar";

const Layout = () => {
  return (
    <>
     <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;