// app/edit-discountCode/[id]/page.jsx
import DiscountCodeForm from "@/components/templates/dashboard/DiscountCodeForm";
import discountCodeModel from "@/models/DiscountCode";
import productsModel from "@/models/Product";
import usersModel from "@/models/User";

export default async function Page({ params }) {
  const { id } = params;
  const products = await productsModel.find({}, "_id persianName");
  const users = await usersModel.find({}, "_id email");
  const discountCode = await discountCodeModel.findById(id);

  if (!discountCode) {
    return <div>کد تخفیف یافت نشد</div>;
  }
  console.log(discountCode);

  const initialData = {
    _id: discountCode._id,
    code: discountCode.code,
    discountType: discountCode.discountType,
    discountValue: discountCode.discountValue,
    usageLimit: discountCode.usageLimit,
    startDate: discountCode.startDate,
    endDate: discountCode.endDate,
    applicableUsers: discountCode.applicableUsers,
    applicableProducts: discountCode.applicableProducts,
    applicableToAllUsers: discountCode.applicableToAllUsers,
    applicableToAllProducts: discountCode.applicableToAllProducts,
  };

  return (
    <DiscountCodeForm
      products={JSON.parse(JSON.stringify(products))}
      users={JSON.parse(JSON.stringify(users))}
      initialData={JSON.parse(JSON.stringify(initialData))}
      mode="edit"
    />
  );
}
