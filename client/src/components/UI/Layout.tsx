import SideBar from "./SideBar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx/Navbar";

export default function Layout() {
  return (
    <div className="w-screen bg-black flex">
      <div>
        <SideBar />
      </div>
      <div className="flex-1 ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
