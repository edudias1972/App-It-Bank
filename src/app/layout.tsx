import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "It Bank",
  description: "App com Next.js + TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
