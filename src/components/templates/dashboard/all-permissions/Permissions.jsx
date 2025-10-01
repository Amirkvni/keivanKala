"use client";
import React, { useState } from "react";
import PermissionsList from "@/components/templates/dashboard/all-permissions/PermissionsList";
import EditPermission from "./EditPermission";
import AddPermission from "./AddPermission";

function Permissions({ permissions }) {
  const [action, setAction] = useState({
    mode: "",
    _id: null,
    name: "",
  });
  return (
    <div className="relative w-full h-screen">
      <PermissionsList setAction={setAction} permissions={permissions} />
      {action.mode === "edit" ? (
        <EditPermission
          setAction={setAction}
          permissionID={action._id}
          permissionName={action.name}
        />
      ) : action.mode === "add" ? (
        <AddPermission setAction={setAction} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Permissions;
