"use client";
import { usePathname, useRouter } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa6";

function Breadcrumb() {
  const path = usePathname();
  const pathSegments = path.split("/").filter((segment) => segment !== "");
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
    <div className="2xl:px-2 container mx-auto text-sm 2xl:text-base">
      <div className="flex items-center gap-x-2 w-fit bg-white rounded-lg p-2.5 mt-[140px]">
        <span>خانه</span>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const friendlyName = friendlyNames[segment] || segment;
          return (
            <>
              <FaAngleLeft />
              <span>{friendlyName}</span>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Breadcrumb;
