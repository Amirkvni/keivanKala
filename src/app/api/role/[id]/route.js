import connectToDB from "@/configs/db";
import { NextResponse } from "next/server";
import UserModel from "@/models/User";
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

    return NextResponse.json(
      {
        message: "کاربران پیدا شدند",
        users,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
