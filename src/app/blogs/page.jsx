import Spinner from "@/ui/Spinner";
import axios from "axios";
import { Suspense } from "react";

const BlogsPage = async () => {
  await new Promise(res => setTimeout(res,3000))

  const {
    data: { data },
  } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);

  return (
    <section>
      <Suspense fallback={<Spinner/>}>
        <ul>
          {data.posts.map((p) => {
            return <li key={p._id}>{p.title}</li>;
          })}
        </ul>
        </Suspense>
    </section>
  );
};

export default BlogsPage;
