import React from "react";

import Image from "next/image";
import Link from "next/link";
export default function Banners() {
  return (
    <div className="p-2.5  my-4 flex flex-col gap-y-2 xl:flex-row container mx-auto gap-x-6  [&>a]:rounded-lg [&>a]:overflow-hidden [&>a>img]:w-full [&>a>img]:h-full  xl:[&>a]:w-1/2 [&>a]:w-full h-[270px] [&>a]:h-[150px] xl:[&>a]:h-[250px]  	">
      <Link href="/category-men-shoes">
        <Image
          src="https://ik.imagekit.io/bflkztneat/9d3337e292fa1fa903de68cd7b5eba61de14b532_1742121551.webp?updatedAt=1742559900768"
          width={5000}
          height={5000}
          alt="categoryRightImage"
        />
      </Link>
      <Link href="/category-men-accessories">
        <Image
          src="https://ik.imagekit.io/bflkztneat/1f67f33b2ff68d0622713b0f2f503d0159dadceb_1742121917.webp?updatedAt=1742559900749"
          width={5000}
          height={5000}
          alt="categoryLefyImage"
        />
      </Link>
    </div>
  );
}
