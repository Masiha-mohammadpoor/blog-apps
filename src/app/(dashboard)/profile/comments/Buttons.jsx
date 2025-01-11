"use client";
import swal from "sweetalert";
import ButtonIcon from "@/components/ButtonIcon";
import { HiOutlineTrash } from "react-icons/hi2";
import useDeleteComment from "@/hooks/useDeleteComment";

export const DeleteComment = ({ id }) => {
  const { deleteComment } = useDeleteComment();

  const deleteHandler = () => {
    swal({
      title: `حذف نظر`,
      text: `آیا از حذف این نظر مطمئنید؟`,
      dangerMode: true,
      buttons: {
        confirm: "تایید",
        cancel: "لغو",
      },
    }).then((res) => {
      if (res) {
        deleteComment(id);
      }
    });
  };

  return (
    <ButtonIcon variant="error" onClick={deleteHandler}>
      <HiOutlineTrash />
    </ButtonIcon>
  );
};
