import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

function RoleBox({ roleName, roleID, setModalState }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(`/api/role/${roleID}`);
      const data = await res.json();

      if (res.status === 200) {
        setUsers(data.users);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="dashboard-box-shadow">
      <div>
        <span className="text-gray-600 text-sm">{users.length} کاربر</span>
        <div className="flex items-center">
          {users.map((user, index) => (
            <div
              key={user._id}
              className="group relative z-10"
              style={{ zIndex: users.length - index }}
            >
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {user.firstname + " " + user.lastname}
              </div>
              {user.profileUrl ? (
                <Image
                  src={user?.profileUrl}
                  width={400}
                  height={400}
                  alt={user.firstname}
                  className="w-12 h-12 rounded-full  -ml-3 transition-transform duration-300 group-hover:-translate-y-1"
                />
              ) : (
                <CiUser className="w-7 h-7 rounded-full  -ml-4 transition-transform duration-300 group-hover:-translate-y-1 " />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-lg">
        <span className="font-bold  ">
          {roleName === "SUPERADMIN"
            ? "سوپر ادمین"
            : roleName === "ADMIN"
            ? "ادمین"
            : roleName === "USER"
            ? "کاربر عادی"
            : roleName === "AUTHOR"
            ? "نویسنده"
            : roleName === "SUPPORTER"
            ? "پشتیبان"
            : roleName}
        </span>
        <FaRegEdit
          className="hover:text-green-500 cursor-pointer"
          onClick={() =>
            setModalState({
              mode: "edit",
              _id: roleID,
            })
          }
        />
      </div>
    </div>
  );
}

export default RoleBox;
