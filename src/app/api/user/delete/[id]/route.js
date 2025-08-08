import connectToDB from "@/configs/db";
import UserModel from "@/models/User";

export async function DELETE(request, { params }) {
  connectToDB();
  const { id } = await params;
  const user = await UserModel.findOneAndDelete({ _id: id });

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  return Response.json({ message: "user deleted successfully" });
}
