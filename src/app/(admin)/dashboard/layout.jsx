import DashBoardHeader from "@/components/templates/dashboard/DashBoardHeader";
import Sidebar from "@/components/templates/dashboard/Sidebar";

export default async function DashboardLayout({ children }) {
  
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 mr-64 overflow-y-auto scrollbar-custom">
        <DashBoardHeader />
        <main>{children}</main>
      </div>
    </div>
  );
}
