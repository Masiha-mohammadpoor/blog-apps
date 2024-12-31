import { getPostById } from "@/services/postServices";
import CreatePostForm from "../../create/_/CreatePostForm";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/ui/Breadcrumbs";

const CreatePost = async ({params : {postId}}) => {

  const {post} = await getPostById(postId);
  if(!post) {
    notFound();
  }

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پست ها", href: "/profile/posts" },
          { label: "ویرایش پست", href: `/profile/posts/${postId}/dit` },
        ]}
      />
      <CreatePostForm postToEdit={post}/>
    </div>
  );
};

export default CreatePost;
