import AdminSkillsUpdate from "@/components/templates/dashboard/editAdmininfo/AdminSkillsUpdate";
import { authUser } from "@/utils/serverHelpers";
import UserModel from "@/models/User";
export default async function page() {
  const user = await authUser();
  const userSkills = await UserModel.findOne({ _id: user._id }, "skills -_id");

  return (
    <AdminSkillsUpdate
      userSkills={JSON.parse(JSON.stringify(userSkills.skills))}
    />
  );
}
