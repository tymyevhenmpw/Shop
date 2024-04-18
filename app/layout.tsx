import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santehvan shop",
  description: "Your's best bathroom advisor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
        <body className={inter.className}>
          <Header/>
          <main className="flex flex-row">
              <section className = "main-container">
                <div className = "w-full max-w-screen-2xl">
                    {children}
                </div>
              </section>
          </main>
          <Footer/>
        </body>
      </html>
  );
}
