import PostList from "@/app/blogs/PostList";
import queryString from "query-string";

const Category = async ({params , searchParams}) => {

  const { categorySlug } = params;
  const queries = `${queryString.stringify(searchParams)}&categorySlug=${categorySlug}`;

  return <PostList query={queries} />;
};

export default Category;
