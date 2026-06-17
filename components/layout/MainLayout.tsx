import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* Header */}
      <header
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <h2 style={{ margin: 0 }}>دانشنامه پژوهشی</h2>
      </header>

      {/* Body */}
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        {children}
      </main>
    </div>
  );
}