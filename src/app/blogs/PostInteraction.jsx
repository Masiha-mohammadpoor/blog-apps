"use client"
import ButtonIcon from "@/components/ButtonIcon";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const PostInteraction = ({comments}) => {

  const clickHandler = () => {
    console.log(hello)
  }

  return (
    <div className="flex items-center gap-x-2">
      <ButtonIcon variant="error" onClick={clickHandler}><FaRegHeart/></ButtonIcon>
      <ButtonIcon variant="primary" onClick={clickHandler}><FaRegBookmark/></ButtonIcon>
      <ButtonIcon variant="secondary" onClick={clickHandler}><FaRegComment/> {toPersianDigits(comments.length)} </ButtonIcon>
    </div>
  );
}
 
export default PostInteraction;