"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  // اگر در صفحه اصلی (خانه) هستیم، هدر را خیلی سبک و شفاف نشان بده
  const isHome = pathname === "/" || pathname === "/fa" || pathname === "/en";

  return (
    <header
      style={{
        padding: isHome ? "20px 40px" : "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: isHome 
          ? "rgba(255, 252, 248, 0.75)" 
          : "white",
        borderBottom: isHome ? "none" : "1px solid #e5e5e5",
        backdropFilter: isHome ? "blur(20px)" : "none",
      }}
    >
      {/* لوگو / عنوان */}
      <div style={{ fontWeight: "700", fontSize: "20px" }}>
        {pathname?.startsWith("/fa") || pathname === "/" 
          ? "دانشنامه اقتصاد اجتماعی" 
          : "Social & Solidarity Economy"}
      </div>

      {/* ناوبری */}
      <nav style={{ display: "flex", gap: "20px", fontSize: "15px" }}>
        <Link href={pathname?.startsWith("/fa") ? "/fa" : "/en"} className="hover:text-red-700 transition-colors">
          خانه
        </Link>
        <Link href={`${pathname?.startsWith("/fa") ? "/fa" : "/en"}/articles`} className="hover:text-red-700 transition-colors">
          مدخل‌ها
        </Link>
      </nav>

      {/* تغییر زبان */}
      <div>
        {pathname?.startsWith("/fa") ? (
          <Link 
            href={pathname.replace("/fa", "/en")} 
            className="text-sm font-medium hover:text-red-600 transition-colors"
          >
            EN
          </Link>
        ) : (
          <Link 
            href={pathname.replace("/en", "/fa")} 
            className="text-sm font-medium hover:text-red-600 transition-colors"
          >
            FA
          </Link>
        )}
      </div>
    </header>
  );
}