import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import SpecialOffers from "@/components/templates/special-offers/SpecialOffers";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";

export default async function page() {
  connectToDB();
  const products = await ProductModel.find({
    category: "Specialoffers",
  });
  return (
    <>
      <Header />
      <SpecialOffers products={JSON.parse(JSON.stringify(products))} />
      <Footer />
    </>
  );
}
