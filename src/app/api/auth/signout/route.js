import { serialize } from "cookie";

export async function POST() {
  const response = Response.json({ message: "logged out" });

  response.headers.append(
    "Set-Cookie",
    serialize("accessToken", "", {
      path: "/",
      maxAge: 0,
    })
  );

  response.headers.append(
    "Set-Cookie",
    serialize("refreshToken", "", {
      path: "/",
      maxAge: 0,
    })
  );

  return response;
}
