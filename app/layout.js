import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "../components/Navber";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raghav's Todo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navber/>
        {children}</body>
    </html>
  );
}
