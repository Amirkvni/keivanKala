import connectToDB from "@/configs/db";
import BlogModel from "@/models/Blog";
export async function POST(req) {
  try {
    connectToDB();
    const reqBody = await req.json();
    const {
      title,
      introduction,
      content,
      author,
      mainImage,
      categories,
      tags,
    } = reqBody;
    const blog = await BlogModel.create({
      title,
      introduction,
      content,
      author,
      mainImage,
      categories,
      tags,
    });

    return Response.json(
      {
        message: "blog created succesfully",
        data: blog,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
export async function GET() {
  connectToDB();
  const blogs = await BlogModel.find();
  return Response.json(blogs);
}
