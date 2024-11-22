import Avatar from "@/components/Avatar";
import CoverImage from "@/components/CoverImage";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const PostList = async () => {
  const {
    data: { data },
  } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);

  return (
    <>
      {data.posts.map((p) => {
        return (
          <article
            className="bg-secondary-200 col-span-4 rounded-md"
            key={p._id}
          >
            <CoverImage {...p}/>
            <div className="p-4">
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
          </article>
        );
      })}
    </>
  );
};

export default PostList;
