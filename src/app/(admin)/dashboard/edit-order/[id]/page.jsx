import EditOrderPage from "@/components/templates/dashboard/edit-order/EditOrderPage";
import ProductModel from "@/models/Product";
import OrderModel from "@/models/Order";
import AddressModel from "@/models/Address";

export default async function Page({ params }) {
  const { id } = await params;
  const allProducts = await ProductModel.find(
    {},
    "persianName price secondPrice stock mainImage"
  );
  const orderProducts = await OrderModel.findOne(
    { _id: id },
    "payment user status"
  )
    .populate("payment", "products")
    .populate("user", "email firstname lastname phone");
  const userAddress = await AddressModel.findOne({
    userId: orderProducts.user._id,
  });

  return (
    <EditOrderPage
      allProducts={JSON.parse(JSON.stringify(allProducts))}
      orderProducts={JSON.parse(JSON.stringify(orderProducts.payment.products))}
      user={JSON.parse(JSON.stringify(orderProducts.user))}
      userAddress={JSON.parse(JSON.stringify(userAddress))}
      staus={JSON.parse(JSON.stringify(orderProducts.status))}
      orderId={JSON.parse(JSON.stringify(orderProducts._id))}
    />
  );
}
