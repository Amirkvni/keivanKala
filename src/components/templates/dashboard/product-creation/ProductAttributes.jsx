import React from "react";

function ProductAttributes() {
  return (
    <div className="bg-white dashboard-box-shadow rounded-lg">
      <div className="flex justify-between items-center">
        <span className="font-extrabold text-lg">ویژگی های محصول</span>
        <button className="bg-green-400 rounded-lg p-2 cursor-pointer text-white">
          افزودن
        </button>
      </div>
      <div className="mt-3 [&>div>input]:outline-none  [&>div>input]:p-2 [&>div>input]:rounded-sm flex flex-col gap-y-3  [&>div]:flex [&>div]:gap-x-3 [&>div]:items-center">
        <div>
          <input
            className="edit-profile-input"
            type="text"
            placeholder="عنوان"
          />
          <span>:</span>
          <input
            className="edit-profile-input"
            type="text"
            placeholder="توضیحات"
          />
        </div>
        <div>
          <input
            className="edit-profile-input"
            type="text"
            placeholder="عنوان"
          />
          <span>:</span>
          <input
            className="edit-profile-input"
            type="text"
            placeholder="توضیحات"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductAttributes;
