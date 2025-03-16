import CartList from "@/components/templates/checkout-cart/CartList";
import { authUser } from "@/utils/serverHelpers";
import React from "react";

export default async function page() {
  const user = await authUser();
  return (
    <>
      <CartList isLogin={user ? true : false} />
    </>
  );
}
