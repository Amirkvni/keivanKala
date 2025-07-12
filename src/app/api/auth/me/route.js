import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";
export async function GET() {
  try {
    connectToDB();

    const cookieStore = cookies();

    const token = cookieStore.get("token")?.value;
    console.log("token==>", token);

    if (!token) {
      return Response.json(
        { message: "You are not login !!" },
        { status: 401 }
      );
    }
    const tokenPayload = verifyAccessToken(token);

    if (!tokenPayload) {
      return Response.json(
        { message: "You are not login !!" },
        { status: 401 }
      );
    }
    console.log(tokenPayload);

    const user = await UserModel.findOne(
      {
        email: tokenPayload.phoneOrEmail,
      },
      "firstname lastname role"
    );
    return Response.json({ data: user }, { status: 200 });
  } catch (err) {
    return Response.json(
      {
        message: err.message,
      },
      { status: 500 }
    );
  }
}
