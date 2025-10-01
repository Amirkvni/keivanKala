import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function AddPermission({ setAction }) {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/permissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    if (res.status === 201) {
      Swal.fire({
        title: "موفقیت",
        text: "مجوز با موفقیت اضافه شد",
        icon: "success",
        timer: 1500,
      }).then(() => {
        setAction({
          mode: "",
        });
        router.refresh();
      });
    } else {
      alert("خطا");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-200">
      <div className="bg-white w-96 p-5 rounded-xl shadow-lg transform transition-all duration-300 scale-100 opacity-100">
        <h2 className="text-lg font-bold mb-4">افزودن مجوز </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="flex flex-col">
            <span className="text-sm text-gray-600">نام مجوز</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="مثلاً مدیریت کاربران"
              className="border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
            />
          </label>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
              onClick={() => setAction({ mode: "" })}
            >
              انصراف
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              ایجاد
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPermission;
