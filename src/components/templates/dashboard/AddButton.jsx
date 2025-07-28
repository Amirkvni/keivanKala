import Link from "next/link";
import React from "react";
import { MdOutlineAdd } from "react-icons/md";

function AddButton({ title, address }) {
  return (
    <Link
      href={address}
      className="flex items-center gap-x-2 p-2 rounded-lg bg-green-700 text-white cursor-pointer"
    >
      <MdOutlineAdd />
      {title}
    </Link>
  );
}

export default AddButton;
