export default function EnArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main style={{ padding: "40px" }}>
      <h1>English Article</h1>
      <p>Slug: {params.slug}</p>
    </main>
  );
}