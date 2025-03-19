import Header from "@/components/modules/header/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-[230px] w-[350px] flex flex-col gap-y-4">
        <h1 className="text-center text-9xl font-bold">404</h1>
        <p className="text-xl text-center">
          صفحه ای که دنبال آن بودید پیدا نشد
        </p>
        <Link
          href="/"
          className="bg-green-700 text-white rounded-lg p-2 w-fit  mx-auto"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </>
  );
}
