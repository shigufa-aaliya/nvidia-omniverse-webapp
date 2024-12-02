import React, { useState } from "react";
import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  CogIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { title: "Home", icon: <HomeIcon className="h-6 w-6" /> },
    { title: "Option 2", icon: <UserGroupIcon className="h-6 w-6" /> },
    { title: "Option 3", icon: <BriefcaseIcon className="h-6 w-6" /> },
    { title: "Option 4", icon: <CogIcon className="h-6 w-6" /> },
    { title: "Option 5", icon: <BellIcon className="h-6 w-6" /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? "w-16" : "w-64"
        } bg-custom-black text-white h-full transition-all duration-300 ease-in-out flex flex-col`}
      >
        {/* Hamburger Icon */}
        <button
          className="p-4 focus:outline-none hover:bg-gray-800"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div className="flex-grow mt-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-2 rounded-md hover:bg-gray-700 cursor-pointer"
            >
              <div className="mr-2">{item.icon}</div>
              {/* Show text only if sidebar is expanded */}
              {!isCollapsed && <span>{item.title}</span>}
            </div>
          ))}
        </div>

        {/* Logout */}
        <div className="px-4 py-6">
          <a
            href="#"
            className="block py-2 px-4 rounded-md text-center hover:bg-gray-600"
          >
            {!isCollapsed ? "Logout" : <CogIcon className="h-6 w-6 mx-auto" />}
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
