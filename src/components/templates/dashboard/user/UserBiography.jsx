import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fa";
import Image from "next/image";
import DeleteBtn from "./DeleteBtn";
function UserBiography({ user }) {
  dayjs.extend(relativeTime);

  dayjs.locale("fa");
  return (
    <div className="w-[500px] h-[600px] flex flex-col  gap-y-4  bg-white p-3 rounded-lg  overflow-hidden dashboard-box-shadow">
      <div
        className={`w-18 h-18 rounded-full ${
          user.profileUrl && "overflow-hidden"
        }  relative mx-auto border flex justify-center items-center z-1 border-gray-300`}
      >
        {user.profileUrl ? (
          <Image
            src={user.profileUrl}
            alt="userProfile"
            width={50}
            height={50}
            className="w-full h-full"
          />
        ) : (
          <FaRegUser className="text-2xl" />
        )}
        <Link
          href={`/dashboard/edit-user/${user._id}`}
          className="absolute  -top-2 -right-1 text-3xl z-50 hover:text-green-700"
        >
          <TiEdit />
        </Link>
      </div>
      <p className="text-center">
        {user.firstname} {user.lastname}
      </p>
      <div className="[&>div]:flex [&>div]:flex-col  [&>div]:gap-y-2 flex flex-col gap-y-3">
        <div>
          <span>ایمیل</span>
          <span>{user.email}</span>
        </div>
        <div>
          <span>تلفن</span>
          <span>{user.phone}</span>
        </div>
        <div>
          <span>تاریخ تولد</span>
          <span
            className={
              user.birthday.day === null ? "text-xs text-gray-500" : ""
            }
          >
            {user.birthday.day === null
              ? "وارد نشده"
              : `${user.birthday.year}/${user.birthday.month}/${user.birthday.day} `}
          </span>
        </div>
        <div>
          <span>آخرین ورود</span>
          <span>{<td>{dayjs(user.lastLogin).fromNow()}</td>}</span>
        </div>
        <div>
          <span>سوشال مدیا</span>
          {user.socials.length === 0 ? (
            <div className="text-xs text-gray-500"> وارد نشده</div>
          ) : (
            <div className="flex items-center gap-x-3 [&>div]:w-9 [&>div]:h-9 [&>div]:border [&>div]:border-gray-400 [&>div]:flex [&>div]:justify-center [&>div]:items-center  [&>div]:rounded-xl">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          )}
        </div>
        <Link
          className="block text-white rounded-lg p-3  text-center bg-green-600"
          href="/"
        >
          ارسال پیام
        </Link>
        <DeleteBtn userID />
      </div>
    </div>
  );
}

export default UserBiography;
