"use client";
import React, { useState } from "react";
import PermissionsList from "@/components/templates/dashboard/all-permissions/PermissionsList";
import EditPermission from "./EditPermission";
import AddPermission from "./AddPermission";

function Permissions() {
  const [action, setAction] = useState("");
  return (
    <div className="relative w-full h-screen">
      <PermissionsList setAction={setAction} />
      {action === "edit" ? (
        <EditPermission setAction={setAction} />
      ) : action === "add" ? (
        <AddPermission setAction={setAction} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Permissions;
