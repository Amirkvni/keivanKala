import Header from "@/components/modules/header/Header";
import BreadCrumb from "@/components/templates/checkout-cart/BreadCrumb";
import ShippingMethod from "@/components/templates/checkout-cart/ShippingMethod";
import { authUser } from "@/utils/serverHelpers";
import React from "react";

export default async function page() {
  const user = await authUser();

  return (
    <>
      <Header />
      <BreadCrumb />
      <ShippingMethod user={JSON.parse(JSON.stringify(user))} />
    </>
  );
}
