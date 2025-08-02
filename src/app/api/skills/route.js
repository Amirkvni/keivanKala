import mongoose from "mongoose";
import UserModel from "@/models/User";
import { authUser } from "@/utils/serverHelpers";
import connectToDB from "@/configs/db";

export async function PATCH(req) {
  try {
    connectToDB();
    const user = await authUser();
    const { skills: skillsToUpdate } = await req.json();

    if (!skillsToUpdate || !Array.isArray(skillsToUpdate)) {
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

    const updatedIds = skillsToUpdate
      .filter(
        (skill) => skill._id && mongoose.Types.ObjectId.isValid(skill._id)
      )
      .map((skill) => String(skill._id));

    userDoc.skills = userDoc.skills.filter((skill) =>
      updatedIds.includes(String(skill._id))
    );

    skillsToUpdate.forEach((updatedSkill) => {
      const isValidMongoId = mongoose.Types.ObjectId.isValid(updatedSkill._id);

      const index = isValidMongoId
        ? userDoc.skills.findIndex(
            (s) => String(s._id) === String(updatedSkill._id)
          )
        : -1;

      if (index !== -1) {
        userDoc.skills[index] = {
          ...userDoc.skills[index],
          ...updatedSkill,
        };
      } else {
        userDoc.skills.push({
          name: updatedSkill.name,
          level: updatedSkill.level,
        });
      }
    });

    await userDoc.save();

    return Response.json(
      { success: true, message: "بروزرسانی انجام شد.", user: userDoc },
      { status: 200 }
    );
  } catch (error) {
    console.log("PATCH /api/skills =>", error.message);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
