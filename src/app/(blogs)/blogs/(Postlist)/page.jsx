import Spinner from "@/ui/Spinner";
import { Suspense } from "react";
import PostList from "../PostList";
import queryString from "query-string";

const BlogsPage = ({searchParams}) => {

  const queries = `${queryString.stringify(searchParams)}`;
  return (
    <Suspense fallback={<Spinner />}>
      <PostList query={queries}/>
    </Suspense>
  );
};

export default BlogsPage;
