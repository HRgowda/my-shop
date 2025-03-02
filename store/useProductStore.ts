import { create } from "zustand"

interface ProductState {
  selectedProduct: any | null;
  setSelectedProduct: (product: any) => void;
  quantity: number;
  setQuantity: (quantity: number) => void
}

export const useProductStore = create<ProductState>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  quantity: 1,
  setQuantity: (quantity) => set({ quantity }),
}));