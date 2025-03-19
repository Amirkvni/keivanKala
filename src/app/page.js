import Footer from "@/components/modules/footer/footer";
import Header from "@/components/modules/header/Header";
import Banners from "@/components/templates/index/baners/Baners";
import BestSellingProducts from "@/components/templates/index/best-selling-products/BestSellingProducts";
import Blogs from "@/components/templates/index/blogs/Blogs";
import Categories from "@/components/templates/index/categories/Categories";
import LatestProducts from "@/components/templates/index/latest-products/LatestProducts";
import Slider from "@/components/templates/index/slider/Slider";
import SpecialOffers from "@/components/templates/index/special-offers/SpecialOffers";
import { authUser } from "@/utils/serverHelpers";
export default async function Home() {
  const user = await authUser();

  return (
    <>
      <Header isLogin={user ? true : false} />
      <Slider />
      <SpecialOffers />
      <LatestProducts />
      <Banners />
      <Categories />
      <BestSellingProducts />
      <Blogs />
      <Footer />
    </>
  );
}
