import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import React, { Suspense } from "react";
import Subcategories from "@/components/modules/subCategories/SubCategories";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import CategorysBreadCrumb from "@/components/modules/CategorysBreadCrumb/CategorysBreadCrumb";
import Shop from "@/components/modules/shop/Shop";
import { menClothingSubCategories } from "@/constants/menClothingSubCategories";
export const revalidate = 3600;

export default async function Page() {
  connectToDB();
  let products = await ProductModel.find({ parentCategory: "men-clothing" });

  return (
    <>
      <Header />
      <CategorysBreadCrumb name="لباس" />
      <Subcategories subCategories={menClothingSubCategories} />
      <Suspense fallback={<p>لودینگ...</p>}>
        <Shop products={JSON.parse(JSON.stringify(products))} />
      </Suspense>
      <Footer />
    </>
  );
}
