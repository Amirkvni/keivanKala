import UserBiography from "@/components/templates/dashboard/user/UserBiography";
import UserProfile from "@/components/templates/dashboard/user/UserProfile";

function page() {
  return (
    <div className="p-12">
      <div className=" gap-x-6 [&>div]:rounded-sm  [&>div]: mt-6 flex">
        <UserBiography />
        <UserProfile />
      </div>
    </div>
  );
}

export default page;
