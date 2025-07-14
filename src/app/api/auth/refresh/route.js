import { signAccessToken, verifyRefreshToken } from "@/utils/auth";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!refreshToken) {
    return Response.json({ message: "No refresh token" }, { status: 401 });
  }

  try {
    const payload = verifyRefreshToken(refreshToken);
    const newAccessToken = signAccessToken({ userId: payload.userId });

    return Response.json({ accessToken: newAccessToken });
  } catch (err) {
    return Response.json({ message: "Invalid token" }, { status: 403 });
  }
}
