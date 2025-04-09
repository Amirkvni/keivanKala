import React from "react";
import Category from "./Category";
let productCategories = [
  {
    id: 1,
    name: "جوراب مردانه",
    imageUrl: "c1",
    link: "/search/men-socks-tights",
  },
  {
    id: 2,
    imageUrl: "c2",
    name: "جوراب زنانه",
    link: "/search/men-socks-tights",
  },
  {
    id: 3,
    imageUrl: "c3",
    name: " کفش ورزشی مردانه",
    link: "/search/men-casual-shoes",
  },
  {
    id: 4,
    imageUrl: "c4",
    name: "کفش ورزشی زنانه",
    link: "/search/men-casual-shoes",
  },
  {
    id: 5,
    imageUrl: "c5",
    name: "کیف زنانه",
    link: "/search/men-casual-shoes",
  },
  {
    id: 6,
    imageUrl: "c6",
    name: "کیف مردانه",
    link: "/search/men-casual-shoes",
  },
];
export default function Categories() {
  return (
    <div className="my-4 container mx-auto grid xl:grid-cols-6 grid-cols-2 md:grid-cols-3 gap-y-4">
      {productCategories.map((item) => {
        return <Category {...item} key={item.id} />;
      })}
    </div>
  );
}
