import Spinner from "@/ui/Spinner";
import axios from "axios";
import Link from "next/link";
import { Suspense } from "react";

const CategoryList = async () => {

  await new Promise(res => setTimeout(res,2000))
  const {
    data: { data },
  } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  return (
    <section>
        <ul>
          <li>
            <Link href="/blogs">همه بلاگ‌ها</Link>
          </li>

          {data.categories.map((c) => {
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
