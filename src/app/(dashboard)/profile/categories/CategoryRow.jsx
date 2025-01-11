import Table from "@/ui/Table";
import toLocalDate from "@/utils/toLocalDate";
import { toPersianDigits } from "@/utils/toPersianDigits";

const CategoryRow = ({ category, index }) => {
  const { title, englishTitle, slug, createdAt } = category;

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{title}</td>
      <td>{englishTitle}</td>
      <td>{slug}</td>
      <td>{toLocalDate(createdAt)}</td>
      <td>
        عملیات
      </td>
    </Table.Row>
  );
};

export default CategoryRow;
