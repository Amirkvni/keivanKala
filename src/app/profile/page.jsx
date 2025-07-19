import SummaryOfActivities from "@/components/templates/profile/SummaryOfActivities";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import AddressModel from "@/models/Address";
import OrderModel from "@/models/Order";
import WishlistsModel from "@/models/Wishlist";
import NotificationsModel from "@/models/Notification";
import TicketModel from "@/models/Contact";
export default async function page() {
  connectToDB();
  const user = await authUser();

  const orders = await OrderModel.find({ user: user._id });
  const userAddressesCount = await AddressModel.countDocuments({
    userId: user._id,
  });
  const userWishlistsCount = await WishlistsModel.countDocuments({
    user: user._id,
  });
  const userNotifications = await NotificationsModel.countDocuments({
    userId: user._id,
  });
  const userTickets = await TicketModel.find({
    user: user._id,
  });

  return (
    <>
      <SummaryOfActivities
        orders={JSON.parse(JSON.stringify(orders))}
        userTickets={JSON.parse(JSON.stringify(userTickets))}
        userAddressesCount={userAddressesCount}
        userWishlistsCount={userWishlistsCount}
        userNotifications={userNotifications}
      />
    </>
  );
}
