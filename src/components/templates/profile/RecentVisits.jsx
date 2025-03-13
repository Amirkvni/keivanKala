import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEyeSlash, FaRegTrashCan } from "react-icons/fa6";

function RecentVisits({ recentVisits }) {
  console.log("recentVisits.length===>", recentVisits.length);

  return (
    <div className="  flex flex-col gap-y-8 p-3 w-3/4 rounded-sm shadow-2xl">
      <span className=" border-b-green-400 pb-2 border-b-3 w-fit">
        بازدید‌های اخیر
      </span>
      <div className="flex gap-2 flex-wrap  ">
        {recentVisits.length > 0 ? (
          recentVisits.map((product) => (
            <div className="border " key={product._id}>
              <div className="w-32 h-32 mx-auto">
                <Link href={`/product/${product.pageName}`}>
                  <Image width={500} height={500} src={product.image} />
                </Link>
              </div>
              <p>{product.productName}</p>
              <div className="flex justify-between items-center">
                <span>{product.price}</span>
                <FaRegTrashCan className="text-red-500 tesx-lg" />
              </div>
              <button>خرید</button>
            </div>
          ))
        ) : (
          <div className="flex  justify-center items-center flex-col gap-y-5 text-3xl mx-auto border p-8 rounded-4xl border-gray-200">
            <FaRegEyeSlash />
            <span>هنوز محصولی را مشاهده نکرده اید</span>
          </div>
        )}
      </div>
      {recentVisits.length > 0 && <div>pagination</div>}
    </div>
  );
}

export default RecentVisits;
