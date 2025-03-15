import Header from "@/components/modules/header/Header";
import BreadCrumb from "@/components/templates/checkout-cart/BreadCrumb";
import CartList from "@/components/templates/checkout-cart/CartList";
import { authUser } from "@/utils/serverHelpers";
import React from "react";

export default async function page() {
  const user = await authUser();
  return (
    <>
      <Header />
      <BreadCrumb />
      <CartList isLogin={user ? true : false} />
    </>
  );
}
