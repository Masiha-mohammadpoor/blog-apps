import { Suspense } from "react";
import { CreateCategory } from "./Buttons";
import Spinner from "@/ui/Spinner";
import CategoryTable from "./CategoryTable";

const Categories = async () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-8 text-secondary-700 mb-12">
        <h1 className="text-lg font-semibold">دسته‌بندی‌ها</h1>
        <div>
          <CreateCategory />
        </div>
      </div>
      <Suspense fallback={<Spinner/>}>
        <CategoryTable/>
      </Suspense>
    </div>
  );
};

export default Categories;
