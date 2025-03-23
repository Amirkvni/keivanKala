import connectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";
import { authUser } from "@/utils/serverHelpers";
export async function POST(req) {
  try {
    connectToDB();
    const user = await authUser();
    const body = await req.json();
    const { name, phone, email, text } = body;

    const userId = user ? user._id : null;
    const newTicket = await TicketModel.create({
      name,
      phone,
      email,
      text,
      user: userId,
    });
    return Response.json(
      { message: "ticket create successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
