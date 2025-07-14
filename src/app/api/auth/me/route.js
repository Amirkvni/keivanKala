import {
  signAccessToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "@/utils/auth";
import { cookies } from "next/headers";
import UserModel from "@/models/User";
export async function GET() {
  const cookieStore = await cookies();

  let accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!accessToken && refreshToken) {
    try {

      const payload = await verifyRefreshToken(refreshToken);


      accessToken = await signAccessToken({
        userId: payload.userId,
        email: payload.email,
        role: payload.role,
      });
      cookieStore.set("accessToken", accessToken, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 15, // 15 دقیقه
      });
    } catch (err) {

      return Response.json(
        { message: "Refresh token invalid" },
        { status: 403 }
      );
    }
  }

  if (!accessToken) {
    return Response.json({ message: "No token" }, { status: 401 });
  }

  try {
    const payload = await verifyAccessToken(accessToken);

    const user = await UserModel.findOne(
      {
        email: payload.email,
      },
      "firstname lastname role"
    );
    console.log("uesr===>", user);

    return Response.json(
      {
        message: "youe are loggin",
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: "Token invalid" }, { status: 401 });
  }
}
