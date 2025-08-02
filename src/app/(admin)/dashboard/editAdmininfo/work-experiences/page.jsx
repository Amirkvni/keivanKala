import React from "react";

function page() {
  return (
    <div className="p-3 w-full">
      <p className="text-lg font-bold">سوابق کاری </p>
      <div className="flex flex-col gap-y-4 mt-8">
        <div className="flex flex-col gap-y-3 w-full  ">
          <div className="flex flex-col gap-y-3 ">
            <label htmlFor="">عنوان شغل</label>
            <input type="text" className="edit-profile-input" />
          </div>
          <div className="flex  gap-x-4 w-full">
            <div className="flex flex-col gap-y-3  w-full">
              <label htmlFor="">نام کمپانی</label>
              <input
                type="text"
                className="edit-profile-input edit-profile-input"
              />
            </div>
            <div className="flex flex-col gap-y-2  w-full">
              <span>سال تجربه</span>
              <div className="w-full flex items-center gap-x-5  [&>select]:w-1/3   [&>select]:border">
                <select
                  name=""
                  id=""
                  className="edit-profile-input outline-none focus:border-none border-none"
                >
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>
                <span>:</span>
                <select
                  name=""
                  id=""
                  className="edit-profile-input outline-none focus:border-none border-none"
                >
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <span>توضیحات شغل</span>
            <textarea
              name=""
              id=""
              className="outline-none border-none focus:border-none  edit-profile-input focus:outline-none"
              rows={4}
            ></textarea>

            <button className="mr-auto mt-4 bg-red-500 p-2 rounded-lg text-white cursor-pointer">
              حذف
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 [&>button]:cursor-pointer [&>button]:bg-green-500 [&>button]:text-white [&>button]:p-2 [&>button]:rounded-lg ">
        <button>به روزرسانی</button>
        <button>افزودن جدید</button>
      </div>
    </div>
  );
}

export default page;
