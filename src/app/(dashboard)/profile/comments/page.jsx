import { Suspense } from "react";
import CommentTable from "./commentTable";
import Spinner from "@/ui/Spinner";
import Search from "@/ui/Search";

const comments = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-semibold col-span-1">نظرات</h1>
        <div className="col-span-1 flex lg:justify-end"></div>
      </div>
      <Suspense fallback={<Spinner />}>
        <CommentTable />
      </Suspense>
    </div>
  );
};

export default comments;
