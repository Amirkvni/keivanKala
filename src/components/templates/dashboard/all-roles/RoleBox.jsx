import React from "react";
import Image from "next/image";
import imagepic from "@/assets/adminProfile.jpg";
import { FaRegEdit } from "react-icons/fa";

function RoleBox({ role }) {
  const users = [
    { name: "علی رضایی", avatar: "/avatars/ali.jpg" },
    { name: "مینا مرادی", avatar: "/avatars/mina.jpg" },
    { name: "سعید کاظمی", avatar: "/avatars/saeed.jpg" },
    { name: "نگار احمدی", avatar: "/avatars/negar.jpg" },
  ];
  return (
    <div className="dashboard-box-shadow">
      <div>
        <span className="text-gray-600 text-sm">۴ کاربر</span>
        <div className="flex items-center">
          {users.map((user, index) => (
            <div
              key={index}
              className="group relative z-10"
              style={{ zIndex: users.length - index }}
            >
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {user.name}
              </div>

              {/* Avatar */}
              <Image
                src={imagepic}
                width={400}
                height={400}
                alt={user.name}
                className="w-8 h-8 rounded-full  -ml-3 transition-transform duration-300 group-hover:-translate-y-1"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-lg">
        <span className="font-bold  ">{role}</span>
        <FaRegEdit className="hover:text-green-500 cursor-pointer" />
      </div>
    </div>
  );
}

export default RoleBox;
