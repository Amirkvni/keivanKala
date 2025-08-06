import EditProductPage from "@/components/templates/dashboard/EditProductPage";
import productModel from "@/models/Product";
export default async function page({ params }) {
  const { id } = await params;

  const product = await productModel.findOne(
    { _id: id },
    "persianName englishFullName price secondPrice stock category images attributes colors parentCategory mainImage"
  );

  return <EditProductPage product={JSON.parse(JSON.stringify(product))} />;
}
