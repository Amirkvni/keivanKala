import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import WishlistModel from "@/models/Wishlist";
import mongoose from "mongoose";

export async function DELETE(req, { params }) {
  try {
    connectToDB();

    const user = await authUser();
    if (!user) {
      return Response.json(
        { message: "please login first !!" },
        { status: 400 }
      );
    }
    const { id } = await params;

    const product = await WishlistModel.findOneAndDelete({
      user: user._id,
      product: new mongoose.Types.ObjectId(id),
    });

    if (!product) {
      return Response.json(
        { message: "Product not found or does not belong to this user." },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Product removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
