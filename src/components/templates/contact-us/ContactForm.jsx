"use client";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";
function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const ticketHandler = async () => {
    const newTicket = { name, phone, email, text };
    let res = await fetch("/api/ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    });
    if (res.status === 201) {
      Swal.fire({
        title: "تیکت شما ثبت شد",
        icon: "success",
      });
      setName("");
      setPhone("");
      setEmail("");
      setText("");
    }
  };
  return (
    <div className="xl:w-3/5 ">
      <p>
        قبل از مطرح کردن هرگونه سوال لطفا بخش
        <Link
          href="/questions"
          className="text-green-400 font-bold border-b-2 border-b-red-400 "
        >
          {" "}
          سوالات متداول{" "}
        </Link>
        را مطالعه فرمایید
      </p>
      <div className="flex flex-col gap-y-4 mt-3  ">
        <div className="flex gap-x-2 [&>input]:w-1/2 [&>input]:outline-none [&>input]:border [&>input]:border-gray-200  [&>input]:p-3 [&>input]:rounded-lg ">
          <input
            placeholder="نام شما"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="شماره تماس شما"
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="ایمیل شما"
            className="w-full outline-none border border-gray-200 p-3 rounded-lg"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <textarea
          type="text"
          placeholder="پیام شما"
          cols="12"
          rows="3"
          className="outline-none border border-gray-200 p-3 rounded-lg resize-none"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button
          className="w-fit bg-green-400 text-white p-2 rounded-lg mr-auto cursor-pointer "
          onClick={ticketHandler}
        >
          ارسال پیام
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
