import mongoose from "mongoose";
import UserModel from "@/models/User";
import { authUser } from "@/utils/serverHelpers";
import connectToDB from "@/configs/db";

export async function PATCH(req) {
  try {
    connectToDB();
    const user = await authUser();
    const { experiences: experiencesToUpdate } = await req.json();

    if (!experiencesToUpdate || !Array.isArray(experiencesToUpdate)) {
      return Response.json(
        { success: false, message: "داده نامعتبر است" },
        { status: 400 }
      );
    }

    const userDoc = await UserModel.findById(user._id);
    if (!userDoc) {
      return Response.json(
        { success: false, message: "کاربر پیدا نشد." },
        { status: 404 }
      );
    }

    const updatedIds = experiencesToUpdate
      .filter(
        (experience) =>
          experience._id && mongoose.Types.ObjectId.isValid(experience._id)
      )
      .map((experience) => String(experience._id));

    userDoc.experiences = userDoc.experiences.filter((experience) =>
      updatedIds.includes(String(experience._id))
    );

    experiencesToUpdate.forEach((updatedExperience) => {
      const isValidMongoId = mongoose.Types.ObjectId.isValid(
        updatedExperience._id
      );

      // تبدیل تاریخ‌ها به Date
      const formattedExperience = {
        ...updatedExperience,
        ...(updatedExperience.startDate && {
          startDate: new Date(updatedExperience.startDate),
        }),
        ...(updatedExperience.endDate && {
          endDate: new Date(updatedExperience.endDate),
        }),
      };

      const index = isValidMongoId
        ? userDoc.experiences.findIndex(
            (s) => String(s._id) === String(updatedExperience._id)
          )
        : -1;

      if (index !== -1) {
        userDoc.experiences[index] = {
          ...userDoc.experiences[index],
          ...formattedExperience,
        };
      } else {
        const { _id, ...rest } = formattedExperience;
        userDoc.experiences.push(rest);
      }
    });

    await userDoc.save();

    return Response.json(
      {
        success: true,
        message: "بروزرسانی انجام شد.",
        experiences: userDoc.experiences,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("PATCH /api/experiences =>", error.message);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
