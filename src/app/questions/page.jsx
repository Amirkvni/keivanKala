import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import QuestionBox from "@/components/templates/questions/QuestionBox";
import React, { Suspense } from "react";

export default function page() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>لودینگ .....</p>}>
        <QuestionBox />
      </Suspense>
      <Footer />
    </>
  );
}
