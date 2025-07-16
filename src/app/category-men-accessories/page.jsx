import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import React, { Suspense } from "react";
import Subcategories from "@/components/modules/subCategories/SubCategories";
import Shop from "@/components/modules/shop/Shop";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import CategorysBreadCrumb from "@/components/modules/CategorysBreadCrumb/CategorysBreadCrumb";
import { menAccessoriesSubCategories } from "@/constants/menAccessoriesSubCategories";
export const revalidate = 3600;

export default async function Page() {
  connectToDB();
  let products = await ProductModel.find({ parentCategory: "men-accessories" });

  return (
    <>
      <Header />
      <CategorysBreadCrumb name="اکسسوری" />
      <Subcategories subCategories={menAccessoriesSubCategories} />
      <Suspense fallback={<p>در حال بارگذاری...</p>}>
        <Shop products={JSON.parse(JSON.stringify(products))} />
      </Suspense>
      <Footer />
    </>
  );
}
