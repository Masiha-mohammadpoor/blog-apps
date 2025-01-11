import Spinner from "@/ui/Spinner";
import { Suspense } from "react";
import UserTable from "./UserTable";

const Users = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-semibold col-span-1">کاربران</h1>
        <div className="col-span-1 flex lg:justify-end"></div>
      </div>
      <Suspense fallback={<Spinner />}>
        <UserTable />
      </Suspense>
    </div>
  );
};

export default Users;
