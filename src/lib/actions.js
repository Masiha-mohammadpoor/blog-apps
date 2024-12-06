"use server";

import { addComment } from "@/services/commentService";
import { toStringCookies } from "@/utils/toStringCookies";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(postId , formData) {
  const cookiesStore = await cookies();
  const cookiesString = toStringCookies(cookiesStore);
  const commentData = {
    text: formData.get("text"),
    postId,
    // parentId : null
  };

  try {
    const { message } = await addComment(commentData, cookiesString);
    console.log(message);
  } catch (err) {
    console.log(err?.response?.data?.message);
  }
  revalidatePath("/blogs/[slug]", { type: "static" })
}
