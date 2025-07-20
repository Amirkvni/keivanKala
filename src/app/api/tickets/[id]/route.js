import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import TicketModel from "@/models/Ticket";

export async function GET(request, context) {
  try {
    await connectToDB();
    const user = await authUser();

    const ticketID = context.params.id;

    const ticket = await TicketModel.findOne({
      _id: ticketID,
      user: user._id,
    }).lean();

    if (!ticket) {
      return Response.json({ message: "Ticket not found" }, { status: 404 });
    }

    return Response.json(ticket, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json({ message: err.message }, { status: 500 });
  }
}
