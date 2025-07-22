import AdminInfoSideBar from "@/components/templates/dashboard/AdminInfoSideBar";

export default async function EditAdminInfoLayout({ children }) {
  return (
    <div className="p-12 ">
      <div>ویرایش پروفایل </div>
      <div className="flex gap-x-6 mt-6 bg-white">
        <AdminInfoSideBar />
        {children}
      </div>
    </div>
  );
}
