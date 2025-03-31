import Image from "next/image";
import Link from "next/link";
import React from "react";

function Categories() {
  return (
    <div className="container mx-auto 2xl:my-12 my-3 ">
      <h3 className="text-center text-3xl font-semibold">دسته بندی ها</h3>
      <div className="flex flex-wrap 2xl:gap-x-3 2xl:[&>a]:w-58 gap-x-2 dark:[&>a]:text-white [&>a>p]:text-xs  [&>a]:w-32 [&>a]:g-42 2xl:[&>a]:h-68 [&>a]:border [&>a]:border-gray-300 dark:[&>a]:border-black dark:[&>a]:bg-white dark:[&>a>p]:text-black  [&>a]:rounded-lg justify-center mt-3 [&>a]:p-3 2xl:[&>a>p]:text-xl [&>a>p]:pt-3">
        <Link href="/search/men-shirts">
          <div>
            <Image
              src="https://ik.imagekit.io/bflkztneat/fa90978f15e7740f9f21d73c687783fd98fdd53e_1729295331.jpg?updatedAt=1742152507050"
              width={400}
              height={400}
            />
          </div>
          <p>لباس مردانه</p>
        </Link>
        <Link href="/search/men-casual-shoes">
          <div>
            <Image
              src={
                "https://ik.imagekit.io/bflkztneat/3f68a9100fca245f0c428f66fe0fbac9cd394feb_1729295341.jpg?updatedAt=1742152446573"
              }
              width={400}
              height={400}
            />
          </div>
          <p>کفش مردانه</p>
        </Link>
        <Link href="/search/men-eyewear">
          <div>
            <Image
              width={400}
              height={400}
              src="https://ik.imagekit.io/bflkztneat/da73ad1e8e8414d9926a39716ab0f37bcaf11350_1729295353.jpg?updatedAt=1742152488024"
            />
          </div>
          <p>اکسسوری مردانه</p>
        </Link>
        <Link href="/search/men-shorts">
          <div>
            <Image
              width={400}
              height={400}
              src="https://ik.imagekit.io/bflkztneat/571360f029529c71016d2dd295ffce0da71f4480_1729295360.jpg?updatedAt=1742152461812"
            />
          </div>
          <p>ورزشی مردانه</p>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
