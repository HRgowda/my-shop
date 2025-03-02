"use client"

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = ({ showBack }: { showBack?: boolean }) => {
  const router = useRouter();

  return (
    <header className="p-4 flex items-center">
      {showBack && (
        <button onClick={() =>
         router.back()
         } className="mr-4">
          <ArrowLeft size={24} />
        </button>
      )}
      <h1 className="text-3xl">Product List</h1>
    </header>
  );
};

export default Header;
