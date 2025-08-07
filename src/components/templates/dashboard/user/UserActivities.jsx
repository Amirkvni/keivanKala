import React from "react";
import { MdPhoneEnabled } from "react-icons/md";

function UserActivities() {
  return (
    <div className="flex flex-col gap-y-3">
      <div>
        <div className="flex gap-x-4 items-center">
          <span className="font-bold">06 May</span>
          <hr class="border border-gray-300 my-4 w-4/5" />
        </div>
        <div className="flex gap-x-7 items-center">
          <span className="text-gray-500 text-sm ">2:38 PM</span>
          <div className="border rounded-lg p-3 border-gray-400 flex gap-x-4 items-center">
            <MdPhoneEnabled className="text-green-500 text-xl" />
            <div>
              <p className="font-bold">Support Ticket Update</p>
              <p className="text-gray-500">
                Customer service team is working on support ticket #123456
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-x-4 items-center">
          <span className="font-bold">06 May</span>
          <hr class="border border-gray-300 my-4 w-4/5" />
        </div>
        <div className="flex gap-x-7 items-center">
          <span className="text-gray-500 text-sm ">2:38 PM</span>
          <div className="border rounded-lg p-3 border-gray-400 flex gap-x-4 items-center">
            <MdPhoneEnabled className="text-green-500 text-xl" />
            <div>
              <p className="font-bold">Support Ticket Update</p>
              <p className="text-gray-500">
                Customer service team is working on support ticket #123456
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-x-4 items-center">
          <span className="font-bold">06 May</span>
          <hr class="border border-gray-300 my-4 w-4/5" />
        </div>
        <div className="flex gap-x-7 items-center">
          <span className="text-gray-500 text-sm ">2:38 PM</span>
          <div className="border rounded-lg p-3 border-gray-400 flex gap-x-4 items-center">
            <MdPhoneEnabled className="text-green-500 text-xl" />
            <div>
              <p className="font-bold">Support Ticket Update</p>
              <p className="text-gray-500">
                Customer service team is working on support ticket #123456
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserActivities;
