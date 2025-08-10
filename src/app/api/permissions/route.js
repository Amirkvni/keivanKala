import { NextResponse } from "next/server";
import PermissionModel from "@/models/Permission";
import connectToDB from "@/configs/db";

export async function POST(request) {
  connectToDB();
  try {
    const body = await request.json();
    const { name } = body;
    console.log(name);

    if (!name || name.trim() === "") {
      return NextResponse.json(
        { error: "نام مجوز الزامی است" },
        { status: 400 }
      );
    }

    const existing = await PermissionModel.findOne({ name });
    if (existing) {
      return NextResponse.json(
        { error: "مجوز با این نام قبلا ثبت شده" },
        { status: 409 }
      );
    }

    const newPermission = new PermissionModel({ name });
    await newPermission.save();

    return NextResponse.json(newPermission, { status: 201 });
  } catch (error) {
    console.error("Error creating permission:", error);
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
