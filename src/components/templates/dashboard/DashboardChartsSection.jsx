import OrderBox from "./OrderBox";
import RevenueBox from "./RevenueBox";
export default async function DashboardChartsSection() {
  const x = 23;
  return (
    <div className="grid grid-cols-2 gap-4 [&>div]:p-3 [&>div]:rounded-sm [&>div]:bg-white ">
      <RevenueBox />
      <OrderBox />
    </div>
  );
}
