"use client";
import React, { useState } from "react";

function DashboardTable({
  title,
  columns,
  data,
  itemsPerPage = 5,
  bgColor = "bg-gray-100",
  textColor = "text-gray-800",
  borderColor = "border-gray-300",
  renderRow,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const paginationStart = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const paginationEnd = Math.min(paginationStart + 4, totalPages);
  const pages = [];
  for (let i = paginationStart; i <= paginationEnd; i++) pages.push(i);

  return (
    <div className="dashboard-box-shadow bg-white rounded-lg flex flex-col p-4">
      <h3 className="dashboard-header-box mb-4 border-b pb-4">{title}</h3>
      <div className="overflow-x-auto mb-3">
        <table className="w-full text-center table-auto border-collapse">
          <thead className={`${bgColor} ${textColor} text-[14px]`}>
            <tr>
              {columns.map((col, i) => (
                <th key={i} className={`p-2 border ${borderColor}`}>
                  {col}
                </th>
              ))}
              <th className={`p-3 border ${borderColor}`}>مشاهده</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr
                key={item._id}
                className={`border text-center ${borderColor} text-sm`}
              >
                {renderRow(item)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-auto flex justify-center space-x-2">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => setCurrentPage(p)}
            className={`px-3 py-1 rounded border cursor-pointer ${borderColor} === currentPage ? bgColor.replace("100", "500") : bgColor
            } ${p === currentPage ? bgColor.replace("100", "500") : bgColor} ${
              p === currentPage ? textColor.replace("800", "100") : textColor
            } ${borderColor} transition`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DashboardTable;
