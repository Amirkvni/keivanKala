import DashboardStatsCards from "./DashboardStatsCards";
import DashboardTablesSection from "./DashboardTablesSection";
import DashboardTicketsSection from "./DashboardTicketsSection";
import DashboardRecentOrdersTable from "./DashboardRecentOrdersTable";
import DashboardChartsSection from "./DashboardChartsSection";
function DashboardHome() {
  return (
    <div className="p-12 flex flex-col gap-y-12">
      <DashboardStatsCards />
      <DashboardChartsSection />
      <DashboardTablesSection />
      <DashboardTicketsSection />
      <DashboardRecentOrdersTable />
    </div>
  );
}

export default DashboardHome;
