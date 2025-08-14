import TicketAnswer from "@/components/templates/dashboard/all-tickets/TicketAnswer";
import TicketModel from "@/models/Ticket";
export default async function Page({ params }) {
  const ticketID = params.id;
  const mainTicket = await TicketModel.findOne({ _id: ticketID })
    .select("title subDepartment department priority user")
    .populate("user", "firstname lastname ")
    .lean();

  const allMessages = await TicketModel.find({
    $or: [{ _id: mainTicket._id }, { mainTicket: mainTicket._id }],
  })
    .populate({
      path: "user",
      select: "firstname lastname role",
      populate: {
        path: "role",
        select: "name",
      },
    })
    .sort({ createdAt: 1 })
    .lean();

  return (
    <TicketAnswer
      allMessages={JSON.parse(JSON.stringify(allMessages))}
      mainTicket={JSON.parse(JSON.stringify(mainTicket))}
    />
  );
}
