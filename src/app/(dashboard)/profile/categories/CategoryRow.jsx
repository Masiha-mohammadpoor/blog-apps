import Table from "@/ui/Table";
import toLocalDate from "@/utils/toLocalDate";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { DeleteCategory, EditCategory } from "./Buttons";

const CategoryRow = ({ category, index }) => {
  const { title, englishTitle, slug, createdAt, _id } = category;

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{title}</td>
      <td>{englishTitle}</td>
      <td>{slug}</td>
      <td>{toLocalDate(createdAt)}</td>
      <td>
        <span className="flex gap-x-2">
          <DeleteCategory id={_id} category={category} />
          <EditCategory id={_id} />
        </span>
      </td>
    </Table.Row>
  );
};

export default CategoryRow;
