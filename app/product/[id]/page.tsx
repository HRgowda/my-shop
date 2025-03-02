"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { Star, ArrowLeft } from "lucide-react";
import { toast } from "react-hot-toast";
import QuantitySelector from "@/components/QuantitySelector";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = useParams(); 
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product)
    return (
      <p className="h-screen flex items-center justify-center text-white">
        Loading...
      </p>
    );

  return (
    <div className="h-screen flex flex-col p-4 bg-[#171616] text-white">
      {/* Back Button */}
      <ArrowLeft
        className="absolute top-4 left-4 text-white cursor-pointer"
        onClick={() => router.back()}
      />

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover max-h-[50vh]"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Title & Rating */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl">{product.title}</h1>
          <div className="flex items-center">
            <Star className="text-yellow-500" />
            <span className="ml-1">{product.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="font-thin text-white">
          {product.description}
        </p>

        {/* Quantity Selector & Price */}
        <div className="grid grid-cols-2 items-center mt-2">
          <QuantitySelector />
          <p className="text-lg text-right">${product.price}</p>
        </div>

        {/* Add to Cart Button */}
        <button onClick={() => toast.success("Added to cart")}className="w-full text-black py-3 rounded-lg mt-2 bg-gradient-to-r from-[#F9D03F] to-[#E9B32A] shadow-[0px_4px_24px_4px_#F9D14033] cursor-pointer" >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
