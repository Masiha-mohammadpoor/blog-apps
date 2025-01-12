import Breadcrumbs from "@/ui/BreadCrumbs";
import CreateCategoryForm from "./_/CreateCategoryform";

const CreateCategory = () => {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "دسته‌بندی‌ها", href: "/profile/categories" },
          { label: "ایجاد دسته‌بندی", href: "/profile/categories/create" },
        ]}
      />
      <CreateCategoryForm/>
    </div>
  );
};

export default CreateCategory;
