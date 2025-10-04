import connectToDB from "@/configs/db";
import DiscountCodeModel from "@/models/DiscountCode";

export async function DELETE(request, { params }) {
  connectToDB();
  const { id } = await params;
  const code = await DiscountCodeModel.findOneAndDelete({ _id: id });

  if (!code) {
    return Response.json({ error: "code not found" }, { status: 404 });
  }

  return Response.json({ message: "code deleted successfully" });
}
export async function PATCH(req, { params }) {
  try {
    connectToDB();

    const { id } = await params;
    const bodys = await req.json();

    const {
      code,
      discountType,
      discountValue,
      usageLimit,
      startDate,
      endDate,
      applicableToAllUsers,
      applicableToAllProducts,
      applicableUsers,
      applicableProducts,
    } = bodys;

    const updatedDiscountCode = await DiscountCodeModel.findByIdAndUpdate(
      id,
      {
        code,
        discountType,
        discountValue,
        usageLimit,
        startDate,
        endDate,
        applicableToAllUsers,
        applicableToAllProducts,
        applicableUsers: applicableToAllUsers ? [] : applicableUsers,
        applicableProducts: applicableToAllProducts ? [] : applicableProducts,
      },
      { new: true }
    );

    if (!updatedDiscountCode) {
      return Response.json({ message: "کدتخفیف پیدا نشد" }, { status: 404 });
    }

    return Response.json(
      {
        message: "کدتخفیف با موفقیت ویرایش شد",
        updatedDiscountCode,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);

    return Response.json(
      { message: "خطا در ویرایش کدتخفیف", error: error.message },
      { status: 500 }
    );
  }
}
