import React from "react";

function AdditionalAttributes({ category, parentCategory }) {
  return (
    <div className="bg-white dashboard-box-shadow">
      <p className="font-extrabold text-lg">ویژگی ها</p>
      <div className=" mt-4 flex flex-col gap-y-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2  [&>div>input]:p-2 [&>div>input]:rounded-sm [&>div>input]:outline-none ">
        <div>
          <label htmlFor="">دسته‌بندی :</label>
          <input
            type="text"
            className="edit-profile-input"
            defaultValue={category}
          />
        </div>
        <div>
          <label htmlFor="">زیردسته بندی :</label>
          <input
            type="text"
            className="edit-profile-input"
            defaultValue={parentCategory}
          />
        </div>
      </div>
    </div>
  );
}

export default AdditionalAttributes;
