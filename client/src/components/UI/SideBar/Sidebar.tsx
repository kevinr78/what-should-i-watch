/* import AppLogo from "@/assets/AppLogo.png"; */
import SidebarLink from "@/components/UI/SideBar/SidebarLink";
import { getIcon } from "@/config/icons";
import { useState } from "react";
export default function SideBar() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <aside
      id="default-sidebar"
      className={`w-64  flex ${
        isClicked && "  w-24 items-center"
      }  sm:block  h-screen bg-teal-50`}
      aria-label="Sidebar"
    >
      <div className="flex justify-around items-center">
        <img
          src={getIcon("Menu")}
          alt="Menu"
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          className="h-5 w-5 font-bold"
        />
        <h2
          className={`text-2xl font-medium text-ellipsis ${
            isClicked && "hidden"
          } `}
        >
          WhatToWatch
        </h2>
      </div>
      <div className="flex-grow flex-1">
        <h2 className="menu-title">Menu</h2>
        <ul className="menu  text-base-content  p-4 ">
          {(["Home", "Movie", "TV Show"] as const).map((link) => {
            return (
              <SidebarLink
                name={link}
                isHidden={isClicked}
                icon={getIcon(link)}
                to="/home"
              />
            );
          })}
        </ul>
      </div>
      <div>
        <ul className="menu  text-base-content   p-4">
          {/* Sidebar content here */}
          <li>
            <h2 className="menu-title text-clip"> Your Account</h2>
            <ul></ul>
          </li>
        </ul>
      </div>
    </aside>
  );
}
