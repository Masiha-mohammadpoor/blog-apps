"use client";
import ButtonIcon from "@/components/ButtonIcon";
import Link from "next/link";
import { HiOutlineTrash , HiOutlinePencilSquare } from "react-icons/hi2";

export const DeletePost = ({id}) => {

  const deleteHandler = () => {
    console.log(id)
  }
  return (
    <ButtonIcon variant="error" onClick={deleteHandler}>
      <HiOutlineTrash/>
    </ButtonIcon>
  );
}
 
export const EditPost = ({id}) => {
  return (
    <Link href={`profile/posts/${id}/edit`}>
    <ButtonIcon variant="primary">
      <HiOutlinePencilSquare/>
    </ButtonIcon>
    </Link>
  );
}
