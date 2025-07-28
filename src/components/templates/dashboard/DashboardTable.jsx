import React from "react";
import { LuEye } from "react-icons/lu";

function DashboardTable({
  title,
  columns,
  data,
  bgColor = "bg-gray-100",
  textColor = "text-gray-800",
  borderColor = "border-gray-300",
}) {
  return (
    <div className="dashboard-box-shadow bg-white rounded-lg flex flex-col p-4">
      <h3 className="dashboard-header-box mb-4 border-b pb-4">{title}</h3>
      <div className="overflow-x-auto mb-3">
        <table className="w-full text-center table-auto border-collapse">
          <thead className={`${bgColor} ${textColor} font-semibold`}>
            <tr>
              {columns.map((col, i) => (
                <th key={i} className={`p-3 border ${borderColor}`}>
                  {col}
                </th>
              ))}
              <th className={`p-3 border ${borderColor}`}>اقدام</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={`odd:bg-white even:${bgColor} hover:${bgColor.replace(
                  "100",
                  "200"
                )} transition-colors text-xs`}
              >
                {columns.map((col, j) => (
                  <td key={j} className={`p-3 border ${borderColor}`}>
                    {row[col]}
                  </td>
                ))}
                <td className={`p-3 border ${borderColor}`}>
                  <LuEye
                    className={`${textColor} hover:text-black font-semibold transition mx-auto text-xl cursor-pointer`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={`odd:bg-white even:${bgColor} hover:${bgColor.replace(
                  "100",
                  "200"
                )} transition-colors text-xs`}
              >
                {columns.map((col, j) => (
                  <td key={j} className={`p-3 border ${borderColor}`}>
                    {row[col]}
                  </td>
                ))}
                <td className={`p-3 border ${borderColor}`}>
                  <LuEye
                    className={`${textColor} hover:text-black font-semibold transition mx-auto text-xl cursor-pointer`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* صفحه بندی */}
      <div className="mt-auto flex justify-center space-x-2">
        {[1, 2].map((p) => (
          <button
            key={p}
            className={`px-3 py-1 rounded border ${borderColor} ${bgColor} hover:${bgColor.replace(
              "100",
              "300"
            )} transition`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DashboardTable;
