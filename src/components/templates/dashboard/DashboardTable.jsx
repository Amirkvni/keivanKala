import React from "react";

function DashboardTable({
  title,
  columns,
  data,
  bgColor = "bg-gray-100",
  textColor = "text-gray-800",
  borderColor = "border-gray-300",
  renderRow,
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
              <th className={`p-3 border ${borderColor}`}>مشاهده</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item._id}
                className={`border text-center ${borderColor}`}
              >
                {renderRow(item)}
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
