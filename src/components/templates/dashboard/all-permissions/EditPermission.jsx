import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

function EditPermission({ setAction, permissionID, permissionName }) {
  const router = useRouter();
  const [perName, setPername] = useState(permissionName);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (perName !== permissionName && perName.length !== 0) {
      try {
        const res = await fetch(`/api/permissions/${permissionID}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: perName }),
        });
        const data = await res.json();
        if (res.ok) {
          Swal.fire("مجوز با موفقیت ویرایش شد")
            .then(() => {
              router.refresh();
            })
            .then(() => {
              setAction({ mode: "", _id: null, name: "" });
            });
        } else {
          alert(data.error || "خطا در ذخیره مجوز");
        }
      } catch (error) {
        console.error("Error saving per:", error);
        alert("خطای سرور، لطفا دوباره تلاش کنید");
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-200">
      <div className="bg-white w-96 p-5 rounded-xl shadow-lg transform transition-all duration-300 scale-100 opacity-100">
        <h2 className="text-lg font-bold mb-4">ویرایش مجوز</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="flex flex-col">
            <span className="text-sm text-gray-600">نام مجوز</span>
            <input
              type="text"
              placeholder="مثلاً مدیریت کاربران"
              className="border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
              value={perName}
              onChange={(e) => setPername(e.target.value)}
            />
          </label>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
              onClick={() => setAction("")}
            >
              انصراف
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPermission;
