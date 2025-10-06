import React, { useMemo, useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fa";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Paginations from "../Paginations";
dayjs.extend(relativeTime);
dayjs.locale("fa");
function UsersTable({ allUsers, selected, setSelected }) {
  console.log(allUsers);

  const router = useRouter();
  const [roleFilter, setRoleFilter] = useState("-1");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("-1");
  const usersPerPage = 8;
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, roleFilter]);
  const filteredUsers = useMemo(() => {
    let filtered = [...allUsers];

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (user) =>
          user.email.persianName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (roleFilter !== "-1") {
      filtered = filtered.filter(
        (user) => String(user.role.name) === roleFilter
      );
    }

    if (statusFilter !== "-1") {
      filtered = filtered.filter((user) => user.accountStatus === statusFilter);
    }
    return filtered;
  }, [searchQuery, roleFilter, allUsers, statusFilter]);
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const toggleSelectAll = (e) => {
    setSelected(e.target.checked ? allUsers.map((c) => c._id) : []);
  };
  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };
  const userDeleteHandler = (id) => {
    Swal.fire({
      title: "آیا از حذف کاربر اطمینان دارید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`/api/user/delete/${id}`, {
          method: "DELETE",
        });
        if (res.status === 200) {
          Swal.fire("حذف شد", "", "success").then((result) => {
            location.reload();
          });
        } else {
        }
      }
    });
  };

  return (
    <>
      <div className="my-6 flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
        <input
          type="text"
          placeholder="جستجو"
          className="px-4 py-2 w-40 md:w-52 lg:w-64 rounded-lg border border-gray-300 focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className="px-4 py-2 focus:ring-0 rounded-lg border border-gray-300 bg-white focus:outline-none  cursor-pointer "
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="-1">مرتب سازی وضعیت</option>
          <option value="ban">مسدود شده</option>
          <option value="active">فعال </option>
        </select>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-0  cursor-pointer"
        >
          <option value="-1">مرتب سازی نقش</option>
          <option value="SUPERADMIN">سوپر ادمین</option>
          <option value="ADMIN">مدیر</option>
          <option value="USER">کاربر معمولی </option>
        </select>
      </div>

      <div>
        <table className="w-full text-center border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr className="text-sm text-gray-700 [&>th]:p-3">
              <th>
                <input
                  type="checkbox"
                  onChange={toggleSelectAll}
                  checked={
                    selected.length > 0 && selected.length === allUsers.length
                  }
                />{" "}
              </th>
              <th>نام کامل</th>
              <th>ایمیل </th>
              <th>تلفن</th>
              <th>تاریخ تولد</th>
              <th>نقش </th>
              <th>وضعیت</th>
              <th>تاریخ عضویت </th>
              <th>اخرین ورود</th>
              <th>اقدام</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {currentUsers.length === 0 && (
              <tr>
                <td colSpan="9" className="py-6 text-gray-500">
                  هیچ کاربری پیدا نشد
                </td>
              </tr>
            )}
            {currentUsers.map((user) => (
              <tr key={user._id} className="border-t border-gray-200">
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(user._id)}
                    onChange={() => toggleSelect(user._id)}
                  />
                </td>
                <td className="p-3">
                  {user.firstname} {user.lastname}
                </td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.phone} </td>
                <td className="p-3">
                  {user.birthday.day !== null
                    ? `${user.birthday.day} / ${user.birthday.month} / ${user.birthday.year}`
                    : "وارد نشده"}
                </td>
                <td>
                  {user.role.name === "ADMIN"
                    ? "ادمین"
                    : user.role.name === "SUPERADMIN"
                    ? "سوپرادمین"
                    : user.role.name === "AUTHOR"
                    ? "نویسنده"
                    : user.role.name === "USER"
                    ? "کاربرمعمولی"
                    : user.role.name === "SUPPORTER"
                    ? "پشتیبان"
                    : user.role.name}
                </td>
                <td>
                  <span
                    className={` px-2 py-1 text-xs rounded-sm ${
                      user.accountStatus === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.accountStatus === "active" ? "فعال" : "غیرفعال"}
                  </span>
                </td>
                <td>{dayjs(user.createdAt).fromNow()}</td>
                <td>{dayjs(user.lastLogin).fromNow()}</td>
                <td className="p-3">
                  <div className="flex justify-center gap-2 text-gray-600 [&>a>svg]:text-xl">
                    <Link href={`edit-user/${user._id}`}>
                      <FaRegEdit className="cursor-pointer hover:text-blue-600" />
                    </Link>
                    {user.email !== "admin@gmail.com" && (
                      <button onClick={() => userDeleteHandler(user._id)}>
                        <MdDeleteOutline className="cursor-pointer hover:text-red-600 text-xl" />
                      </button>
                    )}

                    <Link
                      href={`user/${user._id}`}
                      className="cursor-pointer hover:text-green-800 text-xl"
                    >
                      <MdOutlineRemoveRedEye />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Paginations
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default UsersTable;
