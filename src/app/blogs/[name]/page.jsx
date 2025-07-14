import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Header from "@/components/modules/header/Header";
import BlogDetail from "@/components/templates/blogs/BlogDetail";
import connectToDB from "@/configs/db";
import React from "react";
import BlogModel from "@/models/Blog";
import BlogLinks from "@/components/templates/blogs/BlogLinks";
import Footer from "@/components/modules/footer/Footer";
export const dynamic = "force-static";

export async function generateStaticParams() {
  connectToDB();
  const blogs = await BlogModel.find({}, "link").lean();

  return blogs.map((blog) => ({
    name: blog.link,
  }));
}
export default async function page({ params }) {
  const { name } = await params;
  connectToDB();
  const blog = await BlogModel.findOne({ link: name });
  const blogLinks = await BlogModel.find().limit(4);
  return (
    <>
      <Header />
      <Breadcrumb />
      <div className="flex gap-x-3 container mx-auto mt-5 flex-col 2xl:flex-row gap-y-3">
        <BlogDetail blog={JSON.parse(JSON.stringify(blog))} />
        <BlogLinks blogLinks={JSON.parse(JSON.stringify(blogLinks))} />
      </div>
      <Footer />
    </>
  );
}
