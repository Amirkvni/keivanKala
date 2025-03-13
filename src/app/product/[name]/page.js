import Header from "@/components/modules/header/Header";
import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import ProductDetail from "@/components/templates/product/product-detail/ProductDetail";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import RelatedProducts from "@/components/templates/product/product-detail/RelatedProducts";
import Tabs from "@/components/templates/product/product-detail/Tabs";
import { authUser } from "@/utils/serverHelpers";
import VisitModel from "@/models/Visit";
async function ProductDetailPage({ params }) {
  const { name } = await params;
  connectToDB();
  const user = await authUser();
  const deslugify = (slug) => {
    return slug.toLowerCase().replace(/-/g, " ");
  };

  const productName = deslugify(name);

  const product = await ProductModel.findOne({
    englishFullName: productName,
  }).populate("comments");
  console.log(product);

  const existingVisit = await VisitModel.findOne({
    userId: user._id,
    pageName: name,
  });
  if (!existingVisit) {
    const visit = await VisitModel.create({
      userId: user._id,
      pageName: name,
      productName: product.persianName,
      price: product.price,
      image: product.mainImage,
    });
  }

  return (
    <div>
      <Header />
      <Breadcrumb />
      <ProductDetail product={JSON.parse(JSON.stringify(product))} />
      <RelatedProducts category={product.category} />
      <Tabs product={JSON.parse(JSON.stringify(product))} />
    </div>
  );
}

export default ProductDetailPage;
