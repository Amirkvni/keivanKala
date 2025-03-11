import Image from "next/image";
import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

function RecentVisits() {
  return (
    <div className="  flex flex-col gap-y-8 p-3 w-3/4 rounded-sm shadow-2xl">
      <span className=" border-b-green-400 pb-2 border-b-3 w-fit">
        بازدید‌های اخیر
      </span>
      <div className="flex gap-2 flex-wrap  ">
        <div className="border ">
          <div className="w-32 h-32 mx-auto">
            <Image
              width={500}
              height={500}
              src={
                "https://ik.imagekit.io/bflkztneat/p8.png?updatedAt=1741102746148"
              }
            />
          </div>
          <p>کیف زنانه درسا مدل کیر خر</p>
          <div className="flex justify-between items-center">
            <span>موجود</span>
            <FaRegTrashCan className="text-red-500 tesx-lg" />
          </div>
        </div>
        <div className="border ">
          <div className="w-32 h-32 mx-auto">
            <Image
              width={500}
              height={500}
              src={
                "https://ik.imagekit.io/bflkztneat/p8.png?updatedAt=1741102746148"
              }
            />
          </div>
          <p>کیف زنانه درسا مدل کیر خر</p>
          <div className="flex justify-between items-center">
            <span>موجود</span>
            <FaRegTrashCan className="text-red-500 tesx-lg" />
          </div>
        </div>
        <div className="border ">
          <div className="w-32 h-32 mx-auto">
            <Image
              width={500}
              height={500}
              src={
                "https://ik.imagekit.io/bflkztneat/p8.png?updatedAt=1741102746148"
              }
            />
          </div>
          <p>کیف زنانه درسا مدل کیر خر</p>
          <div className="flex justify-between items-center">
            <span>موجود</span>
            <FaRegTrashCan className="text-red-500 tesx-lg" />
          </div>
        </div>
        <div className="border ">
          <div className="w-32 h-32 mx-auto">
            <Image
              width={500}
              height={500}
              src={
                "https://ik.imagekit.io/bflkztneat/p8.png?updatedAt=1741102746148"
              }
            />
          </div>
          <p>کیف زنانه درسا مدل کیر خر</p>
          <div className="flex justify-between items-center">
            <span>موجود</span>
            <FaRegTrashCan className="text-red-500 tesx-lg" />
          </div>
        </div>
        <div className="border ">
          <div className="w-32 h-32 mx-auto">
            <Image
              width={500}
              height={500}
              src={
                "https://ik.imagekit.io/bflkztneat/p8.png?updatedAt=1741102746148"
              }
            />
          </div>
          <p>کیف زنانه درسا مدل کیر خر</p>
          <div className="flex justify-between items-center">
            <span>موجود</span>
            <FaRegTrashCan className="text-red-500 tesx-lg" />
          </div>
        </div>
        <div className="border ">
          <div className="w-32 h-32 mx-auto">
            <Image
              width={500}
              height={500}
              src={
                "https://ik.imagekit.io/bflkztneat/p8.png?updatedAt=1741102746148"
              }
            />
          </div>
          <p>کیف زنانه درسا مدل کیر خر</p>
          <div className="flex justify-between items-center">
            <span>موجود</span>
            <FaRegTrashCan className="text-red-500 tesx-lg" />
          </div>
        </div>
        <div className="border ">
          <div className="w-32 h-32 mx-auto">
            <Image
              width={500}
              height={500}
              src={
                "https://ik.imagekit.io/bflkztneat/p8.png?updatedAt=1741102746148"
              }
            />
          </div>
          <p>کیف زنانه درسا مدل کیر خر</p>
          <div className="flex justify-between items-center">
            <span>موجود</span>
            <FaRegTrashCan className="text-red-500 tesx-lg" />
          </div>
        </div>
      </div>
      <div>pagination</div>
    </div>
  );
}

export default RecentVisits;
