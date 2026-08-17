import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  categoryLabel: string;
}

export default function ProductCard({
  product,
  categoryLabel,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.productName}`}
  
      className="group bg-blue overflow-hidden rounded transition-all duration-300 hover:-translate-y-1.5 hover:border-[#5474B2]/30 hover:shadow-[0_12px_30px_rgba(84,116,178,0.12)]"
    >
      {/* images Container - Responsive Height */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden sm:h-52 md:h-56 bg-white ">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.productName}
            width={200}
            height={200}
            className="h-auto max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            />
          ) : (
            <span className="text-xs text-slate-300 sm:text-sm">No images</span>
          )}
          
      </div>

      {/* Content Area - Responsive Spacing */}
      <div className="space-y-1 p-3.5 sm:p-4">
        

        <h3 className=" line-clamp-2 text-xs uppercase tracking-wider text-gray-600 transition-colors ">
          {product.productName}
        </h3>
        <div className="flex flex-col md:flex-row  gap-2">

  <span className="text-sm text-slate-400 line-through">
    Rs. {product.price + 2000}
  </span>
  <span className="text-sm text-amber-950">
    Rs. {product.price}
  </span>

  <span className="flex text-xs font-medium text-red-400">
  stock availabele: {product.stockAvailable}
</span>
</div>

      </div>
    </Link>
  );
}