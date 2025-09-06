import Answer from "@/components/templates/profile/Answer";
import connectToDB from "@/configs/db";
import React from "react";
import TicketModel from "@/models/Ticket";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
export default async function Page({ params }) {
  const ticketID = params.id;
  connectToDB();
  const mainTicket = await TicketModel.findOne({ _id: ticketID })
    .populate("user", "firstname lastname ")
    .lean();

  const allMessages = await TicketModel.find({
    $or: [{ _id: mainTicket._id }, { mainTicket: mainTicket._id }],
  })
    .populate({
      path: "user",
      select: "firstname lastname role",
      populate: {
        path: "role",
        select: "name",
      },
    })
    .sort({ createdAt: 1 })
    .lean();

  return (
    <div className="profile-content-box">
      <div className="flex justify-between items-center p-1 text-sm">
        <Link href="/profile/tickets" className="flex gap-x-2 items-center">
          <FaArrowRight />
          <span>بازگشت</span>
        </Link>
        {mainTicket.status !== "closed" && (
          <Link
            href={`/profile/tickets/sendTicket?mainTicket=${ticketID}`}
            className="flex gap-x-2 items-center bg-green-700 rounded-lg p-2 text-white"
          >
            افزودن تیکت جدید
          </Link>
        )}
      </div>
      <div className="[&>section]:mt-2">
        {allMessages.map((msg) => (
          <Answer
            key={msg._id}
            type={
              msg.user?.role.name === "ADMIN" ||
              msg.user?.role.name === "SUPERADMIN"
                ? "admin"
                : "user"
            }
            {...msg}
          />
        ))}
      </div>
      {mainTicket.status === "closed" && (
        <div className="border border-red-500 text-red-500 p-3 rounded-lg text-center">
          تیکت بسته شد !!
        </div>
      )}{" "}
      {allMessages.length === 1 && (
        <div className="p-2 text-center bg-red-400 rounded-sm text-white">
          هیچ پاسخی وجود ندارد
        </div>
      )}
    </div>
  );
}
