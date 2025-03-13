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
    const reqBody = await req.json();
    const {
      fullAddress,
      province,
      city,
      district,
      plaque,
      postalCode,
      unit,
      _id,
    } = reqBody;

    const address = await AddressModel.findByIdAndUpdate(
      _id,
      { fullAddress, province, city, district, plaque, postalCode, unit },
      {
        new: true,
      }
    );
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
