import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"], // Choose required weights
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "My Shop",
  description: "E-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="antialiased">
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
