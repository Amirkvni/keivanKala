import connectToDB from "@/configs/db";
import OrderModel from "@/models/Order";
import { authUser } from "@/utils/serverHelpers";
const mongoose = require("mongoose");
export async function POST(req) {
  try {
    connectToDB();
    const user = await authUser();
    const body = await req.json();
    const { products, delivery } = body;

    const productObjectIds = products.map((product) => ({
      _id: new mongoose.Types.ObjectId(product._id),
    }));

    const newOrder = await OrderModel.create({
      user: user._id,
      products: productObjectIds,
      delivery,
    });

    return Response.json(
      {
        message: "order created succesfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);

    return Response.json({ message: error }, { status: 500 });
  }
}
