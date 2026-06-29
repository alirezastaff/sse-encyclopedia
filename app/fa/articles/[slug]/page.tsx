export default function FaArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main style={{ padding: "40px" }}>
      <h1>مقاله فارسی</h1>
      <p>Slug: {params.slug}</p>
    </main>
  );
}