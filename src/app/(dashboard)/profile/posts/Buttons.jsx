"use client";
import swal from "sweetalert";
import ButtonIcon from "@/components/ButtonIcon";
import Button from "@/ui/Button";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { HiOutlineTrash, HiOutlinePencilSquare } from "react-icons/hi2";
import useDeletePost from "@/hooks/useDeletePost";
import { useRouter } from "next/navigation";

export const CreatePost = () => {
  return (
    <Link href="/profile/posts/create" className="col-span-1">
      <Button className="flex items-center justify-center gap-x-4">
        ایجاد پست <FaPlus />
      </Button>
    </Link>
  );
};

export const DeletePost = ({ id, post: { title } }) => {
  const { deletePost } = useDeletePost();
  const router = useRouter();

  const deleteHandler = () => {
    swal({
      title: `حذف "${title}" ؟`,
      text: `آیا از حذف "${title}" مطمئنید؟`,
      dangerMode: true,
      buttons: {
        confirm: "تایید",
        cancel: "لغو",
      },
    }).then((res) => {
      if (res) {
        deletePost(
          id,
          {
            onSuccess: () => {
              router.refresh();
            },
          }
        );
      }
    });
  };

  return (
    <ButtonIcon variant="error" onClick={deleteHandler}>
      <HiOutlineTrash />
    </ButtonIcon>
  );
};

export const EditPost = ({ id }) => {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="primary">
        <HiOutlinePencilSquare />
      </ButtonIcon>
    </Link>
  );
};
