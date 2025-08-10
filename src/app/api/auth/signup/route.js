import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import {
  hashPassword,
  signAccessToken,
  signRefreshToken,
  validateEmail,
  validatePassword,
  validatePhone,
} from "@/utils/auth";
import { serialize } from "cookie";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { email, phone, password } = body;
    const isValidEmail = validateEmail(email);
    const isValidPhone = validatePhone(phone);
    const isValidPassword = validatePassword(password);
    if (!isValidEmail || !isValidPhone || !isValidPassword) {
      return Response.json(
        { message: "email or phone or pass is invalid" },
        { status: 419 }
      );
    }
    const isUserExist = await UserModel.findOne({
      $or: [{ email }, { phone }],
    });
    if (isUserExist) {
      return Response.json(
        {
          message: "the email or phone exist already",
        },
        { status: 422 }
      );
    }
    const hashedPassword = await hashPassword(password);
    const accessToken = await signAccessToken({ email });
    const refreshToken = await signRefreshToken({ email });
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

    await UserModel.create({
      email,
      phone,
      password: hashedPassword,
      role: "6898dbe57a30ad58485233de",
    });
    return new Response(
      JSON.stringify({ message: "User create successfully" }),
      {
        status: 201,
        headers,
      }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ message: error });
  }
}
