import connectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";
import { authUser } from "@/utils/serverHelpers";

export async function POST(req) {
  try {
    connectToDB();
    const user = await authUser();
    const reqBody = await req.json();
    const { title, body, department, subDepartment, priority, mainTicket } =
      reqBody;

    const newTicketData = {
      title,
      body,
      department,
      subDepartment,
      priority,
      user: user._id,
    };
    if (mainTicket) {
      newTicketData.mainTicket = mainTicket;
    }

    await TicketModel.create(newTicketData);
    if (mainTicket) {
      await TicketModel.findByIdAndUpdate(mainTicket, {
        status: "answered",
        isAnswer: true,
      });
    }

    return Response.json(
      { message: "Ticket created successfully " },
      { status: 201 }
    );
  } catch (err) {
    console.log(err.message);
    return Response.json({ message: err }, { status: 500 });
  }
}
