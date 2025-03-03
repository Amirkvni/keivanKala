import Header from "@/components/modules/header/Header";
import LatestProducts from "@/components/templates/index/latest-products/LatestProducts";
import Slider from "@/components/templates/index/slider/Slider";
import SpecialOffers from "@/components/templates/index/special-offers/SpecialOffers";
export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <SpecialOffers />
      <LatestProducts />
    </>
  );
}
