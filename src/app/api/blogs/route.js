import { NextResponse } from "next/server";
import connectToDB from "@/configs/db";
import BlogModel from "@/models/Blog";
import { authUser } from "@/utils/serverHelpers";
export async function POST(req) {
  connectToDB();
  const user = await authUser();

  try {
    const body = await req.json();
    const { title, content, mainImage, category, tags, englishTitle } = body;

    if (!content) {
      return NextResponse.json(
        { error: "محتوا نمی‌تواند خالی باشد" },
        { status: 400 }
      );
    }
    const link = englishTitle.trim().replace(/\s+/g, "-");

    const newBlog = new BlogModel({
      title,
      englishTitle,
      content,
      link,
      mainImage,
      category,
      tags: Array.isArray(tags) ? tags : [],
      author: user._id,
    });

    await newBlog.save();

    return NextResponse.json(
      { message: "وبلاگ با موفقیت ایجاد شد", blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "خطای سرور در ایجاد بلاگ" },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  try {
    connectToDB();
    const { ids } = await req.json();
    const idArray = Array.isArray(ids) ? ids : [ids];

    if (!idArray.length) {
      return Response.json(
        { message: "لیست آیدی معتبر نیست" },
        { status: 400 }
      );
    }

    const result = await BlogModel.deleteMany({ _id: { $in: idArray } });

    return Response.json(
      {
        message: "بلاگ با موفقیت حذف شد",
        deletedCount: result.deletedCount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE blog Error:", error);
    return Response.json({ message: "خطا در حذف بلاگ " }, { status: 500 });
  }
}
export async function GET() {
  try {
    connectToDB();

    const blogs = await BlogModel.find(
      {},
      "updatedAt englishTitle mainImage title link"
    );

    return Response.json(
      {
        message: "تمام وبلاگ ها",
        blogs,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("find blogs Error:", error);
    return Response.json({ message: "خطا در یافتن بلاگها " }, { status: 500 });
  }
}
