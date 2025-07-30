import DashboardProducts from "@/components/templates/dashboard/all-products/DashboardProducts";
import ProductsModel from "@/models/Product";
export default async function page() {
  const allProducts = await ProductsModel.find(
    {},
    "persianName englishFullName mainImage price stock sales"
  );

  return (
    <DashboardProducts allProducts={JSON.parse(JSON.stringify(allProducts))} />
  );
}
