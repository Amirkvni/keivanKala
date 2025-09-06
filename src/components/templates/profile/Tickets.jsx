import Link from "next/link";
import React from "react";
import Ticket from "./Ticket";
import NoContent from "@/components/modules/noContent/NoContent";
import { LuTicketX } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";

function Tickets({ tickets }) {
  return (
    <div className="profile-content-box">
      <div className="text-sm 2xl:text-base flex justify-between items-center">
        <span className="border-b-green-400 pb-2 border-b-3">تیکت های شما</span>
        <Link
          href="/profile/tickets/sendTicket"
          className="2xl:flex gap-x-2 items-center 2xl:text-base text-sm p-2 bg-green-700 rounded-lg text-white hidden"
        >
          ارسال تیکت
        </Link>
        <Link href="/profile" className="flex gap-x-2 items-center 2xl:hidden">
          <FaArrowRight />
          بازگشت
        </Link>
        <Link
          className="2xl:hidden absolute top-[90%] left-9 flex gap-x-2 items-center text-white bg-green-700 cursor-pointer rounded-xl p-3 w-fit "
          href="/profile/tickets/sendTicket"
        >
          ارسال تیکت
        </Link>
      </div>
      <div className="flex flex-col gap-y-2  [&>a]:p-2 [&>a]:rounded-lg [&>a]:flex [&>a]:justify-between [&>a]:items-center [&>a>div]:flex [&>a>div]:flex-col [&>a>div]:gap-y-3">
        {tickets.map((ticket) => (
          <Ticket {...ticket} key={ticket._id} />
        ))}
      </div>
      {tickets.length === 0 && (
        <NoContent title="تیکتی ثبت نکرده اید !" Icon={LuTicketX} />
      )}
    </div>
  );
}

export default Tickets;
