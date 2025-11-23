import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import QueryProvider from "@/queries";
import LoadingFallback from "@/components/suspense/suspense";
import { Suspense } from "react";
import AppNavBar from "@/components/common/navbar/navBar";
import MainLayout from ".";
import { Provider } from "react-redux";
import StoreProvider from "@/store";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIMPLLY",
  description: "One Stop for all your needs",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider >
          <QueryProvider>
            <Suspense fallback={<LoadingFallback />}>
              <Toaster />
              <MainLayout>
                {children}
              </MainLayout>
            </Suspense>
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
