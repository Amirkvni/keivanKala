import DashBoardHeader from "@/components/templates/dashboard/DashBoardHeader";
import Sidebar from "@/components/templates/dashboard/Sidebar";
import { authUser } from "@/utils/serverHelpers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
  const user = await authUser();
  console.log(user);

  if (user?.role?.name === "USER") {
    redirect("/profile");
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 mr-64 overflow-y-auto scrollbar-custom">
        <DashBoardHeader
          role={user.role.name}
          name={user.firstname}
          lastName={user.lastname}
          profile={user.profileUrl}
        />
        <main>{children}</main>
      </div>
    </div>
  );
}
