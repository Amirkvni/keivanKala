import React from "react";

function AnswerBox({ type, message, user, createdAt }) {
  return (
    <div
      className={`flex ${
        type === "ADMIN" || type === "SUPERADMIN"
          ? "justify-start"
          : "justify-end"
      } mb-2`}
    >
      <div
        className={`p-3 rounded-lg max-w-xs break-words ${
          type === "ADMIN" || type === "SUPERADMIN"
            ? "bg-gray-500 text-white"
            : "bg-green-700 text-white"
        }`}
      >
        <div className="text-xs mb-1 font-semibold">
          {user.firstname} {user.lastname} (
          {user.role.name === "ADMIN"
            ? "ادمین"
            : user.role.name === "SUPERADMIN"
            ? "سوپر ادمین"
            : user.role.name === "AUTHOR"
            ? "نویسنده"
            : user.role.name === "USER"
            ? "کاربر معمولی"
            : user.role.name === "SUPPORTER"
            ? "پشتیبان"
            : user.role.name}
          )
        </div>
        <div>{message}</div>
        <div className="text-right text-xs mt-1 text-white">
          {new Date(createdAt).toLocaleString("fa-IR")}
        </div>
      </div>
    </div>
  );
}

export default AnswerBox;
