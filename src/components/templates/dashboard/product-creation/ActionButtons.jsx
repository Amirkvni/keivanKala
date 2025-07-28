import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function ActionButtons() {
  return (
    <div className="flex justify-end gap-x-3 [&>button]:p-2 [&>button]:rounded-lg [&>button]:cursor-pointer  ">
      <button className="flex items-center gap-x-2 border-red-500 border text-red-500">
        دور انداحتن <FaTrashAlt className="text-red-500" />
      </button>
      <button className="bg-green-500  text-white">ایجاد کنید</button>
    </div>
  );
}

export default ActionButtons;
