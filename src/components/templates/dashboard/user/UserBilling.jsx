import React from "react";

function UserBilling() {
  return (
    <div className="flex flex-col gap-y-4 [&>div>div]:mt-4">
      <div>
        <span>سابقه خرید</span>
        <div className="divide-y divide-gray-400 [&>div]:grid [&>div]:grid-cols-4 [&>div]:text-center">
          <div>
            <span>Acme pro plan (monthly)</span>
            <span>pending</span>
            <span>02/09/2025</span>
            <span>$59.90</span>
          </div>
          <div>
            <span>Acme pro plan (monthly)</span>
            <span>pending</span>
            <span>02/09/2025</span>
            <span>$59.90</span>
          </div>
          <div>
            <span>Acme pro plan (monthly)</span>
            <span>pending</span>
            <span>02/09/2025</span>
            <span>$59.90</span>
          </div>
          <div>
            <span>Acme pro plan (monthly)</span>
            <span>pending</span>
            <span>02/09/2025</span>
            <span>$59.90</span>
          </div>
        </div>
      </div>
      <div>
        <span>آدرس ها</span>
        <div className="grid grid-cols-2 gap-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-y-1 [&>div]:rounded-lg [&>div]:border [&>div]:border-gray-400 [&>div]:p-3 ">
          <div>
            <span> Billing Address</span>
            <span>123 Main St</span>
            <span>New York</span>
            <span>10001</span>
            <span> United States</span>
          </div>
          <div>
            <span> Billing Address</span>
            <span>123 Main St</span>
            <span>New York</span>
            <span>10001</span>
            <span> United States</span>
          </div>
        </div>
      </div>
      <div>
        <span>روش‌های پرداخت</span>
        <div className="border rounded-lg [&>div]:my-3 [&>div]:flex [&>div]:pb-5 [&>div]:justify-between [&>div]:px-5 [&>div]:items-center p-5 divide-y divide-gray-200  [&>div>button]:border [&>div>button]:rounded-lg [&>div>button]:text-xs [&>div>button]:p-1 border-gray-400">
          <div>
            <button>ویرایش</button>
            <div>کیر</div>
          </div>{" "}
          <div>
            <button>ویرایش</button>
            <div>کیر</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBilling;
