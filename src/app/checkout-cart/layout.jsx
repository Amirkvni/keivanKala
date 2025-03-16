import Header from "@/components/modules/header/Header";
import BreadCrumb from "@/components/templates/checkout-cart/BreadCrumb";
import { authUser } from "@/utils/serverHelpers";
import { redirect } from "next/navigation";

export default async function CheckoutCartLayout({ children }) {
  const user = await authUser();

  return (
    <>
      <Header isLogin={user ? true : false} />
      <BreadCrumb />
      {children}
    </>
  );
}
