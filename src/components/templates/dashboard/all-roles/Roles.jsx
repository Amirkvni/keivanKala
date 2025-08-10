"use client";
import React, { useState } from "react";
import RolesList from "./RolesList";
import RoleBoxes from "./RoleBoxes";
import EditPermission from "../all-permissions/EditPermission";
import AddRole from "./AddRole";
function Roles({ users, permissions }) {
  const [action, setAction] = useState("");
  return (
    <div className="p-12 relative w-full h-screen">
      <RoleBoxes setAction={setAction} />
      <RolesList setAction={setAction} />
      {action === "edit" ? (
        <EditPermission setAction={setAction} />
      ) : action === "addRole" ? (
        <AddRole
          setAction={setAction}
          users={users}
          permissions={permissions}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Roles;
