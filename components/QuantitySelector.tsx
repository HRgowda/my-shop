"use client";

import { useProductStore } from "@/store/useProductStore";
import { Minus, Plus } from "lucide-react";

const QuantitySelector = () => {
  const { quantity, setQuantity } = useProductStore();

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="p-2 border border-[#696969] rounded-full cursor-pointer"
      >
        <Minus className="text-[#696969]" />
      </button>
      <span className="text-lg text-[#F9D03F]">{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="p-2 border border-[#F9D03F] rounded-full cursor-pointer"
      >
        <Plus className="text-[#F9D03F]" />
      </button>
    </div>
  );
};

export default QuantitySelector;
