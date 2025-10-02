"use client";
import React, { useState } from "react";
import RolesList from "./RolesList";
import RoleBoxes from "./RoleBoxes";
import RoleFormModal from "../all-permissions/RoleFormModal";
function Roles({ permissions, allRoles }) {
  const [modalState, setModalState] = useState({
    mode: "",
    _id: null,
  });
  return (
    <div className="p-12 relative w-full h-screen">
      <RoleBoxes allRoles={allRoles} setModalState={setModalState} />
      <RolesList allRoles={allRoles} setModalState={setModalState} />
      {modalState.mode && (
        <RoleFormModal
          mode={modalState.mode}
          roleId={modalState._id}
          permissions={permissions}
          setModalState={setModalState}
        />
      )}
    </div>
  );
}

export default Roles;
