"use client";
import Header from "@/components/modules/header/Header";
import React, { Suspense } from "react";
import ClientSuccess from "./ClientSuccess";

function Page() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>لودینگ .....</p>}>
        <ClientSuccess />
      </Suspense>
    </>
  );
}

export default Page;
