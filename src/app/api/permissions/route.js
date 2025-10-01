import { NextResponse } from "next/server";
import PermissionModel from "@/models/Permission";
import connectToDB from "@/configs/db";

export async function POST(request) {
  connectToDB();
  try {
    const body = await request.json();
    const { name } = body;

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
export async function DELETE(req) {
  try {
    connectToDB();
    const { ids } = await req.json();
    const idArray = Array.isArray(ids) ? ids : [ids];

    if (!idArray.length) {
      return Response.json(
        { message: "لیست مجوزها معتبر نیست" },
        { status: 400 }
      );
    }

    const result = await PermissionModel.deleteMany({ _id: { $in: idArray } });

    return Response.json(
      {
        message: "مجوز ها با موفقیت حذف شدند",
        deletedCount: result.deletedCount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE Permission Error:", error);
    return Response.json({ message: "خطا در حذف مجوز ها" }, { status: 500 });
  }
}
