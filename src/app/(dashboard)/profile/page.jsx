import PostTable from "./posts/PostTable";
import { Suspense } from "react";
import CardsWrapper from "./CardsWrapper";
import Spinner from "@/ui/Spinner";

const Profile = async () => {
  return (
    <div>
      <h1 className="text-lg font-semibold">آمار‌ها</h1>
      <Suspense fallback={<Spinner />}>
        <CardsWrapper />
      </Suspense>

      <h1 className="text-lg font-semibold">آخرین پست‌ها</h1>
      <Suspense fallback={<Spinner />}>
        <PostTable query="sort=latest&limit=5" />
      </Suspense>
    </div>
  );
};

export default Profile;
