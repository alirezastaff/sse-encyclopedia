import React from "react";

type ArticleLayoutProps = {
  title: string;
  category: string;
  children: React.ReactNode;
};

export default function ArticleLayout({
  title,
  category,
  children,
}: ArticleLayoutProps) {
  return (
    <article>
      <header className="mb-10 border-b pb-6">
        <h1 className="text-4xl font-bold mb-3">
          {title}
        </h1>

        <p className="text-sm text-gray-500">
          Category: {category}
        </p>
      </header>

      <section>
        {children}
      </section>
    </article>
  );
}