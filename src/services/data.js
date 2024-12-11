import { toStringCookies } from "@/utils/toStringCookies";
import { cookies } from "next/headers";
import { getAllPosts } from "./postServices";
import { getAllComments } from "./commentService";
import { getAllUsers } from "./authServices";

export async function fetchCardData() {
  const cookieStore = cookies();
  const options = toStringCookies(cookieStore);

  try {
    const data = await Promise.all([
      getAllPosts(),
      getAllComments(options),
      getAllUsers(options),
    ]);

    const numOfUsers = Number(data[2].users.length ?? "0");
    const numOfComments = Number(data[1].commentsCount ?? "0");
    const numOfPosts = Number(data[0].posts.length ?? "0");

    return { numOfUsers, numOfComments, numOfPosts };
  } catch (err) {
    throw new Error("خطا در بارگذاری اطلاعات!!!");
  }
}
