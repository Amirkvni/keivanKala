import React from "react";

function BasicInfoForm() {
  return (
    <div className="bg-white rounded-lg dashboard-box-shadow flex flex-col gap-y-6 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2  [&>div>input]:p-2 [&>div>input]:rounded-sm [&>div>input]:outline-none ">
      <span className="font-extrabold text-lg">اطلاعات پایه</span>
      <div className="mt-4">
        <label htmlFor="">نام کالا (فارسی) :</label>
        <input type="text" className="edit-profile-input" />
      </div>
      <div className="">
        <label htmlFor="">نام کالا (انگلیسی) :</label>
        <input type="text" className="edit-profile-input" />
      </div>
      <div className="">
        <label htmlFor="">کد کالا :</label>
        <input type="text" className="edit-profile-input" />
      </div>
    </div>
  );
}

export default BasicInfoForm;
