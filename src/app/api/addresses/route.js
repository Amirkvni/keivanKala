import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import AddressModel from "@/models/Address";

export async function POST(req) {
  try {
    connectToDB();
    const user = await authUser();
    const reqBody = await req.json();
    const { fullAddress, province, city, district, plaque, postalCode, unit } =
      reqBody;
    const address = await AddressModel.create({
      fullAddress,
      province,
      city,
      district,
      plaque,
      postalCode,
      unit,
      userId: user._id,
    });

    return Response.json(
      {
        message: "address created succesfully",
        data: address,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
export async function PUT(req) {
  try {
    connectToDB();
    const user = await authUser();
    const reqBody = await req.json();
    const { fullAddress, province, city, district, plaque, postalCode, unit } =
      reqBody;

    const address = await AddressModel.findOneAndUpdate(
      { userId: user._id },
      { fullAddress, province, city, district, plaque, postalCode, unit },
      {
        new: true,
      }
    );
    return Response.json({ message: "address updated", data: address });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    connectToDB();
    const reqBody = await req.json();
    const { _id } = reqBody;

    const deletedAddress = await AddressModel.findByIdAndDelete(_id);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
export async function GET() {
  try {
    connectToDB();
    const user = await authUser();
    const address = await AddressModel.findOne({ userId: user._id });
    return Response.json(address);
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
