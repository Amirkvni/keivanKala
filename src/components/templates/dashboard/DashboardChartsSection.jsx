import OrderChart from "@/components/templates/dashboard/OrderChart";
import RevenueChart from "@/components/templates/dashboard/RevenueChart";
import FilterButtons from "./FilterButtons";
import StatGrid from "./StatGrid";
function DashboardChartsSection() {
  return (
    <div className="grid grid-cols-2 gap-4 [&>div]:p-3 [&>div]:rounded-sm [&>div]:bg-white ">
      <div className="flex flex-col gap-y-4 dashboard-box-shadow">
        <div className="flex justify-between items-center">
          <span className="dashboard-header-box">درآمد</span>
          <FilterButtons />
        </div>
        <StatGrid />

        <div className="w-full h-64" dir="ltr">
          <RevenueChart />
        </div>
      </div>
      <div className="dashboard-box-shadow">
        <div className="flex justify-between items-center">
          <span className="dashboard-header-box">سفارش ها</span>
          <FilterButtons />
        </div>
        <div className="w-full h-64 mt-24" dir="ltr">
          <OrderChart />
        </div>
      </div>
    </div>
  );
}

export default DashboardChartsSection;
