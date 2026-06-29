import ArticlePageView from "@/components/article/ArticlePageView";

export default async function FaArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ArticlePageView locale="fa" slug={slug} />;
}