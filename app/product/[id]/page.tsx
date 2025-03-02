"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "@/types/product";
import { Star, ArrowLeft } from "lucide-react";
import { toast } from "react-hot-toast";
import QuantitySelector from "@/components/QuantitySelector";
import { useProductStore } from "@/store/useProductStore";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>(); 
  const [product, setProduct] = useState<Product | null>(null);
  const { quantity, setQuantity } = useProductStore();

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data: Product) => {
        setProduct(data);
        setQuantity(1); // Reset quantity to 1 when loading a new product
      }) 
      .catch((error) => console.error("Error fetching product:", error));
  }, [id, setQuantity]);

  if (!product)
    return (
      <p className="h-screen flex items-center justify-center text-white">
        Loading...
      </p>
    );

  return (
    <div className="h-screen flex flex-col p-6 bg-[#171616] text-white">
      {/* Back Button */}
      <ArrowLeft
        className="absolute top-4 left-4 text-white cursor-pointer"
        onClick={() => router.back()}
      />

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300} 
          height={300} 
          className="object-cover max-h-[50vh] rounded-lg"
          priority
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
        <p className="font-thin text-white">{product.description}</p>

        {/* Quantity Selector & Price */}
        <div className="grid grid-cols-2 items-center">
          <QuantitySelector />
          <p className="text-lg text-right">${(quantity * product.price).toFixed(2)}</p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => toast.success(`Added ${quantity} item to cart`)}
          className="w-full text-black py-3 rounded-lg bg-gradient-to-r from-[#F9D03F] to-[#E9B32A] shadow-[0px_4px_24px_4px_#F9D14033] cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
