import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import Shop from "@/components/modules/shop/Shop";
import React from "react";
import connectToDB from "@/configs/db";

import ProductModel from "@/models/Product";
export default async function page({ searchParams }) {
  const q = searchParams.q;
  connectToDB();
  const products = await ProductModel.find({
    $or: [
      { persianName: { $regex: q, $options: "i" } },
      { englishFullName: { $regex: q, $options: "i" } },
    ],
  }).limit(10);
  return (
    <>
      <Header />
      <Shop products={JSON.parse(JSON.stringify(products))} />
      <Footer />
    </>
  );
}
