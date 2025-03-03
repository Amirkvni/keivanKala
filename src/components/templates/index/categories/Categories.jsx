import React from "react";
import Category from "./Category";
let productCategories = [
  {
    id: 1,
    name: "جوراب مردانه",
    imageUrl: "c1",
  },
  {
    id: 2,
    imageUrl: "c2",
    name: "کفش ورزشی مردانه",
  },
  {
    id: 3,
    imageUrl: "c3",
    name: "کیف مردانه",
  },
  {
    id: 4,
    imageUrl: "c4",
    name: "جوراب زنانه",
  },
  {
    id: 5,
    imageUrl: "c5",
    name: "کفش ورزشی زنانه",
  },
  {
    id: 6,
    imageUrl: "c6",
    name: "کیف زنانه",
  },
];
export default function Categories() {
  return (
    <div className="my-4 container mx-auto flex justify-between flex-wrap px-5 items-center gap-y-3">
      {productCategories.map((item) => {
        return <Category {...item} key={item.id} />;
      })}
    </div>
  );
}
