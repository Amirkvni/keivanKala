import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Paginations() {
  return (
    <div className="border rounded-sm border-gray-300 w-16 flex items-center justify-between p-1">
      <FaAngleRight />
      <span>1</span>
      <FaAngleLeft />
    </div>
  );
}

export default Paginations;
