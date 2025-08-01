import React from "react";

function AdminPassUpdate() {
  return (
    <div className="flex flex-col gap-y-6 flex-1 p-3 ">
      <div>
        <p className="text-lg font-bold">رمز عبور</p>
        <span className="text-[12px] text-gray-600 mt-1 block">
          به یاد داشته باشید، رمز عبور شما کلید دیجیتالی حساب شماست. آن را امن و
          محفوظ نگه دارید!
        </span>
      </div>
      <div className=" flex flex-col gap-y-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-3 [&>div>input]:w-[300px] [&>div>span]:text-xs [&>div>input]:outline-none [&>div>input]:p-2 [&>div>input]:rounded-md ">
        <div>
          <span>رمز عبور فعلی :</span>
          <input type="password" className="edit-profile-input" />
        </div>
        <div>
          <span>رمز عبور جدید :</span>
          <input type="password" className="edit-profile-input" />
        </div>
        <div>
          <span>تأیید رمز عبور جدید :</span>
          <input type="password" className="edit-profile-input" />
        </div>
      </div>
      <button className="bg-emerald-400 w-fit mr-auto p-3 rounded-lg text-white cursor-pointer">
        ذخیره تغییرات
      </button>{" "}
    </div>
  );
}

export default AdminPassUpdate;
