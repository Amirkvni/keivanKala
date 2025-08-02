import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import UserModel from "@/models/User";
export async function PATCH(req) {
  try {
    await connectToDB();
    const user = await authUser();

    const socialsToUpdate = await req.json(); 

    if (!socialsToUpdate || !Array.isArray(socialsToUpdate)) {
      return Response.json({ message: "داده نامعتبر است" }, { status: 400 });
    }

    const userDoc = await UserModel.findById(user._id);
    if (!userDoc) {
      return Response.json({ message: "کاربر پیدا نشد." }, { status: 404 });
    }

    socialsToUpdate.forEach((updatedSocial) => {
      const index = userDoc.socials.findIndex(
        (s) => String(s._id) === String(updatedSocial._id)
      );
      if (index !== -1) {
        userDoc.socials[index] = {
          ...userDoc.socials[index],
          ...updatedSocial,
        };
      }
    });

    await userDoc.save();

    return Response.json(
      { message: "بروزرسانی انجام شد.", user: userDoc },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);

    return Response.json(
      {
        message: error.message,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
