import React from "react";

function page() {
  return (
    <div className="p-12">
      <div>
        <span>افزودن وبلاگ</span>
        <div className="flex flex-col gap-y-4 mt-3">
          <input type="text" placeholder="عنوان" />
          <select>
            <option value="-1">دسته بندی را وارد کنید</option>
            <option value="">1</option>
            <option value="">2</option>
          </select>
          <div className="border ">
            <textarea
              rows={16}
              placeholder="edit"
              className="w-full outline-none"
            />
          </div>
          <div>
            <input type="text" placeholder="برچسب را وارد کنید" />
          </div>
          <button className="bg-green-500 w-fit text-white p-2 rounded-md cursor-pointer">
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
