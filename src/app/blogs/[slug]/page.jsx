import { getAllPosts, getSinglePost } from "@/services/postServices";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { post } = await getSinglePost(params.slug);

  return {
    title: post.title,
  };
}

export async function generateStaticParams() {
  const {posts} = await getAllPosts()
 
  return posts.slice(0,10).map((post) => ({
    slug: post.slug,
  }))
}

const SinglePostPage = async ({ params }) => {
  const { post } = await getSinglePost(params.slug);

  return (
    <div className="container mt-10 px-40">
      <h1 className="text-lg font-semibold mb-5">{post.title}</h1>
      <p className="text-secondary-600 mb-5">{post.briefText}</p>
      <p className="text-secondary-600 mb-10">{post.text}</p>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.coverImageUrl}
          fill
          alt={post.title}
          className="object-cover object-center rounded-md hover:scale-110 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default SinglePostPage;
