import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import React, { Suspense } from "react";
import Subcategories from "@/components/modules/subCategories/SubCategories";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import CategorysBreadCrumb from "@/components/modules/CategorysBreadCrumb/CategorysBreadCrumb";
import Shop from "@/components/modules/shop/Shop";
import { menShoesSubCategories } from "@/constants/menShoesSubCategories";

export const revalidate = 3600;

export default async function Page() {
  connectToDB();
  let products = await ProductModel.find({ parentCategory: "men-shoes" });

  return (
    <>
      <Header />
      <CategorysBreadCrumb name="کفش" />
      <Subcategories subCategories={menShoesSubCategories} />
      <Suspense fallback={<p>در حال بارگذاری...</p>}>
        <Shop products={JSON.parse(JSON.stringify(products))} />
      </Suspense>
      <Footer />
    </>
  );
}
