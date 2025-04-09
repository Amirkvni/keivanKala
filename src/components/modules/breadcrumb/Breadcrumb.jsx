"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa6";

function Breadcrumb() {
  const path = usePathname();
  const link = path.split("/")[2];
  const friendlyNames = {
    search: "محصولات",
    "men-pants": "شلوارهای مردانه",
    "men-underwear": "لباس زیرهای مردانه",
    "men-shirts": "پیراهن های مردانه",
    "men-knitwear": "پلیورهای مردانه",
    "men-shorts": "شلوارک های مردانه",
    "men-socks-tights": "جوراب های مردانه",
    "men-ankle-boots": "نیم بوت های مردانه",
    "dos-and-donts-of-wearing-sneakers":
      "۸ نکته برای پوشیدن کفش ورزشی در استایل روزمره که باید بدانید",
    "how-to-wear-converse": "چگونه کفش کتانی کانورس را در استایل خود ست کنیم؟",
    product: "محصولات",
    "how-to-build-a-sustainable-wardrobe":
      "۱۰ نکته برای ساخت یک کمد لباس پایدار",
    "history-of-the-prada-brand":
      "هر آنچه که باید درباره تاریخچه‌ی برند پرادا بدانید",
    blogs: "وبلاگ",
    "asbestos-men-s-shorts-model-asp-box-3col-three-piece-set": "شورت مردانه",
    "arian-men-s-shorts-woven-model-1415-pack-of-3": "شورت مردانه",
    "cleaning-suede-shoes": "انواع کفش جیر را چگونه باید تمیز کنیم؟",
  };
  return (
    <div className="  rounded-lg text-[10px] lg:text-sm 2xl:text-base 2xl:mx-auto  2xl:w-9/12 w-full ">
      <div className="flex items-center gap-x-2  w-fit  p-2.5 mt-[130px] bg-white dark:bg-zinc-800 mx-auto 2xl:mx-0  rounded-lg dark:text-white   ">
        <Link href="/">خانه</Link>
        <FaAngleLeft />
        <Link href="/blogs">وبلاگ</Link>
        <FaAngleLeft />
        <span>{friendlyNames[link]}</span>
      </div>
    </div>
  );
}

export default Breadcrumb;
