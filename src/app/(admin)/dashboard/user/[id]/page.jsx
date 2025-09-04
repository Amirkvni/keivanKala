import UserBiography from "@/components/templates/dashboard/user/UserBiography";
import UserProfile from "@/components/templates/dashboard/user/UserProfile";
import UserModel from "@/models/User";
import AddressModel from "@/models/Address";
import OrderModel from "@/models/Order";
async function Page({ params }) {
  const { id } = params;
  const user = await UserModel.findOne(
    { _id: id },
    "email phone birthday lastLogin socials firstname lastname profileUrl"
  );
  const userPurchases = await OrderModel.find(
    { user: id },
    "payment orderDate status _id products"
  )
    .populate("payment", "paid")
    .populate("products", "mainImage");
  const userAddresses = await AddressModel.find({ userId: id }, "fullAddress");

  return (
    <div className="p-12">
      <div className=" gap-x-6 [&>div]:rounded-sm  [&>div]: mt-6 flex">
        <UserBiography user={user} />
        <UserProfile
          userPurchases={JSON.parse(JSON.stringify(userPurchases))}
          userAddresses={JSON.parse(JSON.stringify(userAddresses))}
        />
      </div>
    </div>
  );
}

export default Page;
