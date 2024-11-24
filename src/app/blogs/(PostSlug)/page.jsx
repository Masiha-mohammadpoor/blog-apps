import Spinner from "@/ui/Spinner";
import axios from "axios";
import { Suspense } from "react";
import PostList from "../PostList";

const BlogsPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <PostList />
    </Suspense>
  );
};

export default BlogsPage;
