import BasicInfoForm from "@/components/templates/dashboard/product-creation/BasicInfoForm";
import PricingSection from "@/components/templates/dashboard/product-creation/PricingSection";
import ProductAttributes from "@/components/templates/dashboard/product-creation/ProductAttributes";
import React from "react";
import Uploader from "@/components/templates/dashboard/product-creation/Uploader";
import ColorSelector from "@/components/templates/dashboard/product-creation/ColorSelector";
import AdditionalAttributes from "@/components/templates/dashboard/product-creation/AdditionalAttributes";
import ActionButtons from "@/components/templates/dashboard/product-creation/ActionButtons";
function EditProductPage({ product }) {
  return (
    <div className="p-12">
      <span className="text-xl font-bold">ویرایش محصول </span>
      <div className="flex gap-x-2 mt-5 [&>div]:p-4 [&>div]:rounded-lg ">
        <div className="w-8/12  flex flex-col gap-y-4  [&>div]:p-6">
          <BasicInfoForm
            persianName={product.persianName}
            englishFullName={product.englishFullName}
          />

          <ProductAttributes attributes={product.attributes} />
          <div className="grid grid-cols-2 gap-x-5 [&>div]:bg-white [&>div]:p-4 [&>div]:rounded-lg ">
            <ColorSelector colors={product.colors} />
            <PricingSection
              price={product.price}
              secondPrice={product.secondPrice}
            />
          </div>
        </div>
        <div className="w-4/12  flex flex-col gap-y-4  [&>div]:p-4  [&>div]:rounded-lg ">
          <Uploader />
          <AdditionalAttributes
            category={product.category}
            parentCategory={product.parentCategory}
          />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}

export default EditProductPage;
