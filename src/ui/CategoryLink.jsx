"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineStop } from "react-icons/hi2";

const CategoryLink = ({slug , title}) => {

  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link
    href={`/blogs/category/${slug}`}
    className={`flex items-center gap-x-3 `}
  >
    <HiOutlineStop  className="w-3"/>
    <span>{title}</span>
  </Link>

  );
}
 
export default CategoryLink;