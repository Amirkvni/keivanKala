import UserModel from "@/models/User";
import EditUserPage from "@/components/templates/dashboard/EditUserPage";
import AddressModel from "@/models/Address";
export default async function page({ params }) {
  const { id } = params;
  const user = await UserModel.findOne({ _id: id });
  const userAddress = await AddressModel.findOne(
    { userId: id },
    "-_id -v -userId"
  );
  return (
    <EditUserPage
      userAddress={JSON.parse(JSON.stringify(userAddress))}
      user={JSON.parse(JSON.stringify(user))}
    />
  );
}
