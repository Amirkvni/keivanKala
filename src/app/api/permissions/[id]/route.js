import connectToDB from "@/configs/db";
import PermissionModel from "@/models/Permission";
export async function PUT(request, { params }) {
  connectToDB();
  try {
    const body = await request.json();
    const { id } = params;
    const { name } = body;

    if (!name || typeof name !== "string") {
      return Response.json(
        { error: "پارامترهای ورودی ناقص یا اشتباه است" },
        { status: 400 }
      );
    }

    const updatedPermission = await PermissionModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    if (!updatedPermission) {
      return Response.json({ error: "مجوز پیدا نشد" }, { status: 404 });
    }

    return Response.json(
      { message: "نقش با موفقیت آپدیت شد", permission: updatedPermission },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating permission:", error);
    return Response.json({ error: "خطای سرور" }, { status: 500 });
  }
}
