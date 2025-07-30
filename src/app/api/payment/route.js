import connectToDB from "@/configs/db";
import PaymenttModel from "@/models/Payment";
import { authUser } from "@/utils/serverHelpers";
import AddressModel from "@/models/Address";
import { generateUniqueTrackingCode } from "@/utils/generateTrackingCode";
export async function POST(req) {
  try {
    connectToDB();
    const user = await authUser();
    const reqBody = await req.json();
    const { products, orderDate, delivery, status, paid, discount } = reqBody;
    const userAddress = await AddressModel.findOne({ userId: user._id });
    const trackingCode = await generateUniqueTrackingCode();

    const payment = await PaymenttModel.create({
      user: user._id,
      products,
      orderDate,
      delivery,
      status,
      paid,
      discount,
      address: userAddress._id,
      trackingCode,
    });

    return Response.json(
      {
        message: "payment created succesfully",
        data: {
          _id: payment._id, // ← اضافه کن
          trackingCode: payment.trackingCode,
          orderDate: payment.orderDate,
        },
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
