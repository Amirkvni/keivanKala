"use client";
import React, { useState } from "react";
import { RangeSlider } from "next-range-slider";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { priceFormatter } from "@/utils/priceFormatter";

function PriceSlider() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [low, setLow] = useState(Number(searchParams.get("min-price") || 0));
  const [high, setHigh] = useState(
    Number(searchParams.get("max-price") || 10_000_000)
  );
  return (
    <div>
      <RangeSlider
        dir="ltr"
        min={0}
        max={10_000_000}
        step={100_000}
        options={{
          leftInputProps: {
            value: low,
            onChange: (e) => {
              const newLow = Number(e.target.value);
              if (newLow <= high) {
                setLow(newLow);
              }
              const params = new URLSearchParams(searchParams);

              params.set("min-price", newLow);

              router.push(`?${params.toString()}`);
            },
          },
          rightInputProps: {
            value: high,
            onChange: (e) => {
              const newHigh = Number(e.target.value);
              if (newHigh >= low) {
                setHigh(newHigh);
              }
              const params = new URLSearchParams(searchParams);

              params.set("max-price", newHigh);

              router.push(`?${params.toString()}`);
            },
          },
          thumb: {
            background: "#36d67e",
            focusBackground: "#36d67e",
            width: "20px",
            height: "20px",
          },
          track: {
            height: "6px",
            background: "gray",
          },
          range: { background: "#36d67e" },
        }}
      />
      <div className=" flex items-center justify-between [&>input]:w-[130px]  text-xs [&>input]:outline-none">
        <input type="text" value={priceFormatter(high)} readOnly />
        <span>تا</span>
        <input type="text" value={priceFormatter(low)} readOnly />
      </div>
    </div>
  );
}

export default PriceSlider;
