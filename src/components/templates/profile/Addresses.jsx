import { IoMdMore } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAddLocationAlt, MdOutlineMessage } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { TiPhoneOutline } from "react-icons/ti";
import Image from "next/image";

function Addresses() {
  return (
    <div className=" flex flex-col gap-y-8 p-3 w-3/4 rounded-sm shadow-2xl">
      <div className="flex justify-between items-center ">
        <span className=" border-b-green-400 pb-2 border-b-3">
          آدرس های شما
        </span>
        <button className="flex gap-x-2 items-center text-white bg-green-400 cursor-pointer rounded-lg p-2  ">
          <span> افزودن آدرس </span>
          <MdOutlineAddLocationAlt />
        </button>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="border rounded-3xl border-gray-200">
          <div className="flex justify-between items-center  p-3">
            <div>
              <p>شاهین شهر خیابان مخابرات فرعی ۹ غربی پلاک ۱۳-واحد ۱۹</p>
              <p className="pt-3">امیرحسین کیوانی</p>
            </div>
            <IoMdMore className="text-2xl cursor-pointer" />
          </div>
          <div className="flex justify-between  items-center  p-3">
            <div>
              <ul className="flex flex-col gap-y-2 [&>li]:flex [&>li]:items-center [&>li]:gap-x-2  ">
                <li>
                  <IoHomeOutline />
                  <span>شاهین شهر</span>
                </li>
                <li>
                  <MdOutlineMessage />
                  <span>۸۳۱۴۷۵۶۷۹۵</span>
                </li>
                <li>
                  <TiPhoneOutline />
                  <span>۰۹۱۶۲۰۳۵۹۸۷</span>
                </li>
                <li>
                  <GoPerson />
                  <span>امیرحسین کیوانی</span>
                </li>
              </ul>
            </div>
            <div className="w-24 h-24  rounded-xl ">
              <Image
                src={
                  "https://ik.imagekit.io/bflkztneat/p6.png?updatedAt=1741102746005"
                }
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="border rounded-3xl border-gray-200">
          <div className="flex justify-between items-center  p-3">
            <div>
              <p>شاهین شهر خیابان مخابرات فرعی ۹ غربی پلاک ۱۳-واحد ۱۹</p>
              <p className="pt-3">امیرحسین کیوانی</p>
            </div>
            <IoMdMore className="text-2xl cursor-pointer" />
          </div>
          <div className="flex justify-between  items-center  p-3">
            <div>
              <ul className="flex flex-col gap-y-2 [&>li]:flex [&>li]:items-center [&>li]:gap-x-2  ">
                <li>
                  <IoHomeOutline />
                  <span>شاهین شهر</span>
                </li>
                <li>
                  <MdOutlineMessage />
                  <span>۸۳۱۴۷۵۶۷۹۵</span>
                </li>
                <li>
                  <TiPhoneOutline />
                  <span>۰۹۱۶۲۰۳۵۹۸۷</span>
                </li>
                <li>
                  <GoPerson />
                  <span>امیرحسین کیوانی</span>
                </li>
              </ul>
            </div>
            <div className="w-24 h-24  rounded-xl ">
              <Image
                src={
                  "https://ik.imagekit.io/bflkztneat/p6.png?updatedAt=1741102746005"
                }
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addresses;
