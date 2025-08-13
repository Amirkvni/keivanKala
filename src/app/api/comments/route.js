import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";
import ProductModel from "@/models/Product";
export async function POST(req) {
  try {
    connectToDB();
    const reqBody = await req.json();
    const { userID, username, body, email, score, productID } = reqBody;
    // validation
    const comment = await CommentModel.create({
      userID,
      username,
      body,
      email,
      score,
      productID,
    });

    const updatedProduct = await ProductModel.findOneAndUpdate(
      {
        _id: productID,
      },
      {
        $push: {
          comments: comment._id,
        },
      }
    );

    return Response.json(
      {
        message: "Comment created succesfully",
        data: comment,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
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

    const result = await CommentModel.deleteMany({ _id: { $in: idArray } });

    await ProductModel.updateMany(
      { comments: { $in: idArray } },
      { $pull: { comments: { $in: idArray } } }
    );

    return Response.json(
      {
        message: "کامنت‌ها با موفقیت حذف شدند",
        deletedCount: result.deletedCount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE Comment Error:", error);
    return Response.json({ message: "خطا در حذف کامنت‌ها" }, { status: 500 });
  }
}
