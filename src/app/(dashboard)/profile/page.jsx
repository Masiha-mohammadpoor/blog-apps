import { fetchCardData } from "@/services/data";
import { Card } from "@/ui/Card";

const Profile = async () => {
  const { numOfComments, numOfPosts, numOfUsers } = await fetchCardData();
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card title="کاربران" value={numOfUsers} type="users" />
        <Card title="پست ها" value={numOfPosts} type="posts" />
        <Card title="نظرات" value={numOfComments} type="comments" />
      </div>
    </div>
  );
};

export default Profile;
