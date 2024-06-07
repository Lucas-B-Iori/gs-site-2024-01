import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Global Solution FIAP",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={oswald.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
