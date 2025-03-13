import Comments from "@/components/templates/profile/Comments";
import CommentsModel from "@/models/Comment";
import { authUser } from "@/utils/serverHelpers";
import connectToDB from "@/configs/db";
export default async function page() {
  connectToDB();
  const user = await authUser();
  const comments = await CommentsModel.find({ userID: user._id }).populate(
    "productID",
    "mainImage persianName"
  );

  return <Comments comments={JSON.parse(JSON.stringify(comments))} />;
}
