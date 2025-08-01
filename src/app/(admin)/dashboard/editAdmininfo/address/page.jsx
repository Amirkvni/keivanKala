import AdminAddressUpdate from "@/components/templates/dashboard/editAdmininfo/AdminAddressUpdate";
import AddressModel from "@/models/Address";
import { authUser } from "@/utils/serverHelpers";

export default async function page() {
  const user = await await authUser();
  const userAddress = await AddressModel.findOne(
    { userId: user._id },
    "city district fullAddress unit plaque postalCode province  -_id"
  ).lean();
  return <AdminAddressUpdate userAddress={userAddress} />;
}
