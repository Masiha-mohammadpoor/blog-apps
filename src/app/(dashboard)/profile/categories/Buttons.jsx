"use client";
import swal from "sweetalert";
import ButtonIcon from "@/components/ButtonIcon";
import useDeleteCategory from "@/hooks/useDeleteCategory";
import Button from "@/ui/Button";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

export const CreateCategory = () => {
  return (
    <Link href="/profile/categories/create" className="col-span-1">
      <Button className="flex items-center justify-center gap-x-4">
        ایجاد دسته‌بندی <FaPlus />
      </Button>
    </Link>
  );
};

export const DeleteCategory = ({ id, category: { title } }) => {
  const { deleteCategory } = useDeleteCategory();

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
        deleteCategory(id);
      }
    });
  };

  return (
    <ButtonIcon variant="error" onClick={deleteHandler}>
      <HiOutlineTrash />
    </ButtonIcon>
  );
};

export const EditCategory = ({ id }) => {
  return (
    <Link href={`/profile/categories/${id}/edit`}>
      <ButtonIcon variant="primary">
        <HiOutlinePencilSquare />
      </ButtonIcon>
    </Link>
  );
};
