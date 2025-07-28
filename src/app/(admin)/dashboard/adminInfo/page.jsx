import AdminBiography from "@/components/templates/dashboard/adminInfo/AdminBiography";
import AdminProfile from "@/components/templates/dashboard/adminInfo/AdminProfile";

function page() {
  return (
    <div className="p-12">
      <div className="text-xl font-bold">پروفایل شما </div>
      <div className=" gap-x-6 [&>div]:rounded-sm  [&>div]: mt-6 flex">
        <AdminBiography />
        <AdminProfile />
      </div>
    </div>
  );
}

export default page;
