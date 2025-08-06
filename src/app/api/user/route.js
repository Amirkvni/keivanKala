import { authUser } from "@/utils/serverHelpers";
import UserModel from "@/models/User";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import connectToDB from "@/configs/db";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    connectToDB();
    const user = await authUser();

    const formData = await req.formData();

    const updatedFields = {};

    for (const [key, value] of formData.entries()) {
      if (key !== "profile") {
        updatedFields[key] = value;
      }
    }

    const file = formData.get("profile");

    if (file && typeof file === "object" && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${uuidv4()}-${file.name}`;
      const filePath = path.join(process.cwd(), "public/uploads", fileName);

      await writeFile(filePath, buffer);

      updatedFields.profileUrl = `/uploads/${fileName}`;
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      user._id,
      updatedFields,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "کاربر پیدا نشد." }, { status: 404 });
    }
    console.log(updatedUser);

    return NextResponse.json(
      { message: "بروزرسانی انجام شد.", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "خطا در پردازش درخواست.", error: error.message },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  try {
    connectToDB();
    const { ids } = await req.json();

    if (!Array.isArray(ids) || ids.length === 0) {
      return Response.json(
        { message: "هیچ شناسه‌ای ارسال نشده" },
        { status: 400 }
      );
    }

    await UserModel.deleteMany({ _id: { $in: ids } });

    return Response.json({ message: "کاربران با موفقیت حذف شدند" });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "خطا در حذف کاربران" }, { status: 500 });
  }
}
