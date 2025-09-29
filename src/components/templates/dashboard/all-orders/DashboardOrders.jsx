"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import Link from "next/link";
import Paginations from "@/components/templates/dashboard/Paginations";
import { priceFormatter } from "@/utils/priceFormatter";
import Swal from "sweetalert2";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
function DashboardOrders({ allOredrs }) {
  const router = useRouter();

  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [paidFilter, setPaidFilter] = useState("-1");
  const [discountFilter, setDiscountFilter] = useState("-1");
  const [orderFilter, setOrderFilter] = useState("-1");
  const [amountPaidFilter, setAmountPaidFilter] = useState("-1");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 8;
  const filteredOrders = useMemo(() => {
    const query = search.toLowerCase();

    let result = allOredrs.filter((order) => {
      // فیلتر سرچ
      const matchesSearch =
        order._id.slice(-5).includes(query) ||
        order.user.email.toLowerCase().includes(query);

      // فیلتر وضعیت سفارش
      const matchesOrderStatus =
        orderFilter === "-1" || order.status === orderFilter;

      // فیلتر وضعیت پرداخت
      const matchesPaidStatus =
        paidFilter === "-1" || order.payment?.status === paidFilter;

      return matchesSearch && matchesOrderStatus && matchesPaidStatus;
    });

    if (amountPaidFilter === "highestpaid") {
      result = [...result].sort(
        (a, b) => (b.payment?.paid || 0) - (a.payment?.paid || 0)
      );
    } else if (amountPaidFilter === "lowestpaid") {
      result = [...result].sort(
        (a, b) => (a.payment?.paid || 0) - (b.payment?.paid || 0)
      );
    }

    if (discountFilter === "highestdiscount") {
      result = [...result].sort(
        (a, b) => (b.payment?.discount || 0) - (a.payment?.discount || 0)
      );
    } else if (discountFilter === "lowestdiscount") {
      result = [...result].sort(
        (a, b) => (a.payment?.discount || 0) - (b.payment?.discount || 0)
      );
    }

    return result;
  }, [
    allOredrs,
    search,
    paidFilter,
    discountFilter,
    orderFilter,
    amountPaidFilter,
  ]);

  const indexOfLast = currentPage * ordersPerPage;
  const indexOfFirst = indexOfLast - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  useEffect(() => {
    setCurrentPage(1);
  }, [search, paidFilter, discountFilter, orderFilter]);

  const toggleSelectAll = (e) => {
    setSelected(e.target.checked ? allOredrs.map((c) => c._id) : []);
  };
  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };
  const deleteCommentsHandler = async () => {
    if (selected.length === 0) return;

    const result = await Swal.fire({
      title: "آیا از حذف سفارش ها مطمئن هستید؟",
      text: `تعداد ${selected.length} سفارش انتخاب شده است.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف شود",
      cancelButtonText: "خیر",
    });

    if (result.isConfirmed) {
      const res = await fetch("/api/orders", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selected }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("حذف شد!", `${data.deletedCount} کامنت حذف شدند.`, "success");
        setSelected([]);
        router.refresh();
      } else {
        Swal.fire("خطا!", data.message || "مشکلی پیش آمد", "error");
      }
    }
  };
  const deleteCommentHandler = async (id) => {
    const result = await Swal.fire({
      title: "آیا از حذف این سفارش مطمئن هستید؟",
      text: "این عملیات قابل بازگشت نیست!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف شود",
      cancelButtonText: "خیر",
    });

    if (result.isConfirmed) {
      const res = await fetch("/api/orders", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: id }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("حذف شد!", "سفارش با موفقیت حذف شد.", "success");
        router.refresh();
      } else {
        Swal.fire("خطا!", data.message || "مشکلی پیش آمد", "error");
      }
    }
  };

  return (
    <div className="p-12">
      <div className="bg-white p-3 rounded-lg dashboard-box-shadow">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">تاریخچه سفارشات</span>
          <button className="p-2 rounded-sm text-white bg-green-400 cursor-pointer">
            افزودن سفارش
          </button>
        </div>
        <div className="my-6 flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
          <input
            type="text"
            placeholder="جستجو"
            className="px-4 py-2 w-40 md:w-52 lg:w-64 rounded-lg border border-gray-300 focus:outline-none "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none "
            onChange={(e) => setOrderFilter(e.target.value)}
          >
            <option value="-1">همه</option>
            <option value="pending">جاری</option>
            <option value="preparing">در حال آماده‌سازی</option>
            <option value="readytoship">آماده برای ارسال</option>
            <option value="shipped">ارسال شده</option>
            <option value="delivered">تحویل داده شده </option>
            <option value="canceled">لغو شده</option>
            <option value="returned">مرجوع شده </option>
          </select>

          <select
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none "
            onChange={(e) => setPaidFilter(e.target.value)}
          >
            <option value="-1">همه</option>
            <option value="paid">پرداخت شده</option>
            <option value="pending">درانتظار پرداخت</option>
            <option value="failed">پرداخت ناموفق </option>
            <option value="refunded">بازگشت وجه</option>
          </select>

          <select
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none "
            onChange={(e) => setAmountPaidFilter(e.target.value)}
          >
            <option value="-1">همه</option>
            <option value="highestpaid">بیشترین پرداختی</option>
            <option value="lowestpaid">کمترین پرداختی</option>
          </select>
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none "
            onChange={(e) => setDiscountFilter(e.target.value)}
          >
            <option value="-1">همه</option>
            <option value="highestdiscount">بیشترین تخفیف</option>
            <option value="lowestdiscount">کمترین تخفیف</option>
          </select>
        </div>

        <div>
          <table className="w-full text-center border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr className="text-sm text-gray-700">
                <th className="p-3">
                  <input
                    type="checkbox"
                    onChange={toggleSelectAll}
                    checked={
                      selected.length > 0 &&
                      selected.length === allOredrs.length
                    }
                  />
                </th>
                <th className="p-3">کد سفارش</th>
                <th className="p-3">تصویر محصول</th>
                <th className="p-3">مشتری</th>
                <th className="p-3">تاریخ سفارش</th>
                <th className="p-3">تاریخ تحویل</th>
                <th className="p-3">وضعیت سفارش</th>
                <th className="p-3">وضعیت پرداخت</th>
                <th className="p-3">مبلغ پرداختی </th>
                <th className="p-3">تخفیف</th>
                <th className="p-3">اقدام</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {currentOrders.length === 0 && (
                <tr>
                  <td colSpan="9" className="py-6 text-gray-500">
                    هیچ سفارشی پیدا نشد
                  </td>
                </tr>
              )}

              {currentOrders.map((order) => (
                <tr key={order._id} className="border-t border-gray-300">
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selected.includes(order._id)}
                      onChange={() => toggleSelect(order._id)}
                    />
                  </td>
                  <td className="p-3" dir="ltr">
                    {order._id.slice(-5)}#
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center gap-1">
                      {order.products.slice(0, 3).map((product) => (
                        <div
                          className="w-12 h-12 overflow-hidden rounded-md "
                          key={product._id}
                        >
                          <Image
                            src={product.mainImage}
                            alt={product._id}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))}
                      {order.products.length > 3 && (
                        <div className="text-gray-500 w-12 h-12 flex justify-center items-center ">
                          ...
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-3">{order.user.email}</td>
                  <td className="p-3">
                    {new Date(order.createdAt).toLocaleString("fa-IR")}
                  </td>
                  <td className="p-3">1403/04/06</td>
                  <td className="p-3">
                    <span
                      className={`font-semibold text-xs  rounded-lg w-fit py-1 px-2 ${
                        order.status === "pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : order.status === "preparing"
                          ? "bg-blue-100 text-blue-600"
                          : order.status === "readytoship"
                          ? "bg-indigo-100 text-indigo-600"
                          : order.status === "shipped"
                          ? "bg-orange-100 text-orange-600"
                          : order.status === "delivered"
                          ? "bg-green-100 text-green-600"
                          : order.status === "canceled"
                          ? "bg-red-100 text-red-600"
                          : order.status === "returned"
                          ? "bg-purple-100 text-purple-600"
                          : ""
                      }`}
                    >
                      {order.status === "pending" && "جاری"}
                      {order.status === "preparing" && "در حال آماده‌سازی"}
                      {order.status === "readytoship" && "آماده برای ارسال"}
                      {order.status === "shipped" && "ارسال شده"}
                      {order.status === "delivered" && "تحویل داده شده"}
                      {order.status === "canceled" && "لغو شده"}
                      {order.status === "returned" && "مرجوع شده"}
                    </span>
                  </td>
                  <td className="p-3 text-emerald-500">
                    {order.payment?.status === "paid"
                      ? "پرداخت شده"
                      : order.payment?.status}
                  </td>
                  <td className="p-3 font-semibold">
                    {order.payment?.paid && priceFormatter(order.payment.paid)}
                  </td>
                  <td className="p-3 font-semibold">
                    {order.payment?.discount == undefined ||
                    order.payment?.discount === "0"
                      ? "ندارد"
                      : priceFormatter(order.payment.discount)}
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center gap-2 text-gray-600 [&>svg]:text-xl">
                      <Link
                        className="cursor-pointer hover:text-blue-600"
                        href={`/dashboard/edit-order/${order._id}`}
                      >
                        <FaRegEdit className="text-xl" />
                      </Link>
                      <MdDeleteOutline
                        onClick={() => deleteCommentHandler(order._id)}
                        className="cursor-pointer hover:text-red-600"
                      />

                      <Link
                        href={`/dashboard/all-orders/${order._id}`}
                        className="cursor-pointer hover:text-green-800"
                      >
                        <MdOutlineRemoveRedEye className="text-xl" />
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
      </div>
      {selected.length > 0 && (
        <div className="sticky bottom-0 flex justify-between items-center bg-white p-4 mt-3">
          <div className="flex items-center gap-x-3">
            <IoCheckmarkDoneOutline className="text-blue-700 text-2xl" />
            <span>{selected.length} محصولات انتخاب شده</span>
          </div>
          <button
            className="border border-red-500 p-2 rounded-lg text-red-500 cursor-pointer"
            onClick={deleteCommentsHandler}
          >
            حذف
          </button>
        </div>
      )}
    </div>
  );
}

export default DashboardOrders;
