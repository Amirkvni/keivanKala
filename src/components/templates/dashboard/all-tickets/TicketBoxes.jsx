import React from "react";
import {
  LuTicketCheck,
  LuTicketPlus,
  LuTicketSlash,
  LuTicketX,
} from "react-icons/lu";
function TicketBoxes({
  closedTicketsCount,
  newTicketsCount,
  answeredTicketsCount,
  totalTicketsCount,
}) {
  return (
    <div className="grid grid-cols-4 gap-x-3 [&>div]:flex [&>div]:justify-between [&>div]:items-center  [&>div]:p-4 [&>div]:rounded-lg  [&>div>svg]:text-3xl">
      <div className="bg-green-500 text-green-100   dashboard-box-shadow ">
        <div>
          <p>{newTicketsCount}</p>
          <p>جدید</p>
        </div>
        <LuTicketPlus />
      </div>
      <div className="bg-yellow-500 text-yellow-100   dashboard-box-shadow ">
        <div>
          <p>{answeredTicketsCount}</p>
          <p>پاسخ داده شده</p>
        </div>
        <LuTicketCheck />
      </div>
      <div className="bg-red-500 text-red-100 dashboard-box-shadow ">
        <div>
          <p>{closedTicketsCount}</p>
          <p>بسته شده</p>
        </div>
        <LuTicketX />
      </div>
      <div className="bg-blue-500 text-blue-100  dashboard-box-shadow  ">
        <div>
          <p>{totalTicketsCount}</p>
          <p>مجموع تیکت ها</p>
        </div>
        <LuTicketSlash />
      </div>
    </div>
  );
}

export default TicketBoxes;
