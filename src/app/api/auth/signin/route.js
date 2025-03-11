import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { generateAccessToken, verifyPassword } from "@/utils/auth";
export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { phoneOrEmail, password } = body;
    // email and mobile validate
    const user = await UserModel.findOne({
      $or: [{ email: phoneOrEmail }, { phone: phoneOrEmail }],
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

    const accessToken = generateAccessToken({ phoneOrEmail });

    const headers = new Headers();
    headers.append("Set-Cookie", `token=${accessToken};path=/;httpOnly=true;`);
    return Response.json(
      { message: "user loggin successfully" },
      { status: 200, headers }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
