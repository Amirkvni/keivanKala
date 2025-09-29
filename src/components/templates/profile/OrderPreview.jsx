import moment from "moment-jalaali";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaCaretLeft } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { RiFilePaperLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { slugify } from "@/utils/slugify";
import { priceFormatter } from "@/utils/priceFormatter";
moment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

function OrderPreview({ orderDate, status, products, _id, payment }) {
  const formatted = moment(orderDate).format("jD jMMMM jYYYY");
  const statusMap = {
    pending: {
      icon: <CiCircleCheck />,
      label: "جاری",
      className: "text-gray-700 dark:text-gray-400",
    },
    delivered: {
      icon: <CiCircleCheck />,
      label: "تحویل شده",
      className: "text-green-700",
    },
    canceled: {
      icon: <MdOutlineCancel />,
      label: "لغو شده",
      className: "text-red-700",
    },
    returned: {
      icon: <TbTruckReturn />,
      label: "مرجوع شده",
      className: "text-gray-700 dark:text-gray-400",
    },
  };
  return (
    <div className="border border-gray-400 rounded-lg p-2 mx-1 2xl:m-0 flex flex-col gap-y-3 dark:border-green-300 text-sm">
      <div className="flex justify-between items-center text-green-400 text-lg 2xl:text-base">
        <div className="flex gap-x-2 items-center ">
          <span
            className={`flex gap-x-2 items-center text-sm 2xl:text-base ${statusMap[status].className}`}
          >
            {statusMap[status].icon}
            {statusMap[status].label}
          </span>
        </div>
        <FaCaretLeft />
      </div>
      <div className="flex gap-x-3 2xl:text-base text-[10px]">
        <div>
          <span>{formatted}</span>
        </div>
        <div className="flex items-center gap-x-1">
          <span>کد سفارش :</span>
          <span>#{_id.slice(0, 6)}</span>
        </div>
        <div className="flex items-center gap-x-1">
          <span>مبلغ :</span>
          <span>{priceFormatter(payment.paid)}</span>
        </div>
      </div>
      <div className="flex gap-x-3 flex-wrap gap-3">
        {products.map((product) => (
          <Link
            href={`/product/${slugify(product.englishFullName)}`}
            className="w-16 h-16 2xl:w-20 2xl:h-20 border px-1 rounded-2xl border-gray-300"
            key={product._id}
          >
            <Image
              width={500}
              height={500}
              src={product.mainImage}
              alt={product.englishFullName}
              loading="lazy"
            />
          </Link>
        ))}
      </div>
      <div>
        <Link
          href={`/profile/orders/${_id}`}
          className="flex gap-x-1 items-center mr-auto w-fit text-xs 2xl:text-base hover:text-green-500"
        >
          <span>مشاهده فاکتور</span>
          <RiFilePaperLine />
        </Link>
      </div>
    </div>
  );
}

export default OrderPreview;
