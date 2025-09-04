import React from "react";

function Overview({ setMainUser, mainUser }) {
  return (
    <div className="bg-white rounded-lg dashboard-box-shadow flex flex-col gap-y-6 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2  [&>div>input]:p-2 [&>div>input]:rounded-sm [&>div>input]:outline-none ">
      <span className="font-extrabold text-lg">نمای کلی</span>
      <div className="mt-4">
        <label>نام :</label>
        <input
          type="text"
          className="edit-profile-input"
          value={mainUser?.firstname}
          onChange={(e) =>
            setMainUser({ ...mainUser, firstname: e.target.value })
          }
        />
      </div>
      <div>
        <label>نام خانوادگی :</label>
        <input
          type="text"
          className="edit-profile-input"
          value={mainUser?.lastname}
          onChange={(e) =>
            setMainUser({ ...mainUser, lastname: e.target.value })
          }
        />
      </div>
      <div>
        <label>ایمیل :</label>
        <input
          type="text"
          className="edit-profile-input"
          value={mainUser?.email}
          onChange={(e) => setMainUser({ ...mainUser, email: e.target.value })}
        />
      </div>
      <div>
        <label>شماره تلفن :</label>
        <input
          type="text"
          className="edit-profile-input"
          value={mainUser?.phone}
          onChange={(e) => setMainUser({ ...mainUser, phone: e.target.value })}
        />
      </div>
      <div>
        <label> کدملی :</label>
        <input
          type="text"
          className="edit-profile-input"
          value={mainUser?.nationalcode ? mainUser.nationalcode : ""}
          onChange={(e) =>
            setMainUser({ ...mainUser, nationalcode: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default Overview;
