import React from "react";

function AddressInformation({ mainAddress, setMainAddress }) {
  return (
    <div className="bg-white rounded-lg dashboard-box-shadow flex flex-col gap-y-6 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-2  [&>div>input]:p-2 [&>div>input]:rounded-sm [&>div>input]:outline-none ">
      <span className="font-extrabold text-lg">اطلاعات آدرس</span>
      <div className="mt-4">
        <label htmlFor="">استان :</label>
        <input
          type="text"
          className="edit-profile-input"
          value={mainAddress?.province}
          onChange={(e) =>
            setMainAddress({ ...mainAddress, province: e.target.value })
          }
        />
      </div>
      <div className="">
        <label htmlFor="">شهر :</label>
        <input
          type="text"
          className="edit-profile-input"
          value={mainAddress?.city}
          onChange={(e) =>
            setMainAddress({ ...mainAddress, city: e.target.value })
          }
        />
      </div>
      <div className="">
        <label htmlFor="">خیابان :</label>
        <input
          type="text"
          className="edit-profile-input"
          value={mainAddress?.district}
          onChange={(e) =>
            setMainAddress({ ...mainAddress, district: e.target.value })
          }
        />
      </div>
      <div className="">
        <label htmlFor="">پلاک :</label>
        <input
          type="text"
          className="edit-profile-input"
          value={mainAddress?.plaque}
          onChange={(e) =>
            setMainAddress({ ...mainAddress, plaque: e.target.value })
          }
        />
      </div>
      <div className="">
        <label htmlFor="">واحد :</label>
        <input
          type="text"
          className="edit-profile-input"
          value={mainAddress?.unit}
          onChange={(e) =>
            setMainAddress({ ...mainAddress, unit: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default AddressInformation;
