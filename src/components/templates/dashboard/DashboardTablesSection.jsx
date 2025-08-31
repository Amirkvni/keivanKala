import React from "react";
import UserModel from "@/models/User";
import CommentModel from "@/models/Comment";
import ProductModel from "@/models/Product";
import DashboardTablesClient from "./DashboardTablesClient";
export default async function DashboardTablesSection() {
  const recentUsers = await UserModel.find(
    {},
    "firstname lastname role phone createdAt"
  )
    .populate("role", "name")
    .sort({ createdAt: -1 })
    .limit(20);

  const recentComments = await CommentModel.find({}, "username date  isAccept ")
    .populate("productID", "mainImage -_id")
    .sort({ date: -1 })
    .limit(20);
  const bestSellingProducts = await ProductModel.find(
    {},
    "mainImage sales stock price"
  )
    .sort({ sales: -1 })
    .limit(20);

  return (
    <DashboardTablesClient
      recentUsers={JSON.parse(JSON.stringify(recentUsers))}
      recentComments={JSON.parse(JSON.stringify(recentComments))}
      bestSellingProducts={JSON.parse(JSON.stringify(bestSellingProducts))}
    />
  );
}
