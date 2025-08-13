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
  const isView = mode === "view";
  const isEdit = mode === "edit";
  const isAdd = mode === "add";
  const [userPermissions, setUserPermissions] = useState([]);
  const [status, setStatus] = useState(true);
  useEffect(() => {
    if (isEdit || isView) {
      const fetchRole = async () => {
        setLoading(true);
        try {
          const res = await fetch(`/api/role/${roleId}`);
          const data = await res.json();

          setName(data.role[0].name || "");
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
      permissions: selectedPermissions,
      status,
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

          <label className="flex flex-col">
            <span className="text-sm text-gray-600">مجوزها</span>
            <Select
              isMulti
              isDisabled={isView}
              options={permissions}
              defaultValue={userPermissions}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option._id}
              components={animatedComponents}
              onChange={(selected) =>
                setSelectedPermissions(selected.map((p) => p._id))
              }
            />
          </label>
          {!isAdd && (
            <label className="flex flex-col">
              <span className="text-sm text-gray-600">وضعیت</span>
              <div className="inline-flex items-center cursor-pointer w-fit">
                <input
                  type="checkbox"
                  disabled={isView}
                  value=""
                  checked={status}
                  className="sr-only peer"
                  onChange={(e) => setStatus(e.target.checked)}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
              </div>
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
