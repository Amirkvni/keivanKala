import { NextResponse } from "next/server";
import Role from "@/models/Role";
import User from "@/models/User";
import connectToDB from "@/configs/db";

export async function POST(request) {
  connectToDB();
  try {
    const body = await request.json();
    const { name, permissions, user } = body;

    if (
      !name ||
      typeof name !== "string" ||
      !permissions ||
      !Array.isArray(permissions) ||
      permissions.length === 0 ||
      !user
    ) {
      return NextResponse.json(
        { error: "پارامترهای ورودی ناقص یا اشتباه است" },
        { status: 400 }
      );
    }

    // بررسی وجود نقش با همان نام
    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return NextResponse.json(
        { error: "نقش با این نام قبلا ثبت شده" },
        { status: 409 }
      );
    }

    const newRole = new Role({ name, permissions });
    await newRole.save();

    const updatedUser = await User.findByIdAndUpdate(
      user,
      { role: newRole._id },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { error: "کاربر مورد نظر یافت نشد" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "نقش ساخته شد و به کاربر اختصاص داده شد",
        role: newRole,
        user: updatedUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating role:", error);
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
