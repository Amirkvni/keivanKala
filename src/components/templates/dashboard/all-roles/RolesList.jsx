import React, { useEffect, useState, useMemo } from "react";
import TableRow from "./TableRow";
import Paginations from "../Paginations";

function RolesList({ allRoles, setModalState }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("-1");

  const rolesPerPage = 5;
  const filteredRoles = useMemo(() => {
    const query = search.toLowerCase();

    let result = allRoles.filter((role) =>
      role.name.toLowerCase().includes(query)
    );

    if (statusFilter !== "-1") {
      const boolStatus = statusFilter === "true";
      result = result.filter((role) => role.status === boolStatus);
    }

    return result;
  }, [allRoles, search, statusFilter]);

  const indexOfLast = currentPage * rolesPerPage;
  const indexOfFirst = indexOfLast - rolesPerPage;
  const currentRoles = filteredRoles.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredRoles.length / rolesPerPage);
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);
  return (
    <div className="mt-4 dashboard-box-shadow bg-white p-5">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="جستجو"
          className="px-4 py-2 w-40 md:w-52 lg:w-64 rounded-lg border border-gray-300 focus:outline-none "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="outline-none cursor-pointer"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="-1">همه</option>
          <option value="true">فعال</option>
          <option value="false">غیرفعال</option>
        </select>
      </div>
      <table className="w-full mt-5 [&>tbody>tr>td]:p-2 [&>tbody>tr>td]:border-b [&>tbody>tr>td]:border-gray-200 border-collapse text-center">
        <tbody>
          <tr className="bg-gray-100 text-gray-600">
            <td>نقش</td>
            <td>تعداد کاربران</td>
            <td>مجوزها</td>
            <td>تاریخ ایجاد</td>
            <td>وضعیت</td>
            <td>اقدام</td>
          </tr>
          {currentRoles.length === 0 && (
            <tr>
              <td colSpan="9" className="py-6 text-gray-500">
                هیچ نقشی پیدا نشد
              </td>
            </tr>
          )}
          {currentRoles.map((role) => (
            <TableRow key={role._id} {...role} setModalState={setModalState} />
          ))}
        </tbody>
      </table>
      <Paginations
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default RolesList;
