import React, { use, useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

function AddRole({ setAction, users, permissions }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      user: selectedUser ? selectedUser._id : null,
      permissions: selectedPermissions.map((p) => p._id),
    };

    console.log(payload);

    // ارسال payload به API
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-200">
      <div className="bg-white w-96 p-5 rounded-xl shadow-lg transform transition-all duration-300 scale-100 opacity-100">
        <h2 className="text-lg font-bold mb-4">افزودن نقش</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="flex flex-col">
            <span className="text-sm text-gray-600">نام نقش</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="مثلاً مدیریت کاربران"
              className="border rounded-lg px-3 py-2 outline-none focus:border-blue-500"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-600">اختصاص یافته به</span>
            <Select
              closeMenuOnSelect={true}
              components={animatedComponents}
              options={users}
              getOptionLabel={(option) => option.email}
              getOptionValue={(option) => option._id}
              onChange={(val) => setSelectedUser(val)}
              value={selectedUser}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm text-gray-600">مجوزها</span>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={permissions}
              value={selectedPermissions}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option._id}
              onChange={(val) => setSelectedPermissions(val)}
            />
          </label>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
              onClick={() => setAction("")}
            >
              انصراف
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
            >
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRole;
