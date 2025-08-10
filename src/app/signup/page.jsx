import SignUpForm from "@/components/templates/signup/SignUpForm";
import { authUser } from "@/utils/serverHelpers";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const user = await authUser();
  if (user) {
    redirect("/");
  }
  return <SignUpForm />;
}
