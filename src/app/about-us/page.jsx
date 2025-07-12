import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import Description from "@/components/templates/about-us/Description";
import React from "react";

export const dynamic = "force-static";
export default function page() {
  return (
    <>
      <Header />
      <Description />
      <Footer />
    </>
  );
}
