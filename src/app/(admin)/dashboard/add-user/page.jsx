import CreateUserForm from "@/components/templates/dashboard/CreateUserForm";
import React from "react";

function page() {
  return (
    <div className="p-12">
      <span className="text-xl font-bold">درج کاربر</span>
      <CreateUserForm />
    </div>
  );
}

export default page;
