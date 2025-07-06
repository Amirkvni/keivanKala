import RecentVisits from "@/components/templates/profile/RecentVisits";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/serverHelpers";
import React from "react";
import VisitModel from "@/models/Visit";
export default async function page() {
  connectToDB();
  const user = await authUser();
  const recentVisits = await VisitModel.find({ userId: user._id })
    .sort({ timestamp: -1 })
    .limit(8);

  return (
    <RecentVisits recentVisits={JSON.parse(JSON.stringify(recentVisits))} />
  );
}
