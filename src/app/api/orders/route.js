import connectToDB from "@/configs/db";
import OrderModel from "@/models/Order";
import { authUser } from "@/utils/serverHelpers";
const mongoose = require("mongoose");
export async function POST(req) {
  try {
    connectToDB();
    const user = await authUser();
    const body = await req.json();
    const { products, delivery, paymentId } = body;

    const productObjectIds = products.map((product) => ({
      _id: new mongoose.Types.ObjectId(product._id),
    }));
    console.log("productObjectIds====>", productObjectIds);

    const newOrder = await OrderModel.create({
      user: user._id,
      products: productObjectIds,
      delivery,
      payment: paymentId,
    });

    return Response.json(
      {
        message: "order created succesfully",
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

    const result = await OrderModel.deleteMany({ _id: { $in: idArray } });

    // await ProductModel.updateMany(
    //   { comments: { $in: idArray } },
    //   { $pull: { comments: { $in: idArray } } }
    // );

    return Response.json(
      {
        message: "سفارش ها با موفقیت حذف شدند",
        deletedCount: result.deletedCount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE Comment Error:", error);
    return Response.json({ message: "خطا در حذف سفارش ها" }, { status: 500 });
  }
}
