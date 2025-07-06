import Orders from "@/components/templates/profile/Orders";
import React from "react";
import OrderModel from "@/models/Order";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";

export default async function page({ searchParams }) {
  const activeTab = searchParams.activeTab || "current";
  connectToDB();
  const user = await authUser();
  const orders = await OrderModel.find({ user: user._id }).populate(
    "products",
    "mainImage englishFullName"
  );

  let filteredOrders = orders;
  if (activeTab === "delivered") {
    filteredOrders = orders.filter((o) => o.status === "delivered");
  } else if (activeTab === "canceled") {
    filteredOrders = orders.filter((o) => o.status === "canceled");
  } else if (activeTab === "returned") {
    filteredOrders = orders.filter((o) => o.status === "returned");
  } else if (activeTab === "current") {
    filteredOrders = orders.filter((o) => o.status === "current");
  }
  return (
    <Orders
      activeOrder={activeTab}
      orders={JSON.parse(JSON.stringify(filteredOrders))}
    />
  );
}
