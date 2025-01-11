import Button from "@/ui/Button";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export const CreateCategory = () => {
  return (
    <Link href="/profile/categories/create" className="col-span-1">
      <Button className="flex items-center justify-center gap-x-4">
        ایجاد دسته‌بندی <FaPlus />
      </Button>
    </Link>
  );
};
