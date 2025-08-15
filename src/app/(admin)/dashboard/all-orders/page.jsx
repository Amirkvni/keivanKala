import DashboardOrders from "@/components/templates/dashboard/all-orders/DashboardOrders";
import OrderModel from "@/models/Order";
async function Page() {
  const allOredrs = await OrderModel.find({})
    .populate("user", "email")
    .populate({
      path: "products",
      select: "mainImage",
    });

  return <DashboardOrders allOredrs={JSON.parse(JSON.stringify(allOredrs))} />;
}

export default Page;
