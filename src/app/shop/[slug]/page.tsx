import { client } from "@/sanity/lib/client";
import { PRODUCTS_QUERY} from "@/sanity/lib/queries";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = await client.fetch(
    PRODUCTS_QUERY,
    { slug }
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-semibold">
        {product.productName}
      </h1>

      <p className="mt-4">
        Rs. {product.price}
      </p>

      <p className="mt-2">
        Stock: {product.stockAvailable}
      </p>

      <p className="mt-2">
        Category: {product.category?.title}
      </p>
    </main>
  );
}