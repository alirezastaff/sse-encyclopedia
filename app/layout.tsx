import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "دانشنامه اقتصاد اجتماعی و همبستگی",
  description: "مرجع فارسی دانشنامه اقتصاد اجتماعی و همبستگی سازمان ملل متحد",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}