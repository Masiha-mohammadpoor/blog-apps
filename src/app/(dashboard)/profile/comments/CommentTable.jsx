"use client"
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import { useComments } from "@/hooks/useComments";
import CommentRow from "./CommentRow";

const CommentTable = ({query =""}) => {
  const {data , isPending} = useComments();
  // const { posts } = await getAllPosts(query);

  if(isPending) return "";
  if (!data.comments.length) return <Empty resourceName="نظری" />;
  return (
    <Table>
      <Table.Head>
        <th>#</th>
        <th>متن‌نظر</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>وضعیت</th>
        <th>مشاهده پست</th>
        <th>عملیات</th>
      </Table.Head>
      <Table.Body>
        {data.comments.map((comment, index) => {
          return <CommentRow key={comment._id} comment={comment} index={index} />;
        })}
      </Table.Body>
    </Table>
  );
};

export default CommentTable;
