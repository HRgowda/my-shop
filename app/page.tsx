"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import CategoryList from "@/components/CategoryList";
import { Product } from "@/types/product";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data: { products: Product[] }) => {
        setProducts(data.products);
        setCategories([...new Set(data.products.map((p: any) => p.category))]);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="p-4 bg-black">
      <Header />
      <CategoryList categories={categories} onCategorySelect={setSelectedCategory} />
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
