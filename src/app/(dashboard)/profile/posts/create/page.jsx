import Breadcrumbs from "@/ui/BreadCrumbs";

const CreatePost = () => {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پست ها", href: "/profile/posts" },
          { label: "ایجاد پست", href: "/profile/posts/create" },
        ]}
      />
    </div>
  );
};

export default CreatePost;
