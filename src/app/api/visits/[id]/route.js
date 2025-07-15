import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import VisitModel from "@/models/Visit";
import mongoose from "mongoose";

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    connectToDB();
    const user = await authUser();

    if (!user) {
      return Response.json(
        { message: "please login first !!" },
        { status: 400 }
      );
    }

    const product = await VisitModel.findOneAndDelete({
      userId: user._id,
      _id: new mongoose.Types.ObjectId(id),
    });

    if (!product) {
      return Response.json(
        { message: "Product not found or unauthorized" },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Product removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return Response.json({ message: "Server error", error }, { status: 500 });
  }
}
