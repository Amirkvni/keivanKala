import Favorites from "@/components/templates/profile/Favorites";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import React from "react";
import WishlistModel from "@/models/Wishlist";
export default async function page() {
  connectToDB();
  const user = await authUser();
  const wishlists = await WishlistModel.find({ user: user._id }).populate(
    "product",
    "_id persianName price mainImage sales"
  );

  return <Favorites wishlists={JSON.parse(JSON.stringify(wishlists))} />;
}
