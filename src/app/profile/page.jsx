import SummaryOfActivities from "@/components/templates/profile/SummaryOfActivities";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import OrderModel from "@/models/Order";
export default async function page() {
  connectToDB();
  const user = await authUser();
  const orders = await OrderModel.find({ user: user._id });

  return (
    <>
      <SummaryOfActivities orders={JSON.parse(JSON.stringify(orders))} />
    </>
  );
}
