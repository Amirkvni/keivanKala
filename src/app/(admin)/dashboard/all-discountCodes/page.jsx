import DiscountCodesList from "@/components/templates/dashboard/all-discountCodes/DiscountCodesList";
import React from "react";
import discountcodesModel from "@/models/DiscountCode";
export default async function Page() {
  const discountCodes = await discountcodesModel.find({});
  return (
    <DiscountCodesList
      discountCodes={JSON.parse(JSON.stringify(discountCodes))}
    />
  );
}
