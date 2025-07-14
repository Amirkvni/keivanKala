import React from "react";
import Category from "./Category";
let productCategories = [
  {
    id: 1,
    name: "جوراب مردانه",
    imageUrl:
      "https://ik.imagekit.io/bflkztneat/c1.jpg?updatedAt=1752512921954",
    link: "/search/men-socks-tights",
  },
  {
    id: 2,
    imageUrl:
      "https://ik.imagekit.io/bflkztneat/c2.jpg?updatedAt=1752512919394",
    name: "جوراب زنانه",
    link: "/search/men-socks-tights",
  },
  {
    id: 3,
    imageUrl:
      "https://ik.imagekit.io/bflkztneat/c3.jpg?updatedAt=1752512922229",
    name: " کفش ورزشی مردانه",
    link: "/search/men-casual-shoes",
  },
  {
    id: 4,
    imageUrl:
      "https://ik.imagekit.io/bflkztneat/c4.jpg?updatedAt=1752512922693",
    name: "کفش ورزشی زنانه",
    link: "/search/men-casual-shoes",
  },
  {
    id: 5,
    imageUrl:
      "https://ik.imagekit.io/bflkztneat/c5.jpg?updatedAt=1752512918748",
    name: "کیف زنانه",
    link: "/search/men-casual-shoes",
  },
  {
    id: 6,
    imageUrl:
      "https://ik.imagekit.io/bflkztneat/c6.jpg?updatedAt=1752513387297",
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
