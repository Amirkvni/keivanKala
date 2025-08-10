import LoginForm from "@/components/templates/signin/LoginForm";
import { authUser } from "@/utils/serverHelpers";
import { redirect } from "next/navigation";

export default async function page() {
  const user = await authUser();

  if (user?.name?.role === "ADMIN") {
    redirect("/dashboard");
  }

  if (user?.name?.role === "USER") {
    redirect("/profile");
  }
  return <LoginForm />;
}
