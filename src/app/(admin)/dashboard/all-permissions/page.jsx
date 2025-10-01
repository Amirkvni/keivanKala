import Permissions from "@/components/templates/dashboard/all-permissions/Permissions";
import PermissionModel from "@/models/Permission";
export default async function Page() {
  const allPermissions = await PermissionModel.find({});
  return (
    <Permissions permissions={JSON.parse(JSON.stringify(allPermissions))} />
  );
}
