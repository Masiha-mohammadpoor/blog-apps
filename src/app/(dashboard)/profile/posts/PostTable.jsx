import { getAllPosts } from "@/services/postServices";
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import PostRow from "./PostRow";

const PostTable = async ({query =""}) => {
  const { posts } = await getAllPosts(query);

  if (!posts.length) return <Empty resourceName="پستی" />;
  return (
    <Table>
      <Table.Head>
        <th>#</th>
        <th>عنوان</th>
        <th>دسته‌بندی</th>
        <th>نویسنده</th>
        <th>تاریخ‌ایجاد</th>
        <th>نوع</th>
        <th>عملیات</th>
      </Table.Head>
      <Table.Body>
        {posts.map((post, index) => {
          return <PostRow key={post._id} post={post} index={index} />;
        })}
      </Table.Body>
    </Table>
  );
};

export default PostTable;
