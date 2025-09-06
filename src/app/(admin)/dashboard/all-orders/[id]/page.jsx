import OrderDetails from "@/components/templates/dashboard/all-orders/OrderDetails";
import OrderModel from "@/models/Order";
import AddressModel from "@/models/Address";
import UserModel from "@/models/User";

async function Page({ params }) {
  const { id } = params;
  const order = await OrderModel.findOne({ _id: id })
    .populate("products")
    .populate("payment", "discount paid")
    .populate("user", "firstname lastname email phone");
  const userId = await UserModel.findOne({ _id: order.user._id }, "_id");
  const userAddress = await AddressModel.findOne(
    { userId: userId._id },
    "-userId -__v"
  );
  console.log(order);

  return <OrderDetails order={order} userAddress={userAddress} />;
}

export default Page;
