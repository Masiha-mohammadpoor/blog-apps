import PostList from "@/app/blogs/PostList";

const Category = async ({ params }) => {
  const { categorySlug } = params;

  return <PostList query={`categorySlug=${categorySlug}`} />;
};

export default Category;
