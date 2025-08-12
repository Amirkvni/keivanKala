import Roles from "@/components/templates/dashboard/all-roles/Roles";
import React from "react";
import Permission from "@/models/Permission";
import RoleModel from "@/models/Role";
export default async function Page() {
  const allpermissions = await Permission.find({}, "_id name ");
  const allRoles = await RoleModel.find({}).populate("permissions", "name");
  return (
    <Roles
      permissions={JSON.parse(JSON.stringify(allpermissions))}
      allRoles={JSON.parse(JSON.stringify(allRoles))}
    />
  );
}
