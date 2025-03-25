import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
export async function GET() {
  connectToDB();
  const products = await ProductModel.find().sort({ createdAt: -1 }).limit(10);
  return Response.json(products);
}
