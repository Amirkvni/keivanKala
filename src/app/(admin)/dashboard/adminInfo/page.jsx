import Image from "next/image";
import React from "react";
import adminPic from "@/assets/adminProfile.jpg";
function page() {
  return (
    <div className="p-12">
      <div>پروفایل شما </div>

      <div className=" gap-x-6 [&>div]:rounded-sm  [&>div]: mt-6 flex">
        <div className="w-[500px]  flex flex-col items-center gap-y-4  bg-white p-3">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image src={adminPic} width={500} height={500} alt="adminPic" />
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <span className="text-xl">پریسا توکلی</span>
            <span className="text-sm">توسعه دهنده فرانت اند</span>
            <span className="text-sm">ایران، تهران</span>
          </div>

          <div className="text-sm text-gray-600 ">
            <p>بیوگرافی</p>
            <p className="mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus nihil suscipit iure. Quae eum voluptates doloremque
              dolorum facilis rerum ipsa adipisci iste pariatur, mollitia ex ab
              animi magni sequi sunt. Labore assumenda at amet minima saepe
              laboriosam, incidunt odit fugit, facilis officiis aliquid nihil,
              repellat recusandae asperiores. Eaque reprehenderit cum, error
              enim, vel itaque unde eos, maxime distinctio quam voluptates!
            </p>
          </div>

          <div className=" flex justify-around w-full [&>div]:text-center">
            <div>
              <p>2</p>
              <p>سال فعالیت</p>
            </div>
            <div>
              <p>2</p>
              <p>بلاگ ها</p>
            </div>
            <div>
              <p>1</p>
              <p>نوشته ها</p>
            </div>
          </div>
        </div>
        <div className="flex-1  flex flex-col gap-y-6">
          <div className="bg-white grid grid-cols-2 w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-y-3 p-3">
            <div>
              <span>نام کامل :</span>
              <span>ایمیل :</span>
              <span>شماره تماس :</span>
              <span>ادرس کامل :</span>
              <span>کدملی :</span>
              <span>تاریخ تولد :</span>
              <span>سمت :</span>
            </div>
            <div>
              <span>پریسا توکلی</span>
              <span>توکلی@gmail.com</span>
              <span>09123456789</span>
              <span>میدان یامنی، پلاستیک، تهران</span>
              <span>4124124124</span>
              <span>1382/1/15</span>
              <span>مدیراصلی </span>
            </div>
          </div>
          <div className="bg-white">kir</div>
        </div>
      </div>
    </div>
  );
}

export default page;
