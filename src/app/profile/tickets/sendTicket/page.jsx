"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function page() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [departments, setDepartments] = useState([]);
  const [subDepartments, setSubDepartments] = useState([]);
  const [departmentID, setDepartmentID] = useState(-1);
  const [subDepartmentID, setSubDepartmentID] = useState(-1);
  const [priority, setPriority] = useState(1);
  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch("/api/departments");
      const data = await res.json();
      console.log(data.departments);

      setDepartments([...data.departments]);
    };
    getDepartments();
  }, []);
  useEffect(() => {
    const getSubDepartments = async () => {
      const res = await fetch(`/api/departments/sub/${departmentID}`);
      console.log(res.status);

      if (res.status === 200) {
        const data = await res.json();

        setSubDepartments([...data]);
      }
    };
    getSubDepartments();
  }, [departmentID]);
  const sendTicket = async () => {
    //validation
    const ticket = {
      title,
      body,
      department: departmentID,
      subDepartment: subDepartmentID,
      priority,
    };
    const res = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });
    if (res.status === 201) {
      Swal.fire({
        title: "تیکت شما با موفقیت ثبت شد !",
        icon: "success",
        confirmButtonText: "مشاهده همه تیکت ها",
      }).then(() => {
        router.push("/profile/tickets");
      });
    }
  };

  return (
    <div className="profile-content-box">
      <div className="text-sm 2xl:text-base flex justify-between items-center">
        <span className="border-b-green-400 pb-2 border-b-3">
          ارسال تیکت جدید
        </span>
        <Link
          href="/profile/tickets"
          className="flex gap-x-2 items-center 2xl:text-base text-sm bg-green-400 p-2 rounded-lg"
        >
          <span>همه تیکت ها</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 [&>div]:flex [&>div]:flex-col [&>div]:gap-2 gap-3 [&>div>select]:border-green-400 [&>div>select]:border [&>div>select]:rounded-sm [&>div>select]:p-1 [&>div>select]:cursor-pointer">
        <div>
          <label>دپارتمان را انتخاب کنید :</label>
          <select onChange={(even) => setDepartmentID(even.target.value)}>
            <option value={-1}>لطفا یک مورد را انتخاب کنید</option>
            {departments.map((department) => (
              <option key={department._id} value={department._id}>
                {department.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>نوع تیکت را انتخاب کنید :</label>
          <select onChange={(e) => setSubDepartmentID(e.target.value)}>
            <option value={-1}>لطفا یک مورد را انتخاب کنید</option>
            {subDepartments.map((subDepartment) => (
              <option key={subDepartment._id} value={subDepartment._id}>
                {subDepartment.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>عنوان تیکت راوارد کنید :</label>
          <input
            type="text"
            className="border outline-none p-1.5 rounded-sm border-green-400"
            placeholder="عنوان ... "
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label>سطح اولیت تیکت را انتخاب کنید :</label>
          <select onChange={(e) => setPriority(e.target.value)}>
            <option value={-1}>لطفا یک مورد را انتخاب کنید</option>
            <option value={1}>کم</option>
            <option value={2}>متوسط </option>
            <option value={3}>زیاد</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <label>محتوای تیکت را وارد کنید :</label>
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          className="outline-none border-green-400 border resize-none rounded-sm p-2"
          rows={12}
        ></textarea>
      </div>
      <button className="bg-green-600 p-2 rounded-lg" onClick={sendTicket}>
        ارسال تیکت
      </button>
    </div>
  );
}
