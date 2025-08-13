import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegChessKing } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";
function TableRow({
  _id,
  status,
  permissions,
  name,
  createdAt,
  setModalState,
}) {
  const [usersCount, setUsersCount] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(`/api/role/${_id}`);
      const data = await res.json();

      if (res.status === 200) {
        setUsersCount(data.users.length);
      }
    };
    getUsers();
  }, []);
  const deleteRole = async (id) => {
    const confirmResult = await Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "نقش حذف خواهد شد و قابل بازگشت نیست!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف کن",
      cancelButtonText: "لغو",
    });

    if (confirmResult.isConfirmed) {
      try {
        const res = await fetch(`/api/role/${id}`, { method: "DELETE" });
        const data = await res.json();

        if (res.ok) {
          await Swal.fire("حذف شد!", data.message, "success");
          router.refresh();
        } else {
          Swal.fire("خطا!", data.message || "خطایی رخ داد", "error");
        }
      } catch (error) {
        Swal.fire("خطا!", "خطای شبکه رخ داد", "error");
      }
    }
  };
  return (
    <tr>
      <td>
        {name === "SUPERADMIN"
          ? "سوپر ادمین"
          : name === "ADMIN"
          ? "ادمین"
          : name === "USER"
          ? "کاربر عادی"
          : name === "AUTHOR"
          ? "نویسنده"
          : name === "SUPPORTER"
          ? "پشتیبان"
          : name}
      </td>
      <td>{usersCount}</td>
      <td>
        <div className="flex gap-x-0.5 items-center justify-center text-xs">
          {permissions.slice(0, 3).map((per) => (
            <span
              className="mr-1 bg-green-100 text-green-700 px-2 py-1 rounded-sm"
              key={per._id}
            >
              {per.name}
            </span>
          ))}
          {permissions.length > 3 && (
            <span
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-sm cursor-pointer"
              onClick={() =>
                setModalState({
                  mode: "view",
                  _id,
                })
              }
            >
              {permissions.length - 3} بیشتر
            </span>
          )}
        </div>
      </td>
      <td>{new Date(createdAt).toLocaleDateString("fa-IR")}</td>
      <td>
        <span
          className={`px-1 py-0.5 rounded-sm text-xs ${
            status ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          }`}
        >
          {name === "SUPERADMIN" ? "همیشه فعال" : status ? "فعال" : "غیرفعال"}
        </span>
      </td>
      <td>
        {name === "SUPERADMIN" ? (
          <FaRegChessKing className="mx-auto" />
        ) : (
          <div className="flex gap-x-1 items-center [&>svg]:cursor-pointer [&>svg]:text-xl justify-center">
            <LuEye
              onClick={() =>
                setModalState({
                  mode: "view",
                  _id,
                })
              }
              className="hover:text-blue-600"
            />
            <FaRegEdit
              className="hover:text-green-600"
              onClick={() =>
                setModalState({
                  mode: "edit",
                  _id,
                })
              }
            />
            <MdDeleteOutline
              className="hover:text-red-700"
              onClick={() => deleteRole(_id)}
            />
          </div>
        )}
      </td>
    </tr>
  );
}

export default TableRow;
