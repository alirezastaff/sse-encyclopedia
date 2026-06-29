"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Tanha:wght@700;800;900&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Vazirmatn", Tahoma, Arial, sans-serif;
        }
      `}</style>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          background: `
            linear-gradient(135deg, #2a0a12 0%, #5c0f1a 40%, #9c1e2e 70%, #d44a5e 100%),
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.18), transparent 60%),
            radial-gradient(circle at 75% 75%, rgba(255, 180, 190, 0.15), transparent 60%)
          `,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Background Texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "url('https://picsum.photos/id/1015/2000/1200') center/cover",
            opacity: 0.07,
            mixBlendMode: "overlay",
            zIndex: -1,
          }}
        />

        {/* Main Card - Wider & Shorter */}
        <div
          style={{
            background: "rgba(255, 252, 248, 0.96)",
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
            border: "1px solid rgba(255, 255, 255, 0.92)",
            borderRadius: "42px",
            boxShadow: "0 70px 160px rgba(40, 8, 12, 0.42), inset 0 8px 20px rgba(255, 255, 255, 0.9)",
            maxWidth: "960px",
            width: "100%",
            padding: "52px 58px",
            display: "flex",
            alignItems: "stretch",
            gap: "52px",
            position: "relative",
            overflow: "hidden",
            minHeight: "520px",
          }}
        >
          {/* Vertical Divider */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "12%",
              bottom: "12%",
              width: "2px",
              background: "linear-gradient(to bottom, transparent, #a61922, #d13b4a, #a61922, transparent)",
              boxShadow: "0 0 12px rgba(166, 25, 34, 0.35)",
              zIndex: 1,
            }}
          />

          {/* Left Side - Persian Content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "28px" }}>
            {/* Logo */}
            <div
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "24px",
                background: "linear-gradient(135deg, #a61922, #e04a55)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
                fontWeight: "800",
                marginBottom: "42px",
                boxShadow: "0 25px 50px rgba(166, 25, 34, 0.38)",
                animation: "logoFloat 6s ease-in-out infinite",
              }}
            >
              هـ
            </div>

            {/* Persian Title - Split & Styled */}
            <div style={{ marginBottom: "28px" }}>
              <h1
                style={{
                  fontFamily: "'Tanha', Vazirmatn, sans-serif",
                  fontSize: "42px",
                  lineHeight: "1.02",
                  fontWeight: "900",
                  color: "#1a1616",
                  letterSpacing: "-1.9px",
                  marginBottom: "4px",
                }}
              >
                دانشنامه
              </h1>
              <h2
                style={{
                  fontFamily: "'Tanha', Vazirmatn, sans-serif",
                  fontSize: "32px",
                  lineHeight: "1.1",
                  fontWeight: "800",
                  color: "#9c1e2e",
                  letterSpacing: "-1.4px",
                }}
              >
                اقتصاد اجتماعی و همبستگی
              </h2>
            </div>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "15.8px",
                color: "#5f5f5f",
                fontWeight: "600",
                letterSpacing: "0.5px",
                marginBottom: "32px",
              }}
            >
              تدوین‌شده توسط سازمان ملل متحد
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: "16.6px",
                lineHeight: "2.12",
                color: "#2a2a2a",
                fontWeight: "400",
                textAlign: "justify",
                textJustify: "inter-word",
              }}
            >
              مرجعی <strong>جامع و الهام‌بخش</strong> از مفاهیم کلیدی، نظریه‌ها و تجربیات عملی اقتصاد اجتماعی و همبستگی برای ساختن جامعه‌ای عادلانه‌تر و مشارکتی.
            </p>
          </div>

          {/* Right Side - English + Buttons */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "28px" }}>
            {/* English Title & Description */}
            <div style={{ marginBottom: "38px" }}>
              <h3
                style={{
                  fontSize: "21px",
                  fontWeight: "700",
                  color: "#1a1616",
                  marginBottom: "8px",
                  textAlign: "left",
                  letterSpacing: "-0.4px",
                }}
              >
                Social and Solidarity Economy Encyclopedia
              </h3>
              <p
                style={{
                  fontSize: "15.4px",
                  lineHeight: "1.85",
                  color: "#444",
                  textAlign: "left",
                  fontWeight: "400",
                }}
              >
                A comprehensive and inspiring reference of key concepts, theories, and practical experiences in the social and solidarity economy for building a more just and participatory society.
              </p>
            </div>

            {/* Language Buttons - Smaller */}
            <div style={{ display: "flex", flexDirection: "column", gap: "11px", marginBottom: "auto" }}>
              <Link
                href="/fa"
                style={{
                  height: "52px",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16.5px",
                  fontWeight: "600",
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #a61922, #d13b4a)",
                  color: "white",
                  boxShadow: "0 9px 24px rgba(166, 25, 34, 0.32)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 16px 34px rgba(166, 25, 34, 0.42)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 9px 24px rgba(166, 25, 34, 0.32)";
                }}
              >
                فارسی
              </Link>

              <Link
                href="/en"
                style={{
                  height: "52px",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16.5px",
                  fontWeight: "600",
                  textDecoration: "none",
                  border: "1.5px solid #e0d4d0",
                  background: "rgba(255, 255, 255, 0.98)",
                  color: "#333",
                  boxShadow: "0 8px 22px rgba(120, 25, 30, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.borderColor = "#c89a92";
                  e.currentTarget.style.boxShadow = "0 14px 32px rgba(166, 25, 34, 0.18)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#e0d4d0";
                  e.currentTarget.style.boxShadow = "0 8px 22px rgba(120, 25, 30, 0.08)";
                }}
              >
                English
              </Link>

              <Link
                href="/fa"
                style={{
                  height: "52px",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16.2px",
                  fontWeight: "600",
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #1f1f1f, #383838)",
                  color: "#fff",
                  boxShadow: "0 9px 24px rgba(30, 30, 30, 0.25)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  marginTop: "6px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 16px 34px rgba(30, 30, 30, 0.35)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 9px 24px rgba(30, 30, 30, 0.25)";
                }}
              >
                ورود به دانشنامه
              </Link>
            </div>

            <div
              style={{
                marginTop: "auto",
                fontSize: "13.4px",
                color: "#666",
                textAlign: "center",
                lineHeight: "1.75",
              }}
            >
              ترجمه فارسی توسط پژوهشگران ایرانی<br />
              <a href="#" style={{ color: "#a61922", textDecoration: "none", fontWeight: "500" }}>
                درباره پروژه
              </a>{" "}
              •{" "}
              <a href="#" style={{ color: "#a61922", textDecoration: "none", fontWeight: "500" }}>
                همکاری با ما
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-7px) scale(1.035); }
        }
      `}</style>
    </>
  );
}