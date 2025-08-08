import connectToDB from "@/configs/db";
import UserModel from "@/models/User";

export async function PATCH(request, { params }) {
  connectToDB();
  const { id } = await params;
  const { status } = await request.json();
  const user = await UserModel.findOneAndUpdate(
    { _id: id },
    { accountStatus: status },
    { new: true }
  );

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  return Response.json({ message: "Account status updated", user });
}
