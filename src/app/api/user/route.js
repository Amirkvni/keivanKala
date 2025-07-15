import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import UserModel from "@/models/User";
export async function PATCH(req) {
  try {
    connectToDB();
    const user = await authUser();

    const { ...updatedFields } = await req.json();

    const updatedUser = await UserModel.findByIdAndUpdate(
      user._id,
      updatedFields,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedUser) {
      return Response.json({ message: "کاربر پیدا نشد." }, { status: 404 });
    }

    return Response.json(
      { message: "بروزرسانی انجام شد.", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "خطا در پردازش درخواست.", error: error.message },
      { status: 500 }
    );
  }
}
