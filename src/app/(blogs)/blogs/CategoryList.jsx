import { getAllCategories } from "@/services/categoryServices";
import { HiOutlineSquares2X2, HiOutlineStop } from "react-icons/hi2";
import Link from "next/link";

const CategoryList = async () => {
  const { categories } = await getAllCategories();

  return (
    <section>
      <h1 className="font-semibold text-lg flex items-center gap-x-3 mb-3">
        <HiOutlineSquares2X2 className="w-6 h-6" />
        دسته‌بندی ها
      </h1>
      <ul className="flex flex-col gap-y-3">
        <li>
          <Link href="/blogs" className="flex items-center gap-x-3">
            <HiOutlineStop className="w-3" />
            <span>همه بلاگ ها</span>
          </Link>
        </li>

        {categories.map((c) => {
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
