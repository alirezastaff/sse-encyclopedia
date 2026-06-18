import Link from "next/link";

export default function EnHomePage() {
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
          Research Encyclopedia
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
          A structured knowledge platform providing bilingual research
          articles on concepts, theories, organizations, scholars,
          institutions, and specialized topics.
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
          <h3>Research Articles</h3>
          <p>
            Explore structured and referenced encyclopedia entries.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "24px",
          }}
        >
          <h3>Subject Categories</h3>
          <p>
            Browse the encyclopedia by academic and thematic domains.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "24px",
          }}
        >
          <h3>Encyclopedia Search</h3>
          <p>
            Search across all entries and research content.
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
          href="/en/articles/stoicism"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          View Sample Article
        </Link>
      </section>
    </div>
  );
}