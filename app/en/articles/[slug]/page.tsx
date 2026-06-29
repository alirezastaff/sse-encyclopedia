import ArticlePageView from "@/components/article/ArticlePageView";

export default async function EnArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ArticlePageView locale="en" slug={slug} />;
}