import { Suspense } from "react";
import PostTable from "./PostTable";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";
import { CreatePost } from "./Buttons";
import queryString from "query-string";

const Posts = ({searchParams}) => {
  const query = queryString.stringify(searchParams);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-semibold col-span-1">آخرین پست‌ها</h1>
        <Search />
        <div className="col-span-1 flex lg:justify-end">
          <CreatePost />
        </div>
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <PostTable query={query}/>
      </Suspense>
    </div>
  );
};

export default Posts;
