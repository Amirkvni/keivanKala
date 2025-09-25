import AdminBiography from "@/components/templates/dashboard/adminInfo/AdminBiography";
import AdminProfile from "@/components/templates/dashboard/adminInfo/AdminProfile";
import { authUser } from "@/utils/serverHelpers";
import AddressModel from "@/models/Address";
import BlogModel from "@/models/Blog";
export default async function page() {
  const user = await authUser();
  const userAddress = await AddressModel.findOne(
    { userId: user._id },
    "province city fullAddress  -_id"
  );
  const userPosts = await BlogModel.find({ author: user._id }).populate(
    "author",
    "firstname lastname profileUrl"
  );

  return (
    <div className="p-12">
      <div className="text-xl font-bold">پروفایل شما </div>
      <div className=" gap-x-6 [&>div]:rounded-sm  [&>div]: mt-6 flex">
        <AdminBiography
          fullName={user.firstname + " " + user.lastname}
          job={user.job}
          socials={user.socials}
          biography={user.biography}
          skills={user.skills}
          userAddress={userAddress}
          profileUrl={user.profileUrl}
        />
        <AdminProfile
          fullName={user.firstname + " " + user.lastname}
          email={user.email}
          phone={user.phone}
          nationalcode={user.nationalcode}
          birthday={`${user.birthday.year}/${user.birthday.month}/${user.birthday.day}`}
          role={user.role.name}
          education={user.education}
          experiences={JSON.parse(JSON.stringify(user.experiences))}
          fullAddress={userAddress.fullAddress}
          userPosts={JSON.parse(JSON.stringify(userPosts))}
        />
      </div>
    </div>
  );
}
