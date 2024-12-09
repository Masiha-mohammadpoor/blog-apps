"use client";

import { useAuth } from "@/context/authContext";
import Link from "next/link";
import { FaArrowAltCircleLeft, FaHome } from "react-icons/fa";
import SideBarNavs from "./SideBarNavs";
// import { HiArrowLeftOnRectangle } from "react-icons/hi";


function SideBar() {
  const { logout } = useAuth();

  const logoutHandler = async () => {
    await logout;
  };

  return (
    <div className="overflow-y-auto flex flex-col p-5 h-screen pt-10 lg:pt-8">
      {/* Drawer header */}
      <Link
        href="/"
        className="flex items-center gap-x-4 justify-center text-secondary-700 border-b  border-b-secondary-200 
        pb-2 mb-6"
      >
        <FaHome/>
        <span> نکست بلاگ</span>
      </Link>
      {/* Drawer content */}
      <div className="overflow-y-auto flex-auto">
        <SideBarNavs />
        <div
          onClick={logoutHandler}
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-3 px-4 hover:text-red-400 cursor-pointer"
        >
          {/* <ArrowLeftStartOnRectangleIcon className="ml-4 h-5 w-5" /> */}
          <FaArrowAltCircleLeft className="ml-4 h-5 w-5"/>
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
