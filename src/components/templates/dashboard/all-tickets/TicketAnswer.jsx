"use client";

import React, { useEffect, useRef, useState } from "react";
import AnswerBox from "./AnswerBox";
import { IoMdSend } from "react-icons/io";
import { MdBlock, MdCancelScheduleSend } from "react-icons/md";
import Swal from "sweetalert2";
import { IoLockOpenOutline } from "react-icons/io5";

function TicketAnswer({ allMessages, mainTicket, ticketID }) {
  const [messages, setMessages] = useState(allMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);
  useEffect(() => {}, []);
  const handleSend = async () => {
    if (!newMessage.trim()) return;
    const newTicket = {
      body: newMessage,
      title: mainTicket.title,
      department: mainTicket.department,
      subDepartment: mainTicket.subDepartment,
      priority: mainTicket.priority,
      mainTicket: mainTicket._id,
    };

    const res = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    });

    if (res.status === 201) {
      location.reload();
    } else {
      alert("خطا در ارسال جواب");
    }
  };
  const handleBlock = async (type) => {
    Swal.fire({
      title:
        type === "unBlock"
          ? "آيا این تیکت باز شود؟"
          : "آیا از بستن این تیکت مطمینید ؟",
      showDenyButton: true,
      confirmButtonText: "بله",
      denyButtonText: "خیر",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`/api/tickets/${ticketID}`, {
          method: "PATCH",
        });
        if (res.status === 200) {
          Swal.fire({
            title: type === "unBlock" ? "تیکت باز شد" : "تیکت بسته شد",
          }).then(() => {
            location.reload();
          });
        }
      }
    });
  };
  return (
    <div className="p-8">
      <div className=" max-w-xl mx-auto">
        <h1 className="text-xl font-bold mb-4">موضوع : {mainTicket.title} </h1>
        <div className=" rounded-lg p-4 mb-4 h-[700px] overflow-y-auto flex flex-col gap-2 bg-white">
          {messages.map((msg) => (
            <AnswerBox
              key={msg._id}
              type={msg.user.role.name}
              message={msg.body}
              user={msg.user}
              createdAt={msg.createdAt}
            />
          ))}
          {mainTicket.status === "closed" && (
            <div className="border border-red-500 text-red-500 p-3 rounded-lg text-center">
              تیکت بسته شد !!
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex justify-between items-center bg-white rounded-lg px-3 py-1.5">
          <div className="flex gap-x-2  w-full">
            {mainTicket.status === "closed" ? (
              <button className=" text-red-400 text-2xl px-1 py-2 rounded-lg hover:text-red-600 cursor-pointer">
                <MdCancelScheduleSend />
              </button>
            ) : (
              <button
                onClick={handleSend}
                className=" text-gray-700 text-2xl px-1 py-2 rounded-lg hover:text-green-600 cursor-pointer"
              >
                <IoMdSend />
              </button>
            )}

            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="پیام خود را بنویسید..."
              className="flex-1  rounded-lg px-1 py-2 outline-none"
            />
          </div>
          {mainTicket.status === "closed" ? (
            <IoLockOpenOutline
              className="text-2xl cursor-pointer text-green-500"
              onClick={() => handleBlock("unBlock")}
            />
          ) : (
            <MdBlock
              className="text-2xl cursor-pointer text-red-500"
              onClick={() => handleBlock("block")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TicketAnswer;
