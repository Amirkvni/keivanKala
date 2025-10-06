import DashboardUsers from "@/components/templates/dashboard/all-users/DashboardUsers";
import UserModel from "@/models/User";
import RoleModel from "@/models/Role";
export default async function page() {
  const otherUsers = await UserModel.find(
    {
      email: {
        $nin: ["admin@gmail.com"],
      },
    },
    "firstname lastname email phone  birthday accountStatus createdAt lastLogin"
  ).populate("role", "name");
  const superAdminrole = await RoleModel.findOne({ name: "SUPERADMIN" });
  // const adminrole = await RoleModel.findOne({ name: "ADMIN" });
  const superAdmin = await UserModel.findOne(
    { role: superAdminrole._id },
    "firstname lastname email phone birthday accountStatus createdAt lastLogin"
  ).populate("role", "name");
  // const admin = await UserModel.findOne(
  //   { role: adminrole._id },
  //   "firstname lastname email phone birthday accountStatus createdAt lastLogin"
  // ).populate("role", "name");
  const users = [superAdmin, ...otherUsers];

  return <DashboardUsers users={JSON.parse(JSON.stringify(users))} />;
}
