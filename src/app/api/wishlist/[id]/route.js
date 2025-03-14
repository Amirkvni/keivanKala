import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import WishlistModel from "@/models/Wishlist";
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
    const productID = params.id;
    let product = await WishlistModel.findOneAndDelete({
      user: user._id,
      _id: productID,
    });

    return Response.json(
      { message: "product remove successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
