"use client";

import { useAuth } from "@/context/authContext";
import Link from "next/link";
import SideBarNavs from "./SideBarNavs";
import {
  HiOutlineHome,
  HiArrowLeftEndOnRectangle,
  HiMiniXMark,
  HiBars4,
} from "react-icons/hi2";
// import { HiArrowLeftOnRectangle } from "react-icons/hi";

function SideBar({ onClose }) {
  const { logout } = useAuth();

  const logoutHandler = async () => {
    await logout;
  };

  return (
    <div className="overflow-y-auto flex flex-col p-5 h-screen pt-10 lg:pt-8">
      {/* Drawer header */}
      <div className="flex items-center justify-between border-b  border-b-secondary-200 pb-4">
        <Link
          href="/"
          className="flex items-center gap-x-4 justify-center text-secondary-700 
        pb-2"
        >
          <HiOutlineHome className="h-5 w-5" />
          <span className="mt-2"> نکست بلاگ</span>
        </Link>
        <button className="block lg:hidden border-none" onClick={onClose}>
          <HiMiniXMark className="w-6 h-6" />
        </button>
      </div>

      {/* Drawer content */}
      <div className="overflow-y-auto flex-auto">
        <SideBarNavs />
        <div
          onClick={logoutHandler}
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-3 px-4 hover:text-red-400 cursor-pointer"
        >
          {/* <ArrowLeftStartOnRectangleIcon className="ml-4 h-5 w-5" /> */}
          <HiArrowLeftEndOnRectangle className="ml-4 h-5 w-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
