import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamlette",
  description: "Let us choose your meal!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
