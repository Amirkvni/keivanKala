import React from "react";
import WorkHistory from "./WorkHistory";

function AdminAbout() {
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
      desc: "پریسا توکلی",
    },
    {
      id: 2,
      desc: "tavakooli@gmail.com",
    },
    {
      id: 3,
      desc: "09123456789",
    },
    {
      id: 4,
      desc: "میدان یامنی، پلاستیک، تهران",
    },
    {
      id: 5,
      desc: "4124124124",
    },
    {
      id: 6,
      desc: "1382/1/15",
    },
    {
      id: 7,
      desc: "کارشناسی ارشد طراحی تعاملی از دانشگاه هنر تهران",
    },
    {
      id: 8,
      desc: "مدیراصلی",
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
        <WorkHistory />
        <WorkHistory />
        <WorkHistory />
      </div>
    </>
  );
}

export default AdminAbout;
