"use client";
import Avatar from "@/components/Avatar";
import ButtonIcon from "@/components/ButtonIcon";
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import { useState } from "react";
import { HiBars4, HiMiniXMark } from "react-icons/hi2";
import SideBar from "./SideBar";
import Drawer from "@/ui/Drawer";

function Header({}) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, isLoading } = useAuth();
  return (
    <header
      className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <div className="flex items-center gap-x-3">
          <button
            className="block lg:hidden border-none"
            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
          >
            {isOpenDrawer ? (
              <HiMiniXMark className="w-6 h-6" />
            ) : (
              <HiBars4 className="w-6 h-6" />
            )}
          </button>
          <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-x-2">
            <span className="text-sm lg:text-lg font-bold text-secondary-700">
              سلام؛ {user?.name}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <Link href="/profile">
            <Avatar src={user?.avatarUrl} />
          </Link>
          <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
            <SideBar onClose={() => setIsOpenDrawer(false)} />
          </Drawer>
        </div>
      </div>
    </header>
  );
}
export default Header;
