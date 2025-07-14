// middleware.js
import { NextResponse } from "next/server";
import {
  verifyAccessToken,
  verifyRefreshToken,
  signAccessToken,
} from "@/utils/auth";

export async function middleware(request) {
  const cookieStore = request.cookies;

  let accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;
  console.log("refreshToken===>", refreshToken);
  console.log("accessToken===>", accessToken);

  const url = request.nextUrl;

  let payload;

  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  try {
    payload = await verifyAccessToken(accessToken);
  } catch {
    if (!refreshToken) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
    try {
      payload = await verifyRefreshToken(refreshToken);
      accessToken = await signAccessToken({
        userId: payload.userId,
        role: payload.role,
      });
      const response = NextResponse.redirect(request.url);
      response.cookies.set("accessToken", newAccessToken, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 15,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
      return response;
    } catch {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  if (url.pathname.startsWith("/admins") && payload.role !== "admin") {
    return NextResponse.redirect(new URL("/not-authorized", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*"],
};
