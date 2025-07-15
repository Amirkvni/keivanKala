// import connectToDB from "@/configs/db";
// import UserModel from "@/models/User";
// import {
//   generateAccessToken,
//   hashPassword,
//   validateEmail,
//   validatePassword,
//   validatePhone,
// } from "@/utils/auth";
// import { roles } from "@/utils/constants";
// export async function POST(req) {
//   try {
//     connectToDB();
//     const body = await req.json();
//     const { email, phone, password } = body;

//     // validation :
//     const isValidEmail = validateEmail(email);
//     const isValidPhone = validatePhone(phone);
//     const isValidPassword = validatePassword(password);
//     if (!isValidEmail | !isValidPhone | !isValidPassword) {
//       return Response.json(
//         { message: "email or phone or pass is invalid" },
//         { status: 419 }
//       );
//     }
//     const isUserExist = await UserModel.findOne({
//       $or: [{ email }, { phone }],
//     });

//     if (isUserExist) {
//       return Response.json(
//         {
//           message: "the email or phone exist already",
//         },
//         { status: 422 }
//       );
//     }
//     const hashedPassword = await hashPassword(password);

//     const accessToken = generateAccessToken({ phone });

//     const users = await UserModel.find({});
//     await UserModel.create({
//       email,
//       phone,
//       password: hashedPassword,
//       role: users.length > 0 ? roles.USER : roles.ADMIN,
//     });

//     return Response.json(
//       { message: "User signed up successfully" },
//       {
//         status: 201,
//         headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` },
//       }
//     );
//   } catch (error) {
//     return Response.json({ message: error });
//   }
// }
