import connectToDB from "@/configs/db";
import OrderModel from "@/models/Order";
import PaymentModel from "@/models/Payment";
import UserModel from "@/models/User";
import AddressModel from "@/models/Address";
export async function PATCH(req, { params }) {
  const { id } = await params;
  const body = await req.json();
  const { productsChanges, customerChanges, addressChanges, statusChange } =
    body;
  console.log("productsChanges==>", productsChanges);

  try {
    connectToDB();
    const order = await OrderModel.findById(id)
      .populate("payment")
      .populate("user")
      .populate("products", "_id persianName");
    if (!order) {
      return new Response(JSON.stringify({ message: "سفارش پیدا نشد" }), {
        status: 404,
      });
    }
    const paymentID = String(order.payment._id);
    const userID = String(order.user._id);
    const payment = await PaymentModel.findById(paymentID);
    const addressID = String(order.payment.address);

    if (productsChanges && Array.isArray(productsChanges)) {
      productsChanges.forEach((change) => {
        if (change.type === "removed") {
          payment.products = payment.products.filter(
            (p) => p._id.toString() !== change._id
          );
          order.products = order.products.filter(
            (p) => p.toString() !== change._id
          );
        } else if (change.type === "updated") {
          const product = payment.products.find(
            (p) => p._id.toString() === change._id
          );
          if (product) product.quantity = change.quantity;
        } else if (change.type === "added") {
          payment.products.push({
            _id: change._id,
            quantity: change.quantity,
            persianName: change.persianName,
          });

          if (!order.products.some((p) => p.toString() === change._id)) {
            order.products.push(change._id);
          }
        }
      });

      await payment.save();
      await order.save();
    }
    if (customerChanges && Object.keys(customerChanges).length > 0) {
      await UserModel.findByIdAndUpdate(
        userID,
        { $set: customerChanges },
        { new: true }
      );
    }
    if (addressChanges && Object.keys(addressChanges).length > 0) {
      await AddressModel.findByIdAndUpdate(
        addressID,
        { $set: addressChanges },
        { new: true }
      );
    }
    if (statusChange) {
      order.status = statusChange;
      await order.save();
    }
    return new Response(JSON.stringify({ message: "سفارش بروز شد" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "خطا در بروزرسانی سفارش" }), {
      status: 500,
    });
  }
}
