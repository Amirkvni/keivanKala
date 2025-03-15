import connectToDB from "@/configs/db";
import OrderModel from "@/models/Order";
export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { user, products, totalPrice, orderDate, address, delivery } = body;
    const newOrder = await OrderModel.create({
      user,
      products,
      totalPrice,
      orderDate,
      address,
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
    return Response.json({ message: error }, { status: 500 });
  }
}
