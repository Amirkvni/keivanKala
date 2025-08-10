import Roles from "@/components/templates/dashboard/all-roles/Roles";
import React from "react";
import UserModel from "@/models/User";
import Permission from "@/models/Permission";
export default async function Page() {
  const allUsers = await UserModel.find({}, "_id email ");
  const allpermissions = await Permission.find({}, "_id name ");
  const allRoles = await UserModel.find(
    {},
    "_id email accountStatus role firstname lastname"
  ).populate({
    path: "role",
    select: "name permissions",
    populate: {
      path: "permissions",
      select: "name",
    },
  });

  return (
    <Roles
      users={JSON.parse(JSON.stringify(allUsers))}
      permissions={JSON.parse(JSON.stringify(allpermissions))}
      allRoles={JSON.parse(JSON.stringify(allRoles))}
    />
  );
}
