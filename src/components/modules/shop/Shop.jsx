"use client";
import ProductFilter from "@/components/modules/productfilter/ProductFilter";
import ProductsSortView from "@/components/modules/productsSortView/ProductsSortView";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function Shop({ products }) {
  const path = usePathname();
  const [allProducts, setAllProducts] = useState([]);
  const [isMobileFiltersActive, setIsMobileFiltersActive] = useState(false);
  useEffect(() => {
    setAllProducts(products);
  }, [products]);
  return (
    <div
      className={`container mx-auto  ${
        !path.startsWith("/category") ? "mt-[140px]" : "mt-4"
      } `}
    >
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
  );
}

export default Shop;
