"use client";
import BasicInfoForm from "@/components/templates/dashboard/product-creation/BasicInfoForm";
import PricingSection from "@/components/templates/dashboard/product-creation/PricingSection";
import ProductAttributes from "@/components/templates/dashboard/product-creation/ProductAttributes";
import React, { useState } from "react";
import Uploader from "@/components/templates/dashboard/product-creation/Uploader";
import ColorSelector from "@/components/templates/dashboard/product-creation/ColorSelector";
import AdditionalAttributes from "@/components/templates/dashboard/product-creation/AdditionalAttributes";
import ActionButtons from "@/components/templates/dashboard/product-creation/ActionButtons";
function CreateProductPage() {
  const [mainProduct, setMainProduct] = useState({
    attributes: {
      عنوان: "توضیحات",
    },
  });
  return (
    <div className="p-12">
      <span className="text-xl font-bold">ایجاد محصول</span>
      <div className="flex gap-x-2 mt-5 [&>div]:p-4 [&>div]:rounded-lg ">
        <div className="w-8/12  flex flex-col gap-y-4  [&>div]:p-6">
          <BasicInfoForm
            setMainProduct={setMainProduct}
            mainProduct={mainProduct}
          />
          <ProductAttributes
            setMainProduct={setMainProduct}
            mainProduct={mainProduct}
            attributes={mainProduct.attributes}
          />
          <div className="grid grid-cols-2 gap-x-5 [&>div]:bg-white [&>div]:p-4 [&>div]:rounded-lg ">
            <ColorSelector colors={[]} setMainProduct={""} mainProduct={""} />
            <PricingSection
              setMainProduct={setMainProduct}
              mainProduct={mainProduct}
            />
          </div>
        </div>
        <div className="w-4/12  flex flex-col gap-y-4  [&>div]:p-4  [&>div]:rounded-lg ">
          <Uploader />
          <AdditionalAttributes
            mainProduct={mainProduct}
            setMainProduct={setMainProduct}
          />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}

export default CreateProductPage;
