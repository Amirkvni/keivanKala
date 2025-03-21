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
    product: "محصولات",
    "asbestos-men-s-shorts-model-asp-box-3col-three-piece-set": "شورت مردانه",
    "arian-men-s-shorts-woven-model-1415-pack-of-3": "شورت مردانه",
  };
  return (
    <div className="px-4 ">
      <div className="flex items-center gap-x-2 w-fit bg-white rounded-lg p-2.5">
        <span>کیوان کالا</span>
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
