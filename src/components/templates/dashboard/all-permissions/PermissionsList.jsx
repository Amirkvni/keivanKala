import React, { useEffect, useMemo, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Paginations from "../Paginations";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
function PermissionsList({ setAction, permissions }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 8;
  const filteredPermissions = useMemo(() => {
    const query = search.toLowerCase();

    let result = permissions.filter((per) => {
      const matchesSearch = per.name.toLowerCase().includes(query);

      return matchesSearch;
    });

    return result;
  }, [search, permissions]);
  const indexOfLast = currentPage * ordersPerPage;
  const indexOfFirst = indexOfLast - ordersPerPage;
  const currentPermissions = filteredPermissions.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(filteredPermissions.length / ordersPerPage);
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);
  const deletePermissionHandler = async (id) => {
    const result = await Swal.fire({
      title: "آیا از حذف این مجوز مطمئن هستید؟",
      text: "این عملیات قابل بازگشت نیست!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف شود",
      cancelButtonText: "خیر",
    });

    if (result.isConfirmed) {
      const res = await fetch("/api/permissions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: id }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("حذف شد!", "مجوز با موفقیت حذف شد.", "success");
        router.refresh();
      } else {
        Swal.fire("خطا!", data.message || "مشکلی پیش آمد", "error");
      }
    }
  };
  return (
    <div className="p-12 ">
      <span className="text-xl font-bold">لیست مجوزها </span>
      <div className="mt-4 dashboard-box-shadow bg-white p-5 rounded-lg">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="جستجو"
            className="px-4 py-2 w-40 md:w-52 lg:w-64 rounded-lg border border-gray-300 focus:outline-none "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
          <button
            className="bg-green-500 text-white p-2 rounded-lg cursor-pointer"
            onClick={() => setAction({ mode: "add" })}
          >
            افزودن مجوز
          </button>
        </div>
        <table className="w-full mt-5 [&>tr>td]:p-2 [&>tr>td]:border-b [&>tr>td]:border-gray-200 border-collapse">
          <tbody>
            <tr className="bg-gray-100 text-gray-600">
              <td>نام</td>
              <td>تاریخ ایجاد</td>
              <td>اقدام</td>
            </tr>
            {currentPermissions.length === 0 && (
              <tr>
                <td colSpan="9" className="py-6 text-gray-500">
                  هیچ مجوزی پیدا نشد
                </td>
              </tr>
            )}
            {currentPermissions.map((per) => (
              <tr key={per._id}>
                <td>{per.name}</td>
                <td> {new Date(per.createdAt).toLocaleString("fa-IR")}</td>
                <td>
                  <div className="flex items-center gap-x-2 [&>svg]:cursor-pointer [&>svg]:text-lg">
                    <MdDeleteOutline
                      onClick={() => {
                        deletePermissionHandler(per._id);
                      }}
                    />
                    <FaRegEdit
                      onClick={() =>
                        setAction({
                          mode: "edit",
                          _id: per._id,
                          name: per.name,
                        })
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Paginations
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default PermissionsList;
