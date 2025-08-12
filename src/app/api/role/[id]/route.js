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
      "firstname lastname profileUrl email"
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
        message: "کاربران پیدا شدند",
        users,
        role,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
