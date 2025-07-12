import moment from "moment-jalaali";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogBox({ mag }) {
  moment.loadPersian({ dialect: "persian-modern" });
  const isoDate = mag.updatedAt;
  const jalaliDate = moment(isoDate).format("jDD / jMMMM / jYYYY");
  return (
    <Link
      className="flex gap-x-2 items-center border border-gray-200 dark:border-green-100 rounded-lg pr-3"
      href={mag.link}
    >
      <div className="w-36 h-30 flex items-center justify-center ">
        <Image src={mag.mainImage} width={500} height={500} alt={mag.title} />
      </div>
      <div>
        <p>{mag.title}</p>
        <p>{jalaliDate}</p>
      </div>
    </Link>
  );
}

export default BlogBox;
