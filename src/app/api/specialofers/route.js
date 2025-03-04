import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
export async function GET() {
  connectToDB();
  const products = await ProductModel.find({ category: "Specialoffers" });
  return Response.json(products);
}
