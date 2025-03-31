import React from "react";

function ContactAdresses() {
  return (
    <div className="xl:w-2/5  flex flex-col gap-y-4 p-4 [&>span]:text-green-600 ">
      <p className="font-semibold">آدرس ایمیل :</p>
      <span className=" font-bold">amirhosein8292@gmail.com</span>
      <p className="font-semibold">تلفن پشتیبانی :</p>
      <span className=" font-bold">09162035987</span>
      <p className="font-semibold">آدرس دفتر :</p>
      <span className=" font-bold">ایران-اصفهان</span>
    </div>
  );
}

export default ContactAdresses;
