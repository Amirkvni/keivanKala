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
