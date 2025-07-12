import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import Description from "@/components/templates/about-us/Description";
import { authUser } from "@/utils/serverHelpers";
import React from "react";

export default async function page() {
  const user = await authUser();

  return (
    <>
      <Header isLogin={user ? true : false} />
      <Description />
      <Footer />
    </>
  );
}
