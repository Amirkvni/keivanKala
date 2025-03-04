import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
export async function GET() {
  connectToDB();
  const products = await ProductModel.find({});
  return Response.json(products);
}
