"use client";

import React, { useEffect, useRef, useState } from "react";

const sampleMessages = [
  {
    _id: "1",
    user: { firstname: "علی", lastname: "احمدی", role: { name: "USER" } },
    body: "سلام، مشکل در پرداخت دارم.",
    createdAt: new Date("2025-08-13T10:00:00"),
  },
  {
    _id: "2",
    user: { firstname: "مدیر", lastname: "سامان", role: { name: "ADMIN" } },
    body: "سلام علی، لطفاً دوباره تلاش کنید.",
    createdAt: new Date("2025-08-13T10:15:00"),
  },
  {
    _id: "3",
    user: { firstname: "علی", lastname: "احمدی", role: { name: "USER" } },
    body: "ممنون، درست شد.",
    createdAt: new Date("2025-08-13T10:30:00"),
  },
  {
    _id: "4",
    user: { firstname: "کاربر2", lastname: "رضایی", role: { name: "USER" } },
    body: "من هم مشکل دارم.",
    createdAt: new Date("2025-08-13T11:00:00"),
  },
  {
    _id: "5",
    user: { firstname: "مدیر", lastname: "سامان", role: { name: "ADMIN" } },
    body: "لطفاً شماره سفارش را ارسال کنید.",
    createdAt: new Date("2025-08-13T11:10:00"),
  },
  {
    _id: "6",
    user: { firstname: "کاربر2", lastname: "رضایی", role: { name: "USER" } },
    body: "این شماره سفارش من است.",
    createdAt: new Date("2025-08-13T11:20:00"),
  },
  {
    _id: "7",
    user: { firstname: "مدیر", lastname: "سامان", role: { name: "ADMIN" } },
    body: "مشکل بررسی شد و رفع شد.",
    createdAt: new Date("2025-08-13T11:30:00"),
  },
  {
    _id: "8",
    user: { firstname: "علی", lastname: "احمدی", role: { name: "USER" } },
    body: "ممنون از پیگیری شما.",
    createdAt: new Date("2025-08-13T11:40:00"),
  },
  {
    _id: "9",
    user: { firstname: "کاربر3", lastname: "حسینی", role: { name: "USER" } },
    body: "تیکت جدید دارم.",
    createdAt: new Date("2025-08-13T12:00:00"),
  },
  {
    _id: "10",
    user: { firstname: "مدیر", lastname: "سامان", role: { name: "ADMIN" } },
    body: "لطفاً توضیحات کامل بدهید.",
    createdAt: new Date("2025-08-13T12:10:00"),
  },
  {
    _id: "11",
    user: { firstname: "کاربر3", lastname: "حسینی", role: { name: "USER" } },
    body: "مشکل در ثبت نام دارم.",
    createdAt: new Date("2025-08-13T12:20:00"),
  },
  {
    _id: "12",
    user: { firstname: "مدیر", lastname: "سامان", role: { name: "ADMIN" } },
    body: "لطفاً اسکرین‌شات بفرستید.",
    createdAt: new Date("2025-08-13T12:30:00"),
  },
  {
    _id: "13",
    user: { firstname: "کاربر3", lastname: "حسینی", role: { name: "USER" } },
    body: "فرستادم.",
    createdAt: new Date("2025-08-13T12:40:00"),
  },
  {
    _id: "14",
    user: { firstname: "مدیر", lastname: "سامان", role: { name: "ADMIN" } },
    body: "مشکل رفع شد.",
    createdAt: new Date("2025-08-13T12:50:00"),
  },
  {
    _id: "15",
    user: { firstname: "کاربر4", lastname: "موسوی", role: { name: "USER" } },
    body: "چطور می‌توانم سفارش را لغو کنم؟",
    createdAt: new Date("2025-08-13T13:00:00"),
  },
  {
    _id: "16",
    user: { firstname: "مدیر", lastname: "سامان", role: { name: "ADMIN" } },
    body: "وارد بخش سفارش‌ها شوید و گزینه لغو را بزنید.",
    createdAt: new Date("2025-08-13T13:10:00"),
  },
  {
    _id: "17",
    user: { firstname: "کاربر4", lastname: "موسوی", role: { name: "USER" } },
    body: "ممنون، انجام شد.",
    createdAt: new Date("2025-08-13T13:20:00"),
  },
  {
    _id: "18",
    user: { firstname: "کاربر5", lastname: "کاظمی", role: { name: "USER" } },
    body: "سلام، سوالی درباره محصول دارم.",
    createdAt: new Date("2025-08-13T13:30:00"),
  },
  {
    _id: "19",
    user: { firstname: "مدیر", lastname: "سامان", role: { name: "ADMIN" } },
    body: "در خدمتم، بفرمایید.",
    createdAt: new Date("2025-08-13T13:40:00"),
  },
  {
    _id: "20",
    user: { firstname: "کاربر5", lastname: "کاظمی", role: { name: "USER" } },
    body: "می‌خوام رنگ محصول را تغییر دهم.",
    createdAt: new Date("2025-08-13T13:50:00"),
  },
];

function Answer({ type, message, user, createdAt }) {
  return (
    <div
      className={`flex ${
        type === "admin" ? "justify-start" : "justify-end"
      } mb-2`}
    >
      <div
        className={`p-3 rounded-lg max-w-xs break-words ${
          type === "admin"
            ? "bg-gray-200 text-gray-800"
            : "bg-blue-500 text-white"
        }`}
      >
        <div className="text-xs mb-1 font-semibold">
          {user.firstname} {user.lastname} ({user.role.name})
        </div>
        <div>{message}</div>
        <div className="text-right text-xs mt-1 text-gray-500">
          {new Date(createdAt).toLocaleString("fa-IR")}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [messages, setMessages] = useState(sampleMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const user = {
      firstname: "مدیر",
      lastname: "سامان",
      role: { name: "ADMIN" },
    }; // پیام جدید از مدیر
    const newMsg = {
      _id: Date.now().toString(),
      user,
      body: newMessage,
      createdAt: new Date(),
    };
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="p-8">
      {" "}
      <div className=" max-w-xl mx-auto">
        <h1 className="text-xl font-bold mb-4">تیکت: مشکل پرداخت</h1>
        <div className="border rounded-lg p-4 mb-4 h-[700px] overflow-y-auto flex flex-col gap-2">
          {messages.map((msg) => (
            <Answer
              key={msg._id}
              type={msg.user.role.name === "ADMIN" ? "admin" : "user"}
              message={msg.body}
              user={msg.user}
              createdAt={msg.createdAt}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="پیام خود را بنویسید..."
            className="flex-1 border rounded-lg px-3 py-2 outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
}
