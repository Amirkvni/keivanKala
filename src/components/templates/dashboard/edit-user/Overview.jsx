import React from "react";

function Overview({ name, family, email, phone, natinalcode }) {
  return (
    <div className="bg-white rounded-lg dashboard-box-shadow flex flex-col gap-y-6 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2  [&>div>input]:p-2 [&>div>input]:rounded-sm [&>div>input]:outline-none ">
      <span className="font-extrabold text-lg">نمای کلی</span>
      <div className="mt-4">
        <label htmlFor="">نام :</label>
        <input type="text" className="edit-profile-input" defaultValue={name} />
      </div>
      <div className="">
        <label htmlFor="">نام خانوادگی :</label>
        <input
          type="text"
          className="edit-profile-input"
          defaultValue={family}
        />
      </div>
      <div className="">
        <label htmlFor="">ایمیل :</label>
        <input
          type="text"
          className="edit-profile-input"
          defaultValue={email}
        />
      </div>
      <div className="">
        <label htmlFor="">شماره تلفن :</label>
        <input
          type="text"
          className="edit-profile-input"
          defaultValue={phone}
        />
      </div>
      <div className="">
        <label htmlFor=""> کدملی :</label>
        <input
          type="text"
          className="edit-profile-input"
          defaultValue={natinalcode}
        />
      </div>
    </div>
  );
}

export default Overview;
