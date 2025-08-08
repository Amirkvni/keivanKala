import connectToDB from "@/configs/db";
import UserModel from "@/models/User";

export async function PATCH(request, { params }) {
  await connectToDB();
  const { id } = params;
  const { mainUser } = await request.json();

  try {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { $set: mainUser },
      { new: true }
    );

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    return Response.json({ message: "User updated successfully", user });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
