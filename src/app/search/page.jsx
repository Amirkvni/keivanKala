import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import Shop from "@/components/modules/shop/Shop";
import React from "react";
import connectToDB from "@/configs/db";

import ProductModel from "@/models/Product";
export default async function page({ searchParams }) {
  const q = (searchParams.q || "").trim();
  connectToDB();
  const products = await ProductModel.find({
    $or: [
      { persianName: { $regex: q, $options: "i" } },
      { englishFullName: { $regex: q, $options: "i" } },
    ],
  });
  return (
    <>
      <Header />
      {!q ? (
        <div className="container mt-[240px] text-center text-gray-500 h-[400px]">
          لطفاً یک عبارت برای جستجو وارد کنید!!!
        </div>
      ) : (
        <Shop products={JSON.parse(JSON.stringify(products))} />
      )}
      <Footer />
    </>
  );
}
