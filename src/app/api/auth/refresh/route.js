import connectToDB from "@/configs/db";
import { cookies } from "next/headers";
import UserModel from "@/models/User";
import { verify } from "jsonwebtoken";
import { generateAccessToken } from "@/utils/auth";
export async function POST() {
  try {
    connectToDB();
    const refreshToken = await cookies().get("refresh-token").value;
    if (!refreshToken) {
      return Response.json(
        { message: "dont have refresh token" },
        { status: 401 }
      );
    }
    const user = await UserModel.findOne({ refreshToken });
    if (!user) {
      return Response.json(
        { message: "dont have refresh token" },
        { status: 401 }
      );
    }

    verify(refreshToken, process.env.RefreshTokenSecretKey);
    const newAccessToken = generateAccessToken({ email: user.email });

    return Response.json(
      { message: "new access token generated succesfully" },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${newAccessToken};path=/;httpOnly=true;`,
        },
      }
    );
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
