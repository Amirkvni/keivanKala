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
    .populate("subDepartment", "title -_id");

  return (
    <div className="p-12">
      <TicketBoxes />
      <TicketsTable tickets={JSON.parse(JSON.stringify(tickets))} />
    </div>
  );
}

export default Page;
