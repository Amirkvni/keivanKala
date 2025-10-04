// app/api/discount-codes/route.js
import connectToDB from "@/configs/db";
import DiscountCode from "@/models/DiscountCode";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    connectToDB();

    const body = await req.json();

    const newDiscount = await DiscountCode.create({
      code: body.code,
      discountType: body.discountType,
      discountValue: body.discountValue,
      minPurchaseAmount: body.minPurchaseAmount || 0,
      maxDiscountAmount: body.maxDiscountAmount || null,
      usageLimit: body.usageLimit || 5,
      startDate: body.startDate,
      endDate: body.endDate,
      applicableProducts: body.applicableProducts,
      applicableUsers: body.applicableUsers,
      applicableToAllUsers: body.applicableToAllUsers,
      applicableToAllProducts: body.applicableToAllProducts,
    });

    return NextResponse.json(
      { message: "کد تخفیف با موفقیت ایجاد شد" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "خطا در ایجاد کد تخفیف", error: err.message },
      { status: 500 }
    );
  }
}
