import DashboardComments from "@/components/templates/dashboard/all-comments/DashboardComments";
import CommentModel from "@/models/Comment";

export default async function Page() {
  const allComments = await CommentModel.find({}).populate(
    "productID",
    "persianName englishFullName mainImage"
  );

  return (
    <DashboardComments allComments={JSON.parse(JSON.stringify(allComments))} />
  );
}
