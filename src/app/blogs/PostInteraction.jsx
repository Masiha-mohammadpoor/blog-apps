"use client";
import ButtonIcon from "@/components/ButtonIcon";
import { bookmarkPost, likePost } from "@/services/postServices";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaBookmark, FaHeart, FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const PostInteraction = ({ comments, _id, isLiked, isBookmarked }) => {
  const router = useRouter();

  const likeHandler = async () => {
    try {
      const { message } = await likePost(_id);
      toast.success(message);
      router.refresh();
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const bookmarkHandler = async () => {
    try {
      const { message } = await bookmarkPost(_id);
      toast.success(message);
      router.refresh();
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <ButtonIcon variant="error" onClick={likeHandler}>
        {isLiked ? <FaHeart /> : <FaRegHeart />}
      </ButtonIcon>
      <ButtonIcon variant="primary" onClick={bookmarkHandler}>
        {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
      </ButtonIcon>
      <ButtonIcon variant="secondary">
        <FaRegComment /> {toPersianDigits(comments.length)}{" "}
      </ButtonIcon>
    </div>
  );
};

export default PostInteraction;
