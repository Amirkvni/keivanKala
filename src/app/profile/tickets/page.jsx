import Tickets from "@/components/templates/profile/Tickets";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import TicketModel from "@/models/Ticket";
export default async function Page() {
  connectToDB();
  const user = await authUser();
  const tickets = await TicketModel.find({
    user: user._id,
    mainTicket: { $exists: false },
  })
    .populate("department", "title")
    .sort({ createdAt: -1 });
  return <Tickets tickets={JSON.parse(JSON.stringify(tickets))} />;
}
