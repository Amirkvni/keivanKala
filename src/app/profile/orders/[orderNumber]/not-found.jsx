import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center   2xl:w-3/4 w-full rounded-sm shadow-2xl dark:bg-zinc-800 dark:text-white">
      <div className="flex flex-col gap-y-3 items-center">
        <span> سفارش مورد نظر یافت نشد !!</span>
        <Link
          href="/profile/orders/"
          className="bg-green-400 p-2 rounded-sm text-white hover:bg-green-600"
        >
          بازگشت
        </Link>
      </div>
    </div>
  );
}
