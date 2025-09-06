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
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    connectToDB();
    const deletedTicket = await TicketModel.findByIdAndDelete(id);

    if (!deletedTicket) {
      return Response.json({ message: "تیکت پیدا نشد" }, { status: 404 });
    }

    return Response.json({ message: "تیکت با موفقیت حذف شد" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "خطا در حذف تیکت" }, { status: 500 });
  }
}
export async function PATCH(request, { params }) {
  try {
    const { id } = params;

     connectToDB();

    const ticket = await TicketModel.findById(id);
    if (!ticket) {
      return Response.json({ message: "Ticket not found" }, { status: 404 });
    }

    const newStatus = ticket.status === "closed" ? "answered" : "closed";

    ticket.status = newStatus;
    await ticket.save();

    return Response.json(
      { message: `Ticket status changed to ${newStatus}`, ticket },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}
