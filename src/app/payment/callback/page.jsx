"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function CallbackPage() {
  const params = useSearchParams();
  const [message, setMessage] = useState("در حال بررسی پرداخت...");

  useEffect(() => {
    const status = params.get("Status");
    const authority = params.get("Authority");

    if (status === "OK") {
      // اینجا می‌تونی درخواست Verify بزنی به API خودت
      setMessage("پرداخت موفق بود 🎉");
    } else {
      setMessage("پرداخت انجام نشد ❌");
    }
  }, [params]);

  return <div className="text-center mt-10 text-lg font-bold">{message}</div>;
}
