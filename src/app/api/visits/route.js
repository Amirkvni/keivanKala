import connectToDB from "@/configs/db";
import VisitModel from "@/models/Visit";
export async function POST(req) {
  try {
    connectToDB();
    const reqBody = await req.json();
    const { userId, pageName } = reqBody;

    const newVisit = await VisitModel.create({
      userId,
      pageName,
    });

    return Response.json(
      {
        message: "newVisit created succesfully",
        data: newVisit,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
