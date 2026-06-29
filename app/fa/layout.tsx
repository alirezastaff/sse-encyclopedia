import MainLayout from "@/components/layout/MainLayout";

export default function FaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}