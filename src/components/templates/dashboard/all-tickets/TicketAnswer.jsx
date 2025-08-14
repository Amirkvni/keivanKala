"use client";

import React, { useEffect, useRef, useState } from "react";
import AnswerBox from "./AnswerBox";
import { IoMdSend } from "react-icons/io";

function TicketAnswer({ allMessages, mainTicket }) {
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
          <div ref={messagesEndRef} />
        </div>
        <div className="flex gap-2 bg-white rounded-lg">
          <button
            onClick={handleSend}
            className=" text-gray-700 text-2xl px-1 py-2 rounded-lg hover:text-green-600 cursor-pointer"
          >
            <IoMdSend />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="پیام خود را بنویسید..."
            className="flex-1  rounded-lg px-1 py-2 outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default TicketAnswer;
