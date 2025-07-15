import connectToDB from "@/configs/db";
import WishlistModel from "@/models/Wishlist";
export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();

    const { user, product } = body;

    //validation
    const wish = await WishlistModel.findOne({ user, product });

    if (!wish) {
      await WishlistModel.create({ user, product });
      return Response.json(
        {
          message: "product add to wishlist successfully :)",
        },
        { status: 201 }
      );
    } else {
      await WishlistModel.findOneAndDelete({ product });
      return Response.json(
        {
          message: "product add to wishlist successfully :)",
        },
        { status: 204 }
      );
    }
  } catch (error) {
    return Response.json(
      {
        message: error,
      },
      { status: 500 }
    );
  }
}
