import React from "react";
import Image from "next/image";
import adminPic from "@/assets/adminProfile.jpg";
import s1 from "@/assets/s1.jpg";
function AdminPost() {
  return (
    <div className="dashboard-box-shadow bg-white p-6 flex flex-col gap-y-4  rounded-lg">
      <div className="flex items-center gap-x-3 ">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image src={adminPic} width={400} height={400} alt="adninpuc" />
        </div>
        <div>
          <p>امیرحسین کیوانی </p>
          <p>۱سال پیش</p>
        </div>
      </div>
      <p>
        Nu kek vuzkibsu mooruno ejepogojo uzjon gag fa ezik disan he nah. Wij wo
        pevhij tumbug rohsa ahpi ujisapse lo vap labkez eddu suk. Nu kek
        vuzkibsu mooruno ejepogojo uzjon gag fa ezik disan he nah. Wij wo pevhij
        tumbug rohsa ahpi ujisapse lo vap labkez eddu suk. Nu kek vuzkibsu
        mooruno ejepogojo uzjon gag fa ezik disan he nah. Wij wo pevhij tumbug
        rohsa ahpi ujisapse lo vap labkez eddu suk.
      </p>
      <div className="w-[800px] mx-auto">
        <Image width={1000} height={1000} src={s1} alt="postPic" />
      </div>
      <p>
        Nu kek vuzkibsu mooruno ejepogojo uzjon gag fa ezik disan he nah. Wij wo
        pevhij tumbug rohsa ahpi ujisapse lo vap labkez eddu suk. Nu kek
        vuzkibsu mooruno ejepogojo uzjon gag fa ezik disan he nah. Wij wo pevhij
        tumbug rohsa ahpi ujisapse lo vap labkez eddu suk. Nu kek vuzkibsu
        mooruno ejepogojo uzjon gag fa ezik disan he nah. Wij wo pevhij tumbug
        rohsa ahpi ujisapse lo vap labkez eddu suk.
      </p>
    </div>
  );
}

export default AdminPost;
