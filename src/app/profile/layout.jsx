import Header from "@/components/modules/header/Header";
import DashboardLinks from "@/components/templates/profile/DashboardLinks";
import { authUser } from "@/utils/serverHelpers";
import { redirect } from "next/navigation";
export default async function profileLayout({ children }) {
  const user = await authUser();

  if (user.role.name !== "USER") {
    redirect("/dashboard");
  }

  return (
    <>
      <Header isLogin={user ? true : false} />
      <div className="container mx-auto  gap-x-3 mt-[140px] flex">
        <DashboardLinks
          phone={user.phone}
          name={user.firstname + " " + user.lastname}
        />
        {children}
      </div>
    </>
  );
}
