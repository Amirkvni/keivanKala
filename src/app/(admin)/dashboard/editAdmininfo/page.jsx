import AdminProfileUpdate from "@/components/templates/dashboard/editAdmininfo/AdminProfileUpdate";
import { authUser } from "@/utils/serverHelpers";
export default async function page() {
  const user = await await authUser();

  return (
    <AdminProfileUpdate
      name={user.firstname}
      family={user.lastname}
      job={user.job}
      email={user.email}
      phone={user.phone}
      nationalcode={user.nationalcode}
      education={user.education}
      biography={user.biography}
      profileUrl={user.profileUrl}
    />
  );
}
