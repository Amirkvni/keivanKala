import BlogModel from "@/models/Blog";
import DashboardBlogs from "@/components/templates/dashboard/all-blogs/DashboardBlogs";
async function Page() {
  const blogs = await BlogModel.find({}).populate(
    "author",
    "firstname lastname"
  );

  return <DashboardBlogs blogs={JSON.parse(JSON.stringify(blogs))} />;
}

export default Page;
