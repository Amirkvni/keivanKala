import DashboardUsers from "@/components/templates/dashboard/all-users/DashboardUsers";
import UserModel from "@/models/User";
export default async function page() {
  const users = await UserModel.find(
    {},
    "firstname lastname email phone role birthday accountStatus createdAt lastLogin"
  );
  return <DashboardUsers users={JSON.parse(JSON.stringify(users))} />;
}
