import SideBar from "@components/UI/SideBar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "@components/UI/Navbar/Navbar";

export default function Layout() {
  return (
    <div className="bg-black flex h-screen">
      <SideBar />
      <div className="w-4/5 flex-1 overflow-y-scroll">
        <div className="sticky top-0 z-50 bg-black">
          <Navbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
