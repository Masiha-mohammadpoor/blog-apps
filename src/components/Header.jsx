"use client";
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const { isLoading, user } = useAuth();
  return (
    <header className="w-full shadow-lg flex justify-between items-center p-4 px-20">
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
          <Link href="/profile">پروفایل</Link>
        ) : (
          <Link href="/signin">ورود</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
