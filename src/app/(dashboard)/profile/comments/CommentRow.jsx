import { getPostById } from "@/services/postServices";
import Table from "@/ui/Table";
import toLocalDate from "@/utils/toLocalDate";
import { toPersianDigits } from "@/utils/toPersianDigits";
import truncateText from "@/utils/truncateText";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { HiEye } from "react-icons/hi2";

const typeStyle = {
  2: {
    label: "تایید شده",
    className: "badge--success",
  },
  1: {
    label: "رد شده",
    className: "badge--secondary",
  },
};

const CommentRow = ({ comment, index }) => {
  const router = useRouter();
  const {
    content: { text },
    user: { name },
    status,
    answers,
    createdAt,
    post,
    _id,
  } = comment;

  const createPostLink = async (id) => {
    try {
      const { post } = await getPostById(id);
      const slug = post.slug;
      if(slug){
        router.push(`/blogs/${slug}`);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(text, 30)}</td>
      <td>{name}</td>
      <td>
        <span className="flex w-full justify-center ">
        <span className={`badge badge--primary`}>
          {toPersianDigits(answers.length)}
        </span>
        </span>
      </td>
      <td>{toLocalDate(createdAt)}</td>
      <td>
        <span className={`badge ${typeStyle[status].className}`}>
          {typeStyle[status].label}
        </span>
      </td>
      <td>
        <button className="w-full flex justify-center" onClick={() => createPostLink(post)}>
          <HiEye className="w-5 h-5" />
        </button>
      </td>
      {/* <td>
        <span className="flex gap-x-2">
          <DeletePost id={_id} post={post} />
          <EditPost id={_id} />
        </span>
      </td> */}
    </Table.Row>
  );
};

export default CommentRow;
