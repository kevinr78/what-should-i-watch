import React from "react";
import SideBar from "./SideBar/Sidebar";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout() {
  return (
    <div className="w-screen bg-slate-100 flex">
      <div>
        <SideBar />
      </div>
      <div className="flex-1 ">
        <Outlet />
      </div>
    </div>
  );
}
