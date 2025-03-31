import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import Banners from "@/components/templates/mens-category-shop/Banners";
import Categories from "@/components/templates/mens-category-shop/Categories";
import Slider from "@/components/templates/mens-category-shop/slider/Slider";
import React from "react";

function page() {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <Banners />
      <Footer/>
    </>
  );
}

export default page;
