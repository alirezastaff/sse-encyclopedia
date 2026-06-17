"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  // تشخیص زبان از URL
  const isFa = pathname.startsWith("/fa");
  const base = isFa ? "/fa" : "/en";

  return (
    <header
      style={{
        padding: "16px 24px",
        borderBottom: "1px solid #e5e5e5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* لوگو / عنوان */}
      <div style={{ fontWeight: "bold" }}>
        {isFa ? "دانشنامه پژوهشی" : "Research Encyclopedia"}
      </div>

      {/* ناوبری */}
      <nav style={{ display: "flex", gap: "16px" }}>
        <Link href={base}>
          {isFa ? "خانه" : "Home"}
        </Link>

        <Link href={`${base}/articles/stoicism`}>
          {isFa ? "نمونه مقاله" : "Sample Article"}
        </Link>
      </nav>

      {/* کنترل‌ها (Theme + Language) */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <ThemeToggle />

        {isFa ? (
          <Link href={pathname.replace("/fa", "/en")}>
            EN
          </Link>
        ) : (
          <Link href={pathname.replace("/en", "/fa")}>
            FA
          </Link>
        )}
      </div>
    </header>
  );
}