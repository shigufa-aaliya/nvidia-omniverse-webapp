import React from "react";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 pr-16 px-4 flex justify-between">
      {/* Search Bar */}
      <div className="flex flex-1 justify-end w-64 px-24">
        <input
          type="text"
          placeholder="Search Here"
          className=" py-2 px-4 border border-gray-300 rounded-3xl bg-custom-black text-gray-100"
        />
      </div>

      {/* Notifications and User */}
      <div className="flex items-center space-x-4">
        {/* <div className="w-6 h-6 bg-gray-300 rounded-full"></div> */}
        {/* <div className="w-6 h-6 bg-gray-300 rounded-full"></div> */}
        <BellIcon className="h-6 w-6" /> 
        <UserCircleIcon className="h-6 w-6" />
       
      </div>
    </header>
  );
};

export default Header;
