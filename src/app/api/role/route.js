import { NextResponse } from "next/server";
import Role from "@/models/Role";
import User from "@/models/User";
import connectToDB from "@/configs/db";

export async function POST(request) {
  connectToDB();
  try {
    const body = await request.json();
    const { name, permissions } = body;

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

    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return NextResponse.json(
        { error: "نقش با این نام قبلا ثبت شده" },
        { status: 409 }
      );
    }

    const newRole = new Role({ name, permissions });
    await newRole.save();

    return NextResponse.json(
      {
        message: "نقش با موفقیت ساخته شد",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating role:", error);
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
export async function GET(params) {
  try {
    connectToDB();
    const roles = await Role.find({}, "name");
    return Response.json(roles, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return Response.json({ message: err }, { status: 500 });
  }
}
