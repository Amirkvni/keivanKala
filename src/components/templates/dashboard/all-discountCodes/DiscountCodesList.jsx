"use client";
import AddButton from "@/components/templates/dashboard/AddButton";
import { priceFormatter } from "@/utils/priceFormatter";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo, useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import Paginations from "../Paginations";

export default function DiscountCodesList({ discountCodes }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [discountTypeFilter, setDiscountTypeFilter] = useState("-1");
  const [discountStatusFilter, setDiscountStatusFilter] = useState("-1");
  const [currentPage, setCurrentPage] = useState(1);
  const codesPerPage = 8;
  const filteredCodes = useMemo(() => {
    const query = search.toLowerCase();

    let result = discountCodes.filter((discountCode) => {
      const matchesSearch = discountCode.code.toLowerCase().includes(query);

      return matchesSearch;
    });
    if (discountTypeFilter === "fixed") {
      result = result.filter(
        (discountCode) => discountCode.discountType === "fixed"
      );
    } else if (discountTypeFilter === "percentage") {
      result = result.filter(
        (discountCode) => discountCode.type === "percentage"
      );
    }
    if (discountStatusFilter === "true") {
      result = result.filter((discountCode) => discountCode.isActive === true);
    } else if (discountStatusFilter === "false") {
      result = result.filter((discountCode) => discountCode.isActive === false);
    }

    return result;
  }, [search, discountCodes, discountTypeFilter, discountStatusFilter]);
  const indexOfLast = currentPage * codesPerPage;
  const indexOfFirst = indexOfLast - codesPerPage;
  const curretCodes = filteredCodes.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredCodes.length / codesPerPage);
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);
  const removeCodeHandler = async (id) => {
    Swal.fire({
      title: "آیا از حذف کد اطمینان دارید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`/api/discountcode/${id}`, {
          method: "DELETE",
        });
        if (res.status === 200) {
          Swal.fire("حذف شد", "", "success").then((result) => {
            router.refresh();
          });
        } else {
          alert("خطا درحذف کد");
        }
      }
    });
  };
  return (
    <div className="p-12  ">
      <div className="bg-white p-4 dashboard-box-shadow rounded-lg flex flex-col gap-y-6">
        <div className="flex items-center justify-between ">
          <h2 className="text-xl font-bold">کدهای تخفیف</h2>
          <AddButton
            title="افزودن کد جدید"
            address="/dashboard/add-discountCode"
          />
        </div>
        <div className="flex items-center gap-x-3 ">
          <input
            type="text"
            placeholder="جستجو"
            className="px-4 py-2 w-40 md:w-52 lg:w-64 rounded-lg border border-gray-300 focus:outline-none "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none cursor-pointer "
            value={discountTypeFilter}
            onChange={(e) => setDiscountTypeFilter(e.target.value)}
          >
            <option value="-1">نوع تخفیف</option>
            <option value="fixed">ثابت</option>
            <option value="percentage">درصدی</option>
          </select>
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none cursor-pointer"
            value={discountStatusFilter}
            onChange={(e) => setDiscountStatusFilter(e.target.value)}
          >
            <option value="-1">وضعیت</option>
            <option value={true}>فعال</option>
            <option value={false}>غیرفعال</option>
          </select>
        </div>
        <table className="w-full text-sm border rounded overflow-hidden text-right">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">کد</th>
              <th>نوع تخفیف</th>
              <th className="p-3">مقدار تخفیف</th>
              <th className="p-3">حداکثر استفاده</th>
              <th className="p-3"> تعداد استفاده</th>

              <th className="p-3">تاریخ شروع</th>
              <th className="p-3">تاریخ پایان</th>
              <th className="p-3">وضعیت</th>
              <th className="p-3 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {curretCodes.length === 0 && (
              <tr>
                <td colSpan="9" className="py-6 text-gray-500 text-center">
                  هیچ کد تخفیفی پیدا نشد
                </td>
              </tr>
            )}
            {curretCodes.map((code) => (
              <tr
                key={code._id}
                className="border-t hover:bg-gray-50 transition border-gray-300"
              >
                <td className="p-3">{code.code}</td>
                <td className="p-3">
                  {code.discountType === "fixed" ? "ثابت" : "درصدی"}
                </td>
                <td className="p-3">
                  {code.discountType === "fixed"
                    ? priceFormatter(code.discountValue)
                    : code.discountValue + "٪"}
                </td>
                <td className="p-3">{code.usageLimit}</td>
                <td className="p-3">{code.usedCount}</td>
                <td className="p-3" dir="rtl">
                  {new Date(code.startDate).toLocaleString("fa-IR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </td>
                <td className="p-3" dir="ltr">
                  {new Date(code.endDate).toLocaleString("fa-IR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs ${
                      code.isActive === true ? "bg-green-500" : "bg-gray-500"
                    }`}
                  >
                    {code.isActive === true ? "فعال" : "منقضی"}
                  </span>
                </td>
                <td className="p-3 text-center flex justify-center gap-2">
                  <Link
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    href={`/dashboard/edit-discountCode/${code._id}`}
                  >
                    <FaEdit className="text-lg" />
                  </Link>
                  <button
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                    onClick={() => removeCodeHandler(code._id)}
                  >
                    <FaTrash className="text-lg" />
                  </button>
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
