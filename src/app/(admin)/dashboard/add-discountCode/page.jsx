import DiscountCodeForm from "@/components/templates/dashboard/DiscountCodeForm";
import productsModel from "@/models/Product";
import usersModel from "@/models/User";

export default async function Page() {
  const products = await productsModel.find({}, "_id persianName");
  const users = await usersModel.find({}, "_id email");

  return (
    <DiscountCodeForm
      products={JSON.parse(JSON.stringify(products))}
      users={JSON.parse(JSON.stringify(users))}
    />
  );
}
