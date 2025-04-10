import PaymentModel from "@/models/Payment";

export async function generateUniqueTrackingCode() {
  let code;
  let exists = true;

  while (exists) {
    code = Math.floor(10000 + Math.random() * 90000).toString();
    exists = await PaymentModel.findOne({ trackingCode: code });
  }

  return code;
}
