import connectToDB from "@/configs/db";
import DiscountCodeModel from "@/models/DiscountCode";

export async function DELETE(request, { params }) {
  connectToDB();
  const { id } = await params;
  const code = await DiscountCodeModel.findOneAndDelete({ _id: id });

  if (!code) {
    return Response.json({ error: "code not found" }, { status: 404 });
  }

  return Response.json({ message: "code deleted successfully" });
}
