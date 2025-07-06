import Addresses from "@/components/templates/profile/Addresses";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import React from "react";
import AddressModel from "@/models/Address";
export default async function page() {


  connectToDB();
  const user = await authUser();
  const addresses = await AddressModel.find({ userId: user._id });

  return <Addresses addresses={JSON.parse(JSON.stringify(addresses))} />;
}
