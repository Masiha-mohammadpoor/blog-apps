"use server";

import { addComment } from "@/services/commentService";
import { toStringCookies } from "@/utils/toStringCookies";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(prevState, { formData, postId, parentId }) {
  const cookiesStore = await cookies();
  const cookiesString = toStringCookies(cookiesStore);

  const commentData = {
    text: formData,
    postId,
    parentId,
  };

  try {
    const { message } = await addComment(commentData, cookiesString);
    revalidatePath("/blogs/[slug]", { type: "static" });
    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    return {
      error,
    };
  }
}
