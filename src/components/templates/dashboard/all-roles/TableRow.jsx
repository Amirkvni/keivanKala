import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegChessKing } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
function TableRow({
  _id,
  status,
  permissions,
  name,
  createdAt,
  setAction,
  setModalState,
}) {
  console.log(_id);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(`/api/role/${_id}`);
      const data = await res.json();

      if (res.status === 200) {
        setUsers(data.users);
      }
    };
    getUsers();
  }, []);

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
      <td>{users.length}</td>
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
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-sm">
              {permissions.length - 3} بیشتر
            </span>
          )}
        </div>
      </td>
      <td>{new Date(createdAt).toLocaleDateString("fa-IR")}</td>
      <td>
        {name === "SUPERADMIN" ? "همیشه فعال" : status ? "فعال" : "غیرفعال"}
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
              // onClick={() => setAction("showRole")}
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
            <MdDeleteOutline className="hover:text-red-700" />
          </div>
        )}
      </td>
    </tr>
  );
}

export default TableRow;
