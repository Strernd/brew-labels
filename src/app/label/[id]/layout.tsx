import type { Metadata } from "next";
import { Fjalla_One } from "next/font/google";

const fjalla = Fjalla_One({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={fjalla.className}>{children}</div>;
}
