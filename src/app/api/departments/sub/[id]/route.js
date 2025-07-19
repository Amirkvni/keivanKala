import connectToDB from "@/configs/db";
import { isValidObjectId } from "mongoose";
import SubDepartmentModel from "@/models/SubDepartment";

export async function GET(req, { params }) {
  try {
    connectToDB();
    const id = params.id;
    console.log("id===>", id);

    if (!isValidObjectId(id)) {
      return Response.json({ message: "ID is not valid !!" }, { status: 422 });
    }

    const subDepartments = await SubDepartmentModel.find({ department: id });

    return Response.json(subDepartments, { status: 200 });
  } catch (err) {
    console.log(err.message);

    return Response.json({ message: err }, { status: 500 });
  }
}
