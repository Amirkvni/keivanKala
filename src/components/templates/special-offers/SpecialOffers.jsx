"use client";
import React, { useEffect, useState } from "react";
import ProductFilter from "@/components/modules/productfilter/ProductFilter";
import SelectedProducts from "./SelectedProducts";
import ProductsSortView from "@/components/modules/productsSortView/ProductsSortView";

function SpecialOffers({ products }) {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isMobileFiltersActive, setIsMobileFiltersActive] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const filteredData = products.filter(
        (product) => new Date(product.expireTime) > new Date()
      );
      setSelectedProducts([...filteredData]);
      setAllProducts([...products]);
    };
    getProducts();
  }, []);

  return (
    <>
      <SelectedProducts selectedProducts={selectedProducts} />
      <div className="container mx-auto my-10">
        <div className=" flex 2xl:flex-row flex-col gap-y-3 2xl:gap-x-4">
          <ProductFilter
            isMobileFiltersActive={isMobileFiltersActive}
            setIsMobileFiltersActive={setIsMobileFiltersActive}
          />
          <ProductsSortView
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            setIsMobileFiltersActive={setIsMobileFiltersActive}
          />
        </div>
      </div>
    </>
  );
}

export default SpecialOffers;
