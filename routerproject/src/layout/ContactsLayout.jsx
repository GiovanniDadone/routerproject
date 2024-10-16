import React from "react";
import Contacts from "../pages/Contacts";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Contacts />
      <Outlet />
    </div>
  );
};
export default RootLayout;
