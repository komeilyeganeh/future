import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/ui/Preloader";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "RoshaSoft",
  description: "RoshaSoft — Technology, software and digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
