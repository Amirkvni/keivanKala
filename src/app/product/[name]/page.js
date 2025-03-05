import Header from "@/components/modules/header/Header";
import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import ProductDetail from "@/components/templates/product/product-detail/ProductDetail";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import RelatedProducts from "@/components/templates/product/product-detail/RelatedProducts";
import Tabs from "@/components/templates/product/product-detail/Tabs";
async function ProductDetailPage({ params }) {
  const { name } = await params;
  connectToDB();
  const deslugify = (slug) => {
    return slug.toLowerCase().replace(/-/g, " "); // جایگزینی خط تیره با فاصله
  };

  const productName = deslugify(name);

  const product = await ProductModel.findOne({
    englishFullName: productName,
  });
  //   console.log(name);

  //   console.log(productName);
  //   console.log(product);

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
