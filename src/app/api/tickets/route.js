import connectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";
import { authUser } from "@/utils/serverHelpers";
import UserModel from "@/models/User";
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
      const main = await TicketModel.findById(mainTicket).populate(
        "user",
        "_id"
      );

      const currentUser = await UserModel.findById(user._id).populate(
        "role",
        "name"
      );

      const isAdminReply = currentUser.role?.name !== "USER";
      const newStatus = isAdminReply ? "answered" : "new";

      await TicketModel.findByIdAndUpdate(mainTicket, {
        status: newStatus,
        isAnswer: isAdminReply,
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
