import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
export async function GET(res, { params }) {
  connectToDB();
  const products = await ProductModel.find({ category: params.name });
  return Response.json(products);
}
