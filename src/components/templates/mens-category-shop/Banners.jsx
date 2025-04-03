import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banners() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 container gap-2 mx-auto  [&>a]:bg-red-200">
      <Link href="/">
        <Image
          src="https://ik.imagekit.io/bflkztneat/cc96ba1c7f18386573ac9bca6f0f39f8562d36ff_1720946433.jpg?updatedAt=1742153195219"
          width={1000}
          alt="bag"
          height={1000}
        />
      </Link>

      <Link href="/search/men-eyewear">
        <Image
          src="https://ik.imagekit.io/bflkztneat/746eb868cfb0fffaaea5b4846b1fbaca50cfc20d_1720946334.jpg?updatedAt=1742153145763"
          width={1000}
          height={1000}
          alt="eyewear"
        />
      </Link>

      <Link href="/search/men-knitwear">
        <Image
          src="https://ik.imagekit.io/bflkztneat/6223167b50ac86314431b111182178cc4db42d9f_1720945113.jpg?updatedAt=1742153161863"
          width={1000}
          height={1000}
          alt="knitwear"
        />
      </Link>
      <Link href="/search/men-shorts">
        <Image
          src="https://ik.imagekit.io/bflkztneat/ec4ae5452245c3b79f6c0ac8b6a5ca54f9b216b0_1720945445.jpg?updatedAt=1742153178971"
          width={1000}
          height={1000}
          alt="shorts"
        />
      </Link>
    </div>
  );
}

export default Banners;
