import React from "react";
import WorkHistory from "./WorkHistory";

function AdminAbout({
  fullName,
  email,
  phone,
  nationalcode,
  role,
  birthday,
  education,
  experiences,
  fullAddress,
}) {
  const titles = [
    {
      id: 1,
      title: "نام کامل ",
    },
    {
      id: 2,
      title: "ایمیل",
    },
    {
      id: 3,
      title: "شماره تماس",
    },
    {
      id: 4,
      title: "ادرس کامل",
    },
    {
      id: 5,
      title: "کدملی",
    },
    {
      id: 6,
      title: "تاریخ تولد",
    },
    {
      id: 7,
      title: "تحصیلات",
    },
    {
      id: 8,
      title: "سمت",
    },
  ];
  const descs = [
    {
      id: 1,
      desc: fullName,
    },
    {
      id: 2,
      desc: email,
    },
    {
      id: 3,
      desc: phone,
    },
    {
      id: 4,
      desc: fullAddress,
    },
    {
      id: 5,
      desc: nationalcode,
    },
    {
      id: 6,
      desc: birthday,
    },
    {
      id: 7,
      desc: education,
    },
    {
      id: 8,
      desc:
        role === "SUPERADMIN" ? "مدیر اصلی" : role === "ADMIN" ? "ادمین" : role,
    },
  ];
  return (
    <>
      <div className="bg-white dashboard-box-shadow grid grid-cols-2 w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-y-3 p-3 rounded-lg overflow-hidden">
        <div>
          {titles.map((title) => (
            <span key={title.id}>{title.title} :</span>
          ))}
        </div>
        <div>
          {descs.map((desc) => (
            <span key={desc.id}>{desc.desc}</span>
          ))}
        </div>
      </div>
      <div className="p-3 bg-white flex flex-col gap-y-3 dashboard-box-shadow [&>div]:border-b [&>div]:border-b-gray-200 [&>div]:p-2 rounded-lg overflow-hidden">
        <span>سوابق :</span>
        {experiences.map((exprience) => (
          <WorkHistory key={exprience._id} {...exprience} />
        ))}
      </div>
    </>
  );
}

export default AdminAbout;
