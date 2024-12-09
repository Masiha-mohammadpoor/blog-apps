import { getAllCategories } from "@/services/categoryServices";
import Link from "next/link";

const CategoryList = async () => {
  const { categories } = await getAllCategories();

  return (
    <section>
      <ul>
        <li>
          <Link href="/blogs">همه بلاگ‌ها</Link>
        </li>

        {categories.map((c) => {
          return (
            <li key={c._id}>
              <Link href={`/blogs/category/${c.slug}`}>{c.title}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CategoryList;
