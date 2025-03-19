import Header from "@/components/modules/header/Header";
import BlogPage from "@/components/templates/index/blogs/BlogPage";
import connectToDB from "@/configs/db";
import BlogModel from "@/models/Blog";
export default async function page() {
  connectToDB();
  let blogs = await BlogModel.find();
  return (
    <>
      <Header />
      <BlogPage blogs={JSON.parse(JSON.stringify(blogs))} />
    </>
  );
}
