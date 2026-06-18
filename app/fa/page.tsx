import Link from "next/link";

export default function FaHomePage() {
  return (
    <div>
      <section
        style={{
          textAlign: "center",
          padding: "60px 0",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
          }}
        >
          دانشنامه پژوهشی
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.8,
            fontSize: "1.1rem",
            color: "#666",
          }}
        >
          بستری برای دسترسی ساختاریافته به دانش، مفاهیم، نظریه‌ها،
          سازمان‌ها، اندیشمندان و موضوعات تخصصی در قالب مقالات پژوهشی
          دوزبانه.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "24px",
          }}
        >
          <h3>مدخل‌های پژوهشی</h3>
          <p>
            دسترسی به مجموعه‌ای از مقالات ساختاریافته و مستند.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "24px",
          }}
        >
          <h3>دسته‌بندی موضوعی</h3>
          <p>
            مرور دانشنامه بر اساس حوزه‌های تخصصی و موضوعات پژوهشی.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "24px",
          }}
        >
          <h3>جستجوی دانشنامه</h3>
          <p>
            جستجو در تمام مدخل‌ها و محتوای علمی دانشنامه.
          </p>
        </div>
      </section>

      <section
        style={{
          marginTop: "60px",
          textAlign: "center",
        }}
      >
        <Link
          href="/fa/articles/stoicism"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          مشاهده مقاله نمونه
        </Link>
      </section>
    </div>
  );
}