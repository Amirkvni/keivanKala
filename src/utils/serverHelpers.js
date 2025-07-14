import connectToDB from "@/configs/db";
import { cookies } from "next/headers";
import UserModel from "@/models/User";
import { verifyAccessToken } from "./auth";

export const authUser = async () => {
  await connectToDB();
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  if (!token) return null;

  try {
    const tokenPayload = await verifyAccessToken(token);

    const user = await UserModel.findOne({
      email: tokenPayload.email,
    });

    return user || null;
  } catch (err) {
    console.error("Auth error:", err.message);
    return null;
  }
};
