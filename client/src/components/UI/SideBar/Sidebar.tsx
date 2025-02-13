/* import AppLogo from "@/assets/AppLogo.png"; */
import SidebarLink from "@/components/UI/SideBar/SidebarLink";
import { getIcon } from "@/config/icons";
import { useState } from "react";
export default function SideBar() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <aside
      id="default-sidebar"
      className={` flex flex-col ${
        isClicked ? "w-24 items-center pl-6" : "w-60"
      } sm:block h-screen pl-4 bg-black drop-shadow-lightPurple transition-all duration-700 ease-in-out`}
      aria-label="Sidebar"
    >
      {/* Sidebar Header */}
      <div className="flex items-center p-2 h-16 mb-4   ">
        <img
          src={getIcon("Menu")}
          alt="Menu"
          onClick={() => setIsClicked(!isClicked)}
          className="h-5 w-5 mr-2 bg-gray"
        />
        <h2
          className={`text-2xl text-white font-medium opacity-100 text-ellipsis transition-opacity duration-700 ease-in-out ${
            isClicked && "hidden"
          }`}
        >
          WhatToWatch
        </h2>
      </div>

      {/* Sidebar Content */}
      <div className="flex flex-col flex-1  p-2">
        {/* Top Section - Takes up available space */}
        <div className="flex flex-col gap-4">
          {(["Home", "Trending", "Favourites"] as const).map((link) => (
            <SidebarLink
              key={link}
              name={link}
              isHidden={isClicked}
              icon={getIcon(link)}
              to="/home"
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
