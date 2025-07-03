import Navbar from "./components/Navbar";
import Link from "next/link";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test NextJS",
  description: "NextJS",
  keywords: "Test NextJS Nextjs",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
export default layout;
