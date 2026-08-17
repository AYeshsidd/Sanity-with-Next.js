import { client } from "@/sanity/lib/client";
import { PRODUCT_BY_SLUG_QUERY } from "@/sanity/lib/queries";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await client.fetch(
    PRODUCT_BY_SLUG_QUERY,
    { slug }
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="min-h-screen bg-white text-red-700 p-10">
      <h1 className="text-3xl font-semibold">
        {product.productName}
      </h1>

      <p className="mt-4">
        Rs. {product.price}
      </p>

      <p className="mt-2">
        Stock: {product.stockAvailable}
      </p>
    </main>
  );
}