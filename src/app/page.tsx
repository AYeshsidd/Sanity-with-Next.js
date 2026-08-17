import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { PRODUCTS_QUERY } from "@/sanity/lib/queries";
import { Product } from "@/data/products";
import { client } from "@/sanity/lib/client";
export default async function Home() {
  const products: Product[] = await client.fetch(PRODUCTS_QUERY,{
  start: 0,
  end: 8,
  })
  return (
    <>
      <main className="bg-white min-h-screen">

        <Navbar />
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-light tracking-wide text-slate-900">
                Featured Products
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Discover our premium bedsheet collection.
              </p>
            </div>

            <Link
              href="/shop"
              className="text-sm font-medium text-[#5474B2] hover:underline"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                categoryLabel="Bedsheets"
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}