import PersonalInfo from "@/components/templates/profile/PersonalInfo";
import { authUser } from "@/utils/serverHelpers";

export default async function page() {
  const user = await authUser();

  return <PersonalInfo user={JSON.parse(JSON.stringify(user))} />;
}
