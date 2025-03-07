import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
export async function GET() {
  connectToDB();
  const products = await ProductModel.find().sort({ sales: -1 }).limit(5);
  return Response.json(products);
}
