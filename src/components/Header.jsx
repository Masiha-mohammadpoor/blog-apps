"use client";
import { useAuth } from "@/context/authContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3 } from "react-icons/hi2";
import useLocalStorage from "use-local-storage";

const Header = () => {
  const pathname = usePathname();
  const { isLoading, user } = useAuth();
  const [openMenu, setOpenMenu] = useLocalStorage("openMenu", false);

  return (
    <header className="w-full shadow-lg flex justify-between items-center p-4 md:px-20 px-5">
      <div className="lg:hidden flex items-center">
        <button onClick={() => setOpenMenu(true)}>
          <HiBars3 className="w-7 h-7" />
        </button>
      </div>
      <div className="w-24">
        <ul className="w-full flex justify-between items-center">
          <li>
            <Link
              className={`${
                pathname === "/" ? "text-primary-600" : "text-black"
              }`}
              href="/"
            >
              خانه
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathname.startsWith("/blogs")
                  ? "text-primary-600"
                  : "text-black"
              }`}
              href="/blogs"
            >
              بلاگ‌ها
            </Link>
          </li>
        </ul>
      </div>
      <div>
        {isLoading ? (
          ""
        ) : user ? (
          <Link href="/profile">
            <Image src="/images/user.jpg" alt="profile" width={40} height={40} className="rounded-full"/>
          </Link>
        ) : (
          <Link href="/signin">ورود</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
