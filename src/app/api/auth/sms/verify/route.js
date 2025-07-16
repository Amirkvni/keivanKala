import connectToDB from "@/configs/db";
import OtpModel from "@/models/Otp";
import UserModel from "@/models/User";
import { signAccessToken, signRefreshToken } from "@/utils/auth";
import { serialize } from "cookie";

export async function POST(req) {
  connectToDB();
  const body = await req.json();
  const { phone, code } = body;
  const email = `${phone}@gmail.com`;

  // Validation (You) ✅

  const otp = await OtpModel.findOne({ phone, code });

  if (otp) {
    const date = new Date();
    const now = date.getTime();

    if (otp.expTime > now) {
      const accessToken = await signAccessToken({ email, role: "USER" });
      const refreshToken = await signRefreshToken({ email, role: "USER" });

      const users = await UserModel.find({});

      await UserModel.create({
        email,
        phone,
        role: users.length > 0 ? "USER" : "ADMIN",
      });

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
    } else {
      return Response.json({ message: "Code is expired :))" }, { status: 410 });
    }
  } else {
    return Response.json(
      { message: "Code is not correct !!" },
      { status: 409 }
    );
  }
}
