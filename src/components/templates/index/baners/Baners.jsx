import React from "react";
import categoryRightImage from "@/../public/images/category-right.jpg";
import categoryLefyImage from "@/../public/images/category-left.jpg";
import Image from "next/image";
export default function Banners() {
  return (
    <div className="p-2.5  my-4 flex flex-col gap-y-2 sm:flex-row container mx-auto gap-x-6  [&>div]:rounded-lg [&>div]:overflow-hidden [&>div>img]:w-full [&>div>img]:h-full  sm:[&>div]:w-1/2 [&>div]:w-full sm:[&>div]:h-[200px] [&>div]:h-[150px] xl:[&>div]:h-[250px]  	">
      <div>
        <Image
          src={categoryRightImage}
          width={500}
          height={500}
          alt="categoryRightImage"
        />
      </div>
      <div>
        <Image
          src={categoryLefyImage}
          width={500}
          height={500}
          alt="categoryLefyImage"
        />
      </div>
    </div>
  );
}
