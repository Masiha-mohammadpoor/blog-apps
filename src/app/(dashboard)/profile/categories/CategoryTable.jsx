"use client"
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import Spinner from "@/ui/Spinner";
import CategoryRow from "./CategoryRow";
import { useCategories } from "@/hooks/useCategories";

const CategoryTable = ({query =""}) => {
  const {data , isPending} = useCategories();

  if(isPending) return <Spinner/>;
  if (!data.categories.length) return <Empty resourceName="دسته بندی" />;
  return (
    <Table>
      <Table.Head>
        <th>#</th>
        <th>عنوان</th>
        <th>عنوان انگلیسی</th>
        <th>اسلاگ</th>
        <th>تاریخ ایجاد</th>
        <th>عملیات</th>
      </Table.Head>
      <Table.Body>
        {data.categories.map((category, index) => {
          return <CategoryRow key={category._id} category={category} index={index} />;
        })}
      </Table.Body>
    </Table>
  );
};

export default CategoryTable;
