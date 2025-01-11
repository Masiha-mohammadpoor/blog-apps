"use client"
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import { useUsers } from "@/hooks/useUsers";
import UserRow from "./UserRow";
import Spinner from "@/ui/Spinner";

const UserTable = () => {
  const {data , isPending} = useUsers();

  if(isPending) return <Spinner/>;
  if (!data.users.length) return <Empty resourceName="کاربری" />;
  return (
    <Table>
      <Table.Head>
        <th>#</th>
        <th>آواتار</th>
        <th>نام‌کاربری</th>
        <th>ایمیل</th>
        <th>تاریخ‌پیوستن</th>
      </Table.Head>
      <Table.Body>
        {data.users.map((user, index) => {
          return <UserRow key={user._id} user={user} index={index} />;
        })}
      </Table.Body>
    </Table>
  );
};

export default UserTable;
