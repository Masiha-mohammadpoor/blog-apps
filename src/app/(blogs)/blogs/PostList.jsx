import Avatar from "@/components/Avatar";
import CoverImage from "@/components/CoverImage";
import axios from "axios";
import Link from "next/link";
import PostInteraction from "./PostInteraction";
import { getAllPosts } from "@/services/postServices";
import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";
import { toPersianDigits } from "@/utils/toPersianDigits";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";

const PostList = async ({ query , searchParams}) => {
  const search = queryString.stringify(searchParams);
  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);
  const { posts , totalPages} = await getAllPosts(`${query}&${search}`, strCookies);

  if (posts.length <= 0)
    return (
      <p className="col-span-12 flex justify-center">
        پستی با این مشخصات وجود ندارد
      </p>
    );

  return (
    <>
      <p className="col-span-12 py-4 text-primary-800">
        {toPersianDigits(posts.length)} نتیجه برای نشان دادن
      </p>
      <div className="col-span-12 sm:px-8 lg:px-0 grid grid-cols-12 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => {
          return (
            <article
              className="bg-secondary-200 col-span-11 sm:col-span-1 rounded-md shadow-lg overflow-hidden flex flex-col"
              key={p._id}
            >
              {/* Cover Image */}
              <CoverImage {...p} />

              {/* Title */}
              <div className="my-2 px-4">
                <Link href={`blogs/${p.slug}`}>
                  <p className="text-sm font-semibold text-primary-800 hover:text-primary-600 transition-colors">
                    {p.title}
                  </p>
                </Link>
              </div>

              {/* Author and Reading Time */}
              <div className="px-4 my-2 flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <Avatar src={p.author.avatarUrl} alt={p.author.name} />
                  <p className="text-sm text-secondary-600">{p.author.name}</p>
                </div>
                <p className="text-xs text-secondary-500">
                  خواندن : {p.readingTime} دقیقه
                </p>
              </div>

              {/* Interactions */}
              <div className="my-4 px-4 mt-auto">
                <PostInteraction {...p} />
              </div>
            </article>
          );
        })}
      </div>
      <div className="col-span-12 flex justify-center mt-8">
      <Pagination totalPages={totalPages}/>
      </div>
    </>
  );
};

export default PostList;
