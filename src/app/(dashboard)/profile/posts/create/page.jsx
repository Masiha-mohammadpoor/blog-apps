import Breadcrumbs from "@/ui/BreadCrumbs";
import CreatePostForm from "./_/CreatePostForm";

const CreatePost = () => {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پست ها", href: "/profile/posts" },
          { label: "ایجاد پست", href: "/profile/posts/create" },
        ]}
      />
      <CreatePostForm/>
    </div>
  );
};

export default CreatePost;
