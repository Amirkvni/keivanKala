import TicketBoxes from "@/components/templates/dashboard/all-tickets/TicketBoxes";
import TicketsTable from "@/components/templates/dashboard/all-tickets/TicketsTable";
import connectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";
async function Page() {
  connectToDB();
  const tickets = await TicketModel.find({ mainTicket: { $exists: false } })
    .select("user department createdAt priority status title")
    .populate("department", "title -_id")
    .populate("user", "email -_id")
    .populate("subDepartment", "title -_id")
    .sort({ createdAt: -1 });
  const ticketsCounts = await TicketModel.aggregate([
    { $match: { mainTicket: { $exists: false } } },
    {
      $group: {
        _id: null,
        total: { $sum: 1 },
        closed: { $sum: { $cond: [{ $eq: ["$status", "closed"] }, 1, 0] } },
        new: { $sum: { $cond: [{ $eq: ["$status", "new"] }, 1, 0] } },
        answered: { $sum: { $cond: [{ $eq: ["$status", "answered"] }, 1, 0] } },
      },
    },
  ]);

  const totalTicketsCount = ticketsCounts[0]?.total || 0;
  const closedTicketsCount = ticketsCounts[0]?.closed || 0;
  const newTicketsCount = ticketsCounts[0]?.new || 0;
  const answeredTicketsCount = ticketsCounts[0]?.answered || 0;

  return (
    <div className="p-12">
      <TicketBoxes
        closedTicketsCount={closedTicketsCount}
        newTicketsCount={newTicketsCount}
        answeredTicketsCount={answeredTicketsCount}
        totalTicketsCount={totalTicketsCount}
      />
      <TicketsTable tickets={JSON.parse(JSON.stringify(tickets))} />
    </div>
  );
}

export default Page;
