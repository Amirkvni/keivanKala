import OrderDetails from "@/components/templates/dashboard/all-orders/OrderDetails";
import OrderModel from "@/models/Order";
import AddressModel from "@/models/Address";
import UserModel from "@/models/User";

async function Page({ params }) {
  const { id } = await params;
  const order = await OrderModel.findOne({ _id: id })
    .populate("products", "mainImage persianName price secondPrice")
    .populate("payment", "discount paid products")
    .populate("user", "firstname lastname email phone profileUrl");
  const userId = await UserModel.findOne({ _id: order.user._id }, "_id");
  const userAddress = await AddressModel.findOne(
    { userId: userId._id },
    "-userId -__v"
  );

  return (
    <OrderDetails
      order={JSON.parse(JSON.stringify(order))}
      userAddress={JSON.parse(JSON.stringify(userAddress))}
    />
  );
}

export default Page;
