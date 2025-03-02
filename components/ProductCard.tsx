"use client";

import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      className="p-4 rounded-xl shadow-md cursor-pointer w-full max-w-2xl bg-[#1F1F1F]"
    >
      {/* Top Section - Image */}
      <div className="w-full h-40 flex justify-center items-center relative">
        <Image
          src={product.thumbnail}
          alt={product.title}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>

      {/* Bottom Section - Details */}
      <div className="p-4 space-y-2">
        {/* Rating */}
        <div className="flex items-center text-[#F9D03F]">
          <Star className="w-5 h-5" />
          <span className="ml-2 text-sm">{product.rating}</span>
        </div>

        {/* Product Name */}
        <h2 className="text-lg">{product.title}</h2>

        {/* Description */}
        <p className="font-thin line-clamp-1">{product.description}</p>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl text-white">${product.price}</span>
          <button className="text-[#F9D03F] text-3xl p-2 rounded-full cursor-pointer">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
