import Footer from "@/components/modules/footer/Footer";
import Header from "@/components/modules/header/Header";
import BlogPage from "@/components/templates/index/blogs/BlogPage";
import connectToDB from "@/configs/db";
import BlogModel from "@/models/Blog";
import { Suspense } from "react";
export default async function page() {
  connectToDB();
  let blogs = await BlogModel.find();
  return (
    <>
      <Header />
      <Suspense fallback={<p>در حال بارگذاری...</p>}>
        <BlogPage blogs={JSON.parse(JSON.stringify(blogs))} />
      </Suspense>
      <Footer />
    </>
  );
}
