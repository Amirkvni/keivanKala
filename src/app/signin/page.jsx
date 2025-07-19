import LoginForm from "@/components/templates/signin/LoginForm";
import { authUser } from "@/utils/serverHelpers";
import { redirect } from "next/navigation";

import React from "react";

export default async function page() {
  const user = await authUser();
  if (user) {
    redirect("/profile");
  }
  return <LoginForm />;
}
