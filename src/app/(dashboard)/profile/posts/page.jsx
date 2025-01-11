import { Suspense } from "react";
import PostTable from "./PostTable";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";
import { CreatePost } from "./Buttons";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";
import { getAllPosts } from "@/services/postServices";

const Posts = async ({searchParams}) => {
  const query = queryString.stringify(searchParams);
  const {totalPages} = await getAllPosts(query);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-semibold col-span-1">پست‌ها</h1>
        <Search />
        <div className="col-span-1 flex lg:justify-end">
          <CreatePost />
        </div>
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <PostTable query={query}/>
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages}/>
      </div>
    </div>
  );
};

export default Posts;
