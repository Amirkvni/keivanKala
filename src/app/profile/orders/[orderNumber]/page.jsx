import React from "react";

import OrderModel from "@/models/Order";
import connectToDB from "@/configs/db";
import AddressModel from "@/models/Address";
import OrderDetail from "@/components/templates/profile/OrderDetail";
import { authUser } from "@/utils/serverHelpers";
import { notFound } from "next/navigation";
export default async function page({ params }) {
  const { orderNumber } = await params;

  connectToDB();
  const user = await authUser();
  const order = await OrderModel.findOne({
    "delivery.id": orderNumber,
  })
    .populate("user", "firstname lastname phone")
    .populate(
      "products",
      "_id persianName price mainImage secondPrice englishFullName secondPrice"
    );
  if (!order) {
    notFound();
  }
  const address = await AddressModel.findOne(
    {
      userId: user.id,
    },
    "fullAddress"
  );
  return (
    <>
      <OrderDetail
        order={JSON.parse(JSON.stringify(order))}
        address={JSON.parse(JSON.stringify(address))}
      />
    </>
  );
}
