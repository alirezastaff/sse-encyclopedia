"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap');

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
            linear-gradient(135deg, #3f0810 0%, #7d1017 35%, #b8222f 65%, #e06b78 100%),
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 180, 180, 0.22), transparent 50%)
          `,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "url('https://picsum.photos/id/1015/2000/1200') center/cover",
            opacity: 0.08,
            mixBlendMode: "overlay",
            zIndex: -1,
          }}
        />

        {/* Main Card */}
        <div
          style={{
            background: "rgba(255, 252, 248, 0.93)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255, 255, 255, 0.88)",
            borderRadius: "38px",
            boxShadow: "0 65px 150px rgba(40, 8, 12, 0.48), inset 0 5px 15px rgba(255, 255, 255, 0.95)",
            maxWidth: "920px",
            width: "100%",
            padding: "60px 74px",
            display: "flex",
            alignItems: "center",
            gap: "70px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Left Side - Info */}
          <div style={{ flex: 1 }}>
            {/* Logo */}
            <div
              style={{
                width: "94px",
                height: "94px",
                borderRadius: "26px",
                background: "linear-gradient(135deg, #a61922, #e04a55)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "39px",
                fontWeight: "800",
                marginBottom: "32px",
                boxShadow: "0 26px 52px rgba(166, 25, 34, 0.42)",
                animation: "logoFloat 5s ease-in-out infinite",
              }}
            >
              هـ
            </div>

            <div>
              <h1
                style={{
                  fontSize: "30px",
                  lineHeight: "1.15",
                  fontWeight: "700",
                  color: "#1a1616",
                  marginBottom: "12px",
                  letterSpacing: "-1.3px",
                }}
              >
                دانشنامه اقتصاد اجتماعی و همبستگی
              </h1>
              <p
                style={{
                  fontSize: "15.5px",
                  color: "#5f5f5f",
                  fontWeight: "500",
                }}
              >
                تدوین‌شده توسط سازمان ملل متحد
              </p>
            </div>

            <p
              style={{
                marginTop: "36px",
                fontSize: "16.6px",
                lineHeight: "2.12",
                color: "#2f2f2f",
                fontWeight: "300",
              }}
            >
              مرجعی <strong>جامع و الهام‌بخش</strong> از مفاهیم کلیدی، نظریه‌ها و تجربیات عملی اقتصاد اجتماعی و همبستگی برای ساختن جامعه‌ای عادلانه‌تر و مشارکتی.
            </p>
          </div>

          {/* Right Side - Language Selection */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#444",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              انتخاب زبان
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <Link
                href="/fa"
                style={{
                  height: "72px",
                  borderRadius: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "600",
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #a61922, #d13b4a)",
                  color: "white",
                  boxShadow: "0 14px 34px rgba(166, 25, 34, 0.35)",
                  transition: "all 0.35s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 22px 45px rgba(166, 25, 34, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 14px 34px rgba(166, 25, 34, 0.35)";
                }}
              >
                فارسی
              </Link>

              <Link
                href="/en"
                style={{
                  height: "72px",
                  borderRadius: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "600",
                  textDecoration: "none",
                  border: "1px solid rgba(232, 217, 212, 0.9)",
                  background: "rgba(255, 255, 255, 0.97)",
                  color: "#333",
                  boxShadow: "0 12px 30px rgba(120, 25, 30, 0.1)",
                  transition: "all 0.35s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 22px 45px rgba(166, 25, 34, 0.22)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(120, 25, 30, 0.1)";
                }}
              >
                English
              </Link>

              <Link
                href="/fa"
                style={{
                  height: "72px",
                  borderRadius: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "17.5px",
                  fontWeight: "600",
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #1a1a1a, #333333)",
                  color: "#fff",
                  transition: "all 0.35s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                ورود به دانشنامه
              </Link>
            </div>

            <div
              style={{
                marginTop: "30px",
                fontSize: "13.8px",
                color: "#5f5f5f",
                textAlign: "center",
                lineHeight: "1.75",
              }}
            >
              ترجمه فارسی توسط پژوهشگران ایرانی<br />
              <a href="#" style={{ color: "#a61922", textDecoration: "none" }}>
                درباره پروژه
              </a>{" "}
              •{" "}
              <a href="#" style={{ color: "#a61922", textDecoration: "none" }}>
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
          50% { transform: translateY(-8px) scale(1.04); }
        }
      `}</style>
    </>
  );
}