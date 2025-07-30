import AdminBiography from "@/components/templates/dashboard/adminInfo/AdminBiography";
import AdminProfile from "@/components/templates/dashboard/adminInfo/AdminProfile";
import { authUser } from "@/utils/serverHelpers";

export default async function page() {
  const user = await authUser();
  console.log(user);

  return (
    <div className="p-12">
      <div className="text-xl font-bold">پروفایل شما </div>
      <div className=" gap-x-6 [&>div]:rounded-sm  [&>div]: mt-6 flex">
        <AdminBiography
          fullName={user.firstname + " " + user.lastname}
          job={user.job}
          socials={user.socials}
          skills={user.skills}
        />
        <AdminProfile
          fullName={user.firstname + " " + user.lastname}
          email={user.email}
          phone={user.phone}
          nationalcode={user.nationalcode}
          birthday={`${user.birthday.year}/${user.birthday.month}/${user.birthday.day}`}
          role={user.role}
          education={user.education}
          experiences={JSON.parse(JSON.stringify(user.experiences))}
        />
      </div>
    </div>
  );
}
