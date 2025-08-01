import AdminSocialsUpdate from "@/components/templates/dashboard/editAdmininfo/AdminSocialsUpdate";
import { authUser } from "@/utils/serverHelpers";
import React from "react";
import UserModel from "@/models/User";
export default async function page() {
  const user = await authUser();
  const socials = await UserModel.findOne({ _id: user._id }, "socials -_id");

  return (
    <AdminSocialsUpdate
      socials={JSON.parse(JSON.stringify(socials.socials))}
      userId={JSON.parse(JSON.stringify(user._id))}
    />
  );
}
