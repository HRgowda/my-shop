"use client";

import { useState } from "react";

export default function CategoryList ({ categories, onCategorySelect,}: {
  categories: string[]; onCategorySelect: (category: string | null) => void; }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="flex gap-4 overflow-x-auto p-2">
      {categories.map((category) => (
        <span
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-3 py-2 rounded-xl text-sm cursor-pointer ${
            selectedCategory === category ? "bg-[#F9D03F] text-black" : " text-[#696969]"
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
      ))}
    </div>
  );
};
