import Messages from "@/components/templates/profile/Messages";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import React from "react";
import NotificationModel from "@/models/Notification";
export default async function page() {
  connectToDB();
  const user = await authUser();

  const discountMessages = await NotificationModel.find({
    userId: user._id,
    type: "discountMessages",
  });
  const orderProcessingMessages = await NotificationModel.find({
    userId: user._id,
    type: "orderProcessingMessages",
  });
  const OrderRegistrationMessages = await NotificationModel.find({
    userId: user._id,
    type: "orderRegistrationMessages",
  });
  const allmessageCount = await NotificationModel.countDocuments({
    userId: user._id,
  });

  return (
    <Messages
      discountMessages={JSON.parse(JSON.stringify(discountMessages))}
      orderProcessingMessages={JSON.parse(
        JSON.stringify(orderProcessingMessages)
      )}
      orderRegistrationMessages={JSON.parse(
        JSON.stringify(OrderRegistrationMessages)
      )}
      allmessageCount={allmessageCount}
    />
  );
}
