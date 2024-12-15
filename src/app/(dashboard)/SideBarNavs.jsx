"use client";
import {
  HiOutlineDocumentText,
  HiOutlineRectangleGroup,
  HiOutlineChatBubbleBottomCenter,
  HiOutlineSquares2X2,
  HiOutlineUsers,
} from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarNavs = [
  {
    id: 1,
    title: "پست ها",
    icon: <HiOutlineDocumentText className="w-5 h-5" />,
    href: "/profile/posts",
  },
  {
    id: 2,
    title: "نظرات",
    icon: <HiOutlineChatBubbleBottomCenter className="w-5 h-5" />,
    href: "/profile/comments",
  },
  {
    id: 3,
    title: "دسته بندی ها",
    icon: <HiOutlineSquares2X2 className="w-5 h-5" />,
    href: "/profile/categories",
  },
  {
    id: 4,
    title: "کاربران",
    icon: <HiOutlineUsers className="w-5 h-5" />,
    href: "/profile/users",
  },
];

export default function SideBarNavs() {
  const pathname = usePathname();
  return (
    <ul className="space-y-2">
      <li>
        <Link
          href="/profile"
          className={`flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 py-3 px-4 ${
            pathname === "/profile" ? "text-primary-900" : "text-secondary-700"
          }`}
        >
          <HiOutlineRectangleGroup className="w-5 h-5" />
          داشبورد
        </Link>
      </li>

      {sidebarNavs.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={`flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 py-3 px-4 ${
                pathname.startsWith(nav.href)
                  ? "text-primary-900"
                  : "text-secondary-700"
              }`}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
