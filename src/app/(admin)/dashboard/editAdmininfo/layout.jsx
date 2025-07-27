import AdminInfoSideBar from "@/components/templates/dashboard/AdminInfoSideBar";

export default async function EditAdminInfoLayout({ children }) {
  return (
    <div className="p-12 ">
      <div className="text-xl font-bold">ویرایش پروفایل </div>
      <div className="flex gap-x-6 mt-6 bg-white dashboard-box-shadow rounded-lg">
        <AdminInfoSideBar />
        {children}
      </div>
    </div>
  );
}
