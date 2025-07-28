import DashboardStatsCards from "./DashboardStatsCards";
import DashboardChartsSection from "./DashboardChartsSection";
import DashboardTablesSection from "./DashboardTablesSection";
import DashboardTicketsSection from "./DashboardTicketsSection";
import DashboardRecentOrdersTable from "./DashboardRecentOrdersTable";
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
