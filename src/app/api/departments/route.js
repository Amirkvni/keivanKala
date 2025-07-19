import connectToDB from "@/configs/db";
import DepartmentModel from "@/models/Department";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { title } = body;

    // Valid Title

    await DepartmentModel.create({ title });

    return Response.json(
      { message: "Department created successfully :))" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err.message);
    return Response.json({ message: err }, { status: 500 });
  }
}
export async function GET(req) {
  try {
    connectToDB();
    const departments = await DepartmentModel.find({});
    return Response.json({ departments }, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return Response.json({ message: err }, { status: 500 });
  }
}
