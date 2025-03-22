import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import Shop from "@/components/templates/search/Shop";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
export default async function page({ params }) {
  const { name } = await params;
  connectToDB();
  const products = await ProductModel.find({
    category: "Specialoffers",
    type: name,
  });
  return (
    <>
      <Header />
      <Shop products={JSON.parse(JSON.stringify(products))} />
      <Footer />
    </>
  );
}
