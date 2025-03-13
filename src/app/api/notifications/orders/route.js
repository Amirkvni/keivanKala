import connectToDB from "@/configs/db";
import NotificationModel from "@/models/Notification";
export async function POST(req) {
  try {
    connectToDB();
    const reqBody = await req.json();
    const { title, text, products, type, userId } = reqBody;

    const orderNotif = await NotificationModel.create({
      title,
      text,
      products,
      type,
      userId,
    });

    return Response.json(
      {
        message: "orderNotif created succesfully",
        data: orderNotif,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
