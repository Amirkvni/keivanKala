import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const q = searchParams.get("q");
  try {
    connectToDB();
    const products = await ProductModel.find({
      $or: [
        { persianName: { $regex: q, $options: "i" } }, // جستجو در نام فارسی
        { englishFullName: { $regex: q, $options: "i" } }, // جستجو در نام انگلیسی
      ],
    }).limit(10);
    return Response.json(products);
  } catch (error) {
    return Response.json({ message: error });
  }
}
