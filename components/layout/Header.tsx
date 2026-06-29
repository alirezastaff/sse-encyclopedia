"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const isFa = pathname.startsWith("/fa");
  const base = isFa ? "/fa" : "/en";

  return (
    <header className="header">
      <div>
        {isFa ? "دانشنامه پژوهشی" : "Research Encyclopedia"}
      </div>

      <nav className="nav">
        <Link href={base}>{isFa ? "خانه" : "Home"}</Link>
      </nav>

      <div>
        {isFa ? (
          <Link href={pathname.replace("/fa", "/en")}>EN</Link>
        ) : (
          <Link href={pathname.replace("/en", "/fa")}>FA</Link>
        )}
      </div>
    </header>
  );
}