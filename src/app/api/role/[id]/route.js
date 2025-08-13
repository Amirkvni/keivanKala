import connectToDB from "@/configs/db";
import { NextResponse } from "next/server";
import UserModel from "@/models/User";
import RoleModel from "@/models/Role";
export async function GET(request, { params }) {
  const { id } = await params;
  try {
    connectToDB();
    const users = await UserModel.find(
      { role: id },
      "firstname lastname profileUrl"
    );
    if (!users) {
      return NextResponse.json(
        { error: "کاربر مورد نظر یافت نشد" },
        { status: 404 }
      );
    }
    const role = await RoleModel.find({ _id: id }).populate("permissions");
    return NextResponse.json(
      {
        message: "کاربران و مجوز پیدا شدند",
        users,
        role,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
export async function PUT(request, { params }) {
  connectToDB();
  try {
    const body = await request.json();
    const { id } = params;
    const { name, permissions, status } = body;

    if (
      !name ||
      typeof name !== "string" ||
      !permissions ||
      !Array.isArray(permissions) ||
      permissions.length === 0
    ) {
      return NextResponse.json(
        { error: "پارامترهای ورودی ناقص یا اشتباه است" },
        { status: 400 }
      );
    }

    const existingRole = await RoleModel.findOne({ name, _id: { $ne: id } });
    if (existingRole) {
      return NextResponse.json(
        { error: "نقش با این نام قبلا ثبت شده" },
        { status: 409 }
      );
    }

    const updatedRole = await RoleModel.findByIdAndUpdate(
      id,
      { name, permissions, status },
      { new: true }
    );

    if (!updatedRole) {
      return NextResponse.json({ error: "نقش پیدا نشد" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "نقش با موفقیت آپدیت شد", role: updatedRole },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating role:", error);
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  connectToDB();

  try {
    const { id } = params;

    const role = await RoleModel.findById(id);
    if (!role) {
      return NextResponse.json({ error: "نقش پیدا نشد" }, { status: 404 });
    }

    await RoleModel.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "نقش با موفقیت حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting role:", error);
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
