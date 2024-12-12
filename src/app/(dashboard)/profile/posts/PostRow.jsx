import Table from "@/ui/Table";
import toLocalDate from "@/utils/toLocalDate";
import { toPersianDigits } from "@/utils/toPersianDigits";
import truncateText from "@/utils/truncateText";
import { DeletePost, EditPost } from "./Buttons";

const typeStyle = {
  free: {
    label: "رایگان",
    className: "badge--success",
  },
  premium: {
    label: "پولی",
    className: "badge--secondary",
  },
};

const PostRow = ({ post, index }) => {
  const { title, category, author, createdAt, type , _id} = post;
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{toLocalDate(createdAt)}</td>
      <td>
        <span className={`badge ${typeStyle[type].className}`}>
          {typeStyle[type].label}
        </span>
      </td>
      <td>
        <span className="flex gap-x-2">
        <DeletePost id={_id}/>
        <EditPost id={_id}/>
        </span>
      </td>
    </Table.Row>
  );
};

export default PostRow;
