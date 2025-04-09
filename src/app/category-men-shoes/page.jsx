import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import React from "react";
import Subcategories from "@/components/modules/subCategories/SubCategories";
import Shop from "@/components/templates/search/Shop";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import CategorysBreadCrumb from "@/components/modules/CategorysBreadCrumb/CategorysBreadCrumb";
export default async function Page() {
  connectToDB();
  let products = await ProductModel.find({ parentCategory: "men-shoes" });
  const subCategories = [
    {
      id: 1,
      address:
        "https://ik.imagekit.io/bflkztneat/190b6150f3710cdb407c5b99ba446690c5f4292a_1713352011.jpg?updatedAt=1743700322509",
      name: "کفش روزمره مردانه",
      link: "/search/men-casual-shoes",
    },

    {
      id: 2,
      address:
        "https://ik.imagekit.io/bflkztneat/afasf.jpg?updatedAt=1743700513054",
      name: "دمپایی مردانه",
      link: "/search/men-slippers",
    },

    {
      id: 3,
      address:
        "https://ik.imagekit.io/bflkztneat/aaaf.jpg?updatedAt=1743700515592",
      name: "بوت مردانه",
      link: "/search/men-boots",
    },
    {
      id: 4,
      address:
        "https://ik.imagekit.io/bflkztneat/ss.jpg?updatedAt=1743700512399",
      link: "/search/men-ankle-boots",
      name: "نیم بوت مردانه",
    },
    {
      id: 5,
      address:
        "https://ik.imagekit.io/bflkztneat/ff2f076be6ded436a14cc1d4e5e48e79b78508ef_1610993916.jpg?updatedAt=1743700316203",
      link: "/search/men-casual-shoes",
      name: "کفش ورزشی مردانه",
    },
    {
      id: 6,
      address:
        "https://ik.imagekit.io/bflkztneat/18d7f7875a74e677a761d3dc93f316d4b01fa097_1696930244.jpg?updatedAt=1743700314752",
      name: "کفش کالج مردانه",
      link: "/search/men-casual-shoes",
    },
    {
      id: 7,
      address:
        "https://ik.imagekit.io/bflkztneat/7edd41c6c89f1cf4d679532d8b9b6d23bf2e4778_1650874464.jpg?updatedAt=1743700314267",
      name: "صندل مردانه",
      link: "/search/men-sandals",
    },
    {
      id: 8,
      address:
        "https://ik.imagekit.io/bflkztneat/30e6759184e8816c6738bf5f1aee5ab494bab030_1659676049.jpg?updatedAt=1743700324578",
      name: "گیوه مردانه",
      link: "/search/men-casual-shoes",
    },
    {
      id: 9,
      address:
        "https://ik.imagekit.io/bflkztneat/eda912e1adb9b9ffd3c8a449c03f276ad4e5dd4d_1621328550.jpg?updatedAt=1743700799326",
      name: "دمپایی لاانگشتی مردانه",
      link: "/search/men-casual-shoes",
    },
  ];
  return (
    <>
      <Header />
      <CategorysBreadCrumb name="کفش" />
      <Subcategories subCategories={subCategories} />
      <Shop products={JSON.parse(JSON.stringify(products))} />
      <Footer />
    </>
  );
}
