// export async function POST(req) {
//   try {
//     connectToDB();
//     const reqBody = await req.json();
//     const {
//       title,
//       introduction,
//       content,
//       author,
//       mainImage,
//       categories,
//       tags,
//     } = reqBody;
//     const blog = await BlogModel.create({
//       title,
//       introduction,
//       content,
//       author,
//       mainImage,
//       categories,
//       tags,
//     });

//     return Response.json(
//       {
//         message: "blog created succesfully",
//         data: blog,
//       },
//       {
//         status: 201,
//       }
//     );
//   } catch (error) {
//     return Response.json({ message: error }, { status: 500 });
//   }
// }
// export async function GET() {
//   connectToDB();
//   const blogs = await BlogModel.find();
//   return Response.json(blogs);
// }
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

    const newBlog = new BlogModel({
      title,
      englishTitle,
      content,
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
    console.error("DELETE Comment Error:", error);
    return Response.json({ message: "خطا در حذف بلاگ " }, { status: 500 });
  }
}
