import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Encyclopedia",
  description: "Research Encyclopedia Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body style={{ margin: 0 }}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}