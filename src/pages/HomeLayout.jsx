import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
