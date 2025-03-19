import Header from "@/components/modules/header/Header";
import connectToDB from "@/configs/db";
import React from "react";
import ProductModel from "@/models/Product";
import Shop from "@/components/templates/search/Shop";
import Footer from "@/components/modules/footer/Footer";
export default async function page({ params }) {
  const { name } = await params;

  connectToDB();
  let products = await ProductModel.find({ category: name });

  return (
    <>
      <Header />
      <Shop products={JSON.parse(JSON.stringify(products))} />
      <Footer />
    </>
  );
}
