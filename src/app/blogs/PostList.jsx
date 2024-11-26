import Avatar from "@/components/Avatar";
import CoverImage from "@/components/CoverImage";
import axios from "axios";
import Link from "next/link";
import PostInteraction from "./PostInteraction";
import { getAllPosts } from "@/services/postServices";

const PostList = async () => {

  const {posts} = await getAllPosts();

  return (
    <>
      {posts.map((p) => {
        return (
          <article
            className="bg-secondary-200 col-span-4 rounded-md"
            key={p._id}
          >
            <CoverImage {...p}/>
            <div className="my-2 px-4">
              <Link href={`blogs/${p.slug}`}><p className="text-sm font-semibold">{p.title}</p></Link>
            </div>
            <div className="px-4 my-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <Avatar src={p.author.avatarUrl} alt={p.author.name}/>
                  <p className="text-sm text-secondary-600">{p.author.name}</p>
                </div>
                <div>
                  <p className="text-xs text-secondary-500">خواندن : {p.readingTime} دقیقه</p>
                </div>
              </div>
            </div>
            <div className="my-4 px-4">
              <PostInteraction {...p}/>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default PostList;
