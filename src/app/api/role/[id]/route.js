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

export async function PATCH(req, { params }) {
  await connectToDB();
  const { id } = await params;
  const body = await req.json();
  console.log(body.permissions);

  const updateData = {};
  if (body.name !== undefined) updateData.name = body.name;
  if (body.permissions !== undefined) updateData.permissions = body.permissions;
  if (body.status !== undefined) updateData.status = body.status;

  const updatedRole = await RoleModel.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true }
  ).populate("permissions", "name");

  if (!updatedRole) {
    return Response.json({ error: "Role not found" }, { status: 404 });
  }

  return Response.json(updatedRole);
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
