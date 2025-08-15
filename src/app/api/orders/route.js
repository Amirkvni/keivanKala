import connectToDB from "@/configs/db";
import OrderModel from "@/models/Order";
import { authUser } from "@/utils/serverHelpers";
const mongoose = require("mongoose");
export async function POST(req) {
  try {
    connectToDB();
    const user = await authUser();
    const body = await req.json();
    const { products, delivery, paymentId } = body;

    const productObjectIds = products.map((product) => ({
      _id: new mongoose.Types.ObjectId(product._id),
    }));
    console.log("productObjectIds====>", productObjectIds);

    const newOrder = await OrderModel.create({
      user: user._id,
      products: productObjectIds,
      delivery,
      payment: paymentId,
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
    return Response.json({ message: error }, { status: 500 });
  }
}
