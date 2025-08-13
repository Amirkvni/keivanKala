import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";

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
export async function GET(request, { params }) {
  const { commentId } = await params;
  try {
    connectToDB();
    const comment = await CommentModel.findOne(
      { _id: commentId },
      "body score isAccept"
    );
    if (!comment) {
      return Response.json({ message: "کامنت پیدا نشد" }, { status: 404 });
    }

    return Response.json(
      { message: "کامنت با موفقیت پیدا شد", comment },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "مشکلی در یافتن کامنت پیش آمد" },
      { status: 500 }
    );
  }
}
export default async function PATC(params) {}

export async function PATCH(req, { params }) {
  try {
    connectToDB();

    const { commentId } = params;
    const bodys = await req.json();

    const { body, score, isAccept } = bodys;

    const updatedComment = await CommentModel.findByIdAndUpdate(
      commentId,
      { body, score, isAccept },
      { new: true }
    );

    if (!updatedComment) {
      return Response.json({ message: "نظر پیدا نشد" }, { status: 404 });
    }

    return Response.json(
      { message: "نظر با موفقیت ویرایش شد", comment: updatedComment },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "خطا در ویرایش نظر", error: error.message },
      { status: 500 }
    );
  }
}
