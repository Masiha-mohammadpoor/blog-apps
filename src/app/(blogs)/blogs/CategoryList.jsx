"use client";
import {
  HiOutlineSquares2X2,
  HiOutlineStop,
  HiMiniXMark,
} from "react-icons/hi2";
import Link from "next/link";
import { useCategories } from "@/hooks/useCategories";

const CategoryList = () => {
  const { data, isPending } = useCategories();

  if (isPending) return "";
  return (
    <section className="pr-3">
      <h1 className="font-semibold text-lg flex justify-between items-center mb-3">
        <div className="flex items-center gap-x-3">
          <HiOutlineSquares2X2 className="w-6 h-6" />
          دسته‌بندی ها
        </div>
      </h1>
      <ul className="flex flex-col gap-y-3">
        <li>
          <Link href="/blogs" className="flex items-center gap-x-3">
            <HiOutlineStop className="w-3" />
            <span>همه بلاگ ها</span>
          </Link>
        </li>

        {data.categories.map((c) => {
          return (
            <li key={c._id}>
              <Link
                href={`/blogs/category/${c.slug}`}
                className="flex items-center gap-x-3"
              >
                <HiOutlineStop className="w-3" />
                <span>{c.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CategoryList;
