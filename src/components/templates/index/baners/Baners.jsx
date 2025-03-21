import React from "react";
import categoryRightImage from "@/../public/images/category-right.jpg";
import categoryLefyImage from "@/../public/images/category-left.jpg";
import Image from "next/image";
export default function Banners() {
  return (
    <div className="p-2.5  my-4 flex flex-col gap-y-2 xl:flex-row container mx-auto gap-x-6  [&>div]:rounded-lg [&>div]:overflow-hidden [&>div>img]:w-full [&>div>img]:h-full  xl:[&>div]:w-1/2 [&>div]:w-full h-[270px] [&>div]:h-[150px] xl:[&>div]:h-[250px]  	">
      <div>
        <Image
          src="https://ik.imagekit.io/bflkztneat/9d3337e292fa1fa903de68cd7b5eba61de14b532_1742121551.webp?updatedAt=1742559900768"
          width={5000}
          height={5000}
          alt="categoryRightImage"
        />
      </div>
      <div>
        <Image
          src="https://ik.imagekit.io/bflkztneat/1f67f33b2ff68d0622713b0f2f503d0159dadceb_1742121917.webp?updatedAt=1742559900749"
          width={5000}
          height={5000}
          alt="categoryLefyImage"
        />
      </div>
    </div>
  );
}
