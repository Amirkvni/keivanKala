import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Swal from "sweetalert2";

const animatedComponents = makeAnimated();

export default function RoleFormModal({
  mode,
  roleId,
  permissions,
  setModalState,
}) {
  const router = useRouter();
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const isView = mode === "view";
  const isEdit = mode === "edit";
  const isAdd = mode === "add";
  const [userPermissions, setUserPermissions] = useState([]);
  useEffect(() => {
    if (isEdit || isView) {
      const fetchRole = async () => {
        setLoading(true);
        try {
          const res = await fetch(`/api/role/${roleId}`);
          const data = await res.json();
          console.log(data);

          setName(data.role[0].name || "");
          setSelectedPermissions(data.permissions || []);
          setUsers(
            data.users.map((user) => ({ _id: user._id, email: user.email }))
          );
          setUserPermissions(
            data.role[0].permissions.map((per) => ({
              _id: per._id,
              name: per.name,
            }))
          );
        } catch (err) {
          console.error("Error fetching role:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchRole();
    }
  }, [isEdit, isView, roleId]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isView) return;

    const payload = {
      name,
      permissions: selectedPermissions.map((p) => p._id),
    };

    try {
      const res = await fetch(isAdd ? "/api/role" : `/api/role/${roleId}`, {
        method: isAdd ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire(
          isAdd ? "نقش با موفقیت ایجاد شد" : "نقش با موفقیت ویرایش شد"
        ).then(() => {
          router.refresh();
          setModalState({ mode: "", roleId: "" });
        });
      } else {
        alert(data.error || "خطا در ذخیره نقش");
      }
    } catch (error) {
      console.error("Error saving role:", error);
      alert("خطای سرور، لطفا دوباره تلاش کنید");
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-200">
      <div className="bg-white w-96 p-5 rounded-xl shadow-lg">
        <h2 className="text-lg font-bold mb-4">
          {isAdd && "افزودن نقش"}
          {isEdit && "ویرایش نقش"}
          {isView && "نمایش نقش"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="flex flex-col">
            <span className="text-sm text-gray-600">نام نقش</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="مثلاً مدیریت کاربران"
              readOnly={isView}
              className="border rounded-lg px-3 py-2 outline-none text-gray-600  disabled:bg-gray-100"
            />
          </label>
          {isView && (
            <label className="flex flex-col">
              <span className="text-sm text-gray-600">کاربران</span>

              <Select
                options={users}
                isMulti
                isDisabled={true}
                defaultValue={users}
                getOptionLabel={(option) => option.email}
              />
            </label>
          )}
          {isView && (
            <label className="flex flex-col">
              <span className="text-sm text-gray-600">مجوزها</span>
              <Select
                isMulti
                isDisabled={true}
                options={userPermissions}
                defaultValue={userPermissions}
                getOptionLabel={(option) => option.name}
              />
            </label>
          )}
          {!isView && (
            <label className="flex flex-col">
              <span className="text-sm text-gray-600">مجوزها</span>
              <Select
                isMulti
                isDisabled={false}
                defaultValue={userPermissions}
                options={permissions}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option._id}
                components={animatedComponents}
              />
            </label>
          )}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
              onClick={() => setModalState({ mode: "", roleId: "" })}
            >
              بستن
            </button>
            {!isView && (
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                ذخیره
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
