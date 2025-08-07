import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import {
  signAccessToken,
  signRefreshToken,
  verifyPassword,
} from "@/utils/auth";
import { serialize } from "cookie";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { email, password } = body;
    const user = await UserModel.findOne({
      email,
    });

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 422 });
    }

    const isCorrectPasswordWithHash = verifyPassword(password, user.password);

    if (!isCorrectPasswordWithHash) {
      return Response.json(
        {
          message: "email or phone  or pass is not correct",
        },
        {
          status: 401,
        }
      );
    }

    const accessToken = await signAccessToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });
    const refreshToken = await signRefreshToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });
    await UserModel.findOneAndUpdate(
      { email },
      {
        $set: {
          refreshToken,
          lastLogin: new Date(),
        },
      }
    );
    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      serialize("accessToken", accessToken, {
        httpOnly: true,
        path: "/",
        maxAge: 15 * 60,
        sameSite: "strict",
      })
    );
    headers.append(
      "Set-Cookie",
      serialize("refreshToken", refreshToken, {
        httpOnly: true,
        path: "/",
        maxAge: 7 * 24 * 60 * 60,
        sameSite: "strict",
      })
    );

    return new Response(
      JSON.stringify({ message: "User logged in successfully" }),
      {
        status: 200,
        headers,
      }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
