"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      {/* عنوان اصلی */}
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Encyclopedia of Knowledge
      </h1>

      <p style={{ fontSize: "16px", opacity: 0.7, marginBottom: "40px" }}>
        یک دانشنامه پژوهشی دوزبانه برای دسترسی ساختاریافته به دانش
      </p>

      {/* انتخاب زبان */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          href="/fa"
          style={{
            padding: "12px 20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          ورود به نسخه فارسی
        </Link>

        <Link
          href="/en"
          style={{
            padding: "12px 20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Enter English Version
        </Link>
      </div>
    </main>
  );
}