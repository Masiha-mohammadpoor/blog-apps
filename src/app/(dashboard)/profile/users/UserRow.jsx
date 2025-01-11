import Avatar from "@/components/Avatar";
import Table from "@/ui/Table";
import toLocalDate from "@/utils/toLocalDate";
import { toPersianDigits } from "@/utils/toPersianDigits";

const UserRow = ({ user, index }) => {
  const { name, email, createdAt, avatarUrl } = user;

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>
        <Avatar height={30} width={30} alt={name || "-"} src={avatarUrl} />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{toLocalDate(createdAt)}</td>
    </Table.Row>
  );
};

export default UserRow;
