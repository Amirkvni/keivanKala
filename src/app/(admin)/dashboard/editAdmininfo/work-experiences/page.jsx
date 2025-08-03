import AdminExperiencesUpdate from "@/components/templates/dashboard/editAdmininfo/AdminExperiencesUpdate";
import { authUser } from "@/utils/serverHelpers";

export default async function page() {
  const user = await authUser();

  return (
    <AdminExperiencesUpdate
      experiences={JSON.parse(JSON.stringify(user.experiences))}
    />
  );
}
