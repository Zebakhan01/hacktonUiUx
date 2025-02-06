// pages/product/[id].tsx
import ProductDetail from "../../component/ProductDetail";
import { client } from "@/sanity/lib/client";

const Page = async ({ params }: { params: { _id: string } }) => {
  const query = `*[ _type == "product" && _id == $id]{
    name,
    _id,
    price,
    title,
     description,
     discountPercentage
      stockLevel,
      discountPercentage,
    isFeaturedProduct,
    name,
     "imageUrl": productImage.asset->url,
        tags
      }
       `;

  const product: Product | null = await client.fetch(query, { id: params._id });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <ProductDetail product={product} key={product._id} />
      </div>
    </div>
  );
};

export default Page;
