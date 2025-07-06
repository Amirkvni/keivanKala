import Link from "next/link";
import OrderPreview from "./OrderPreview";

function Orders({ activeOrder, orders }) {
  const tabs = [
    { id: "current", label: "فعلی" },
    { id: "delivered", label: "تحویل شده" },
    { id: "canceled", label: "لغو شده" },
    { id: "returned", label: "مرجوع شده" },
  ];
  const renderOrders = () => {
    if (orders.length === 0) {
      return (
        <div className="border-none flex justify-center items-center m-6">
          هیچ سفارشی وجود ندارد.
        </div>
      );
    }

    return orders.map((order) => <OrderPreview key={order._id} {...order} />);
  };
  return (
    <div className="flex flex-col gap-y-8 2xl:p-3 2xl:w-3/4 w-full rounded-sm shadow-2xl dark:bg-zinc-800 dark:text-white">
      <span className=" border-b-green-400 pb-2 border-b-3 w-fit">
        سفارش های شما
      </span>
      <div className="flex gap-x-3 [&>a]:cursor-pointer [&>a]:p-2 text-xs 2xl:text-base">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={`?activeTab=${tab.id}`}
            className={`${
              activeOrder === tab.id
                ? "border-b-2 border-b-green-400"
                : "border-b-2 border-b-transparent"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
      <div>
        <div className="flex flex-col gap-y-4 [&>div]:border [&>div]:rounded-lg [&>div]:p-2">
          {["current", "delivered", "canceled", "returned"].includes(
            activeOrder
          ) && renderOrders()}
        </div>
      </div>
    </div>
  );
}
export default Orders;
