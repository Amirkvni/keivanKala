import DashboardUsers from "@/components/templates/dashboard/all-users/DashboardUsers";
import UserModel from "@/models/User";
export default async function page() {
  const users = await UserModel.find(
    {},
    "firstname lastname email phone  birthday accountStatus createdAt lastLogin"
  ).populate("role", "name");

  return <DashboardUsers users={JSON.parse(JSON.stringify(users))} />;
}
