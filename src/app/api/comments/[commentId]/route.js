import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";
import mongoose from "mongoose";

export async function DELETE(request, { params }) {
  const { commentId } = params;

  try {
    connectToDB();

    const deletedComment = await CommentModel.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return Response.json({ message: "کامنت پیدا نشد" }, { status: 404 });
    }

    return Response.json(
      { message: "کامنت با موفقیت حذف شد" },
      { status: 200 }
    );
  } catch (err) {
    console.error("خطا در حذف کامنت:", err);
    return Response.json(
      { message: "مشکلی در حذف کامنت پیش آمد" },
      { status: 500 }
    );
  }
}
export async function PUT(request, { params }) {
  const { commentId } = await params;

  const body = await request.json();
  const { text, rating } = body;

  try {
    connectToDB();
    const updatedComment = await CommentModel.findOneAndUpdate(
      { _id: commentId },
      { body: text, score: rating, isAccept: false },
      { new: true, runValidators: true }
    );

    if (!updatedComment) {
      return Response.json({ message: "کامنت پیدا نشد" }, { status: 404 });
    }

    return Response.json(
      { message: "کامنت با موفقیت ویرایش شد", updatedComment },
      { status: 200 }
    );
  } catch (err) {
    console.error("خطا در ویرایش کامنت:", err);
    return Response.json(
      { message: "مشکلی در ویرایش کامنت پیش آمد" },
      { status: 500 }
    );
  }
}
