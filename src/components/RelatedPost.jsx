import Link from "next/link";
import CoverImage from "./CoverImage";
import Avatar from "./Avatar";

const RelatedPost = ({ post }) => {
  return (
    <article className="bg-secondary-200 col-span-4 rounded-md" key={post._id}>
      <CoverImage {...post} />
      <div className="my-2 px-4">
        <Link href={`blogs/${post.slug}`}>
          <p className="text-sm font-semibold">{post.title}</p>
        </Link>
      </div>
      <div className="px-4 my-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <Avatar src={post.author.avatarUrl} alt={post.author.name} />
            <p className="text-sm text-secondary-600">{post.author.name}</p>
          </div>
          <div>
            <p className="text-xs text-secondary-500">{post.category.title}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RelatedPost;
