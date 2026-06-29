"use client";

import Link from "next/link";
import { type ElementType, useEffect, useMemo, useRef, useState } from "react";
import { type ArticleLocale, getLocalizedArticle } from "@/lib/articles";

type ArticlePageViewProps = {
  locale: ArticleLocale;
  slug: string;
};

type Section = {
  id: string;
  kind: "heading" | "paragraph";
  text: string;
};

type SelectionState = {
  sectionId: string;
  sentenceIndex: number;
  text: string;
  rect: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
};

function classifySection(text: string): "heading" | "paragraph" {
  const normalized = text.trim().replace(/\s+/g, " ");
  if (!normalized) return "paragraph";
  if (/^(BOX|REFERENCES)\b/i.test(normalized)) return "heading";
  if (/^[۰-۹\d]+([.)]|[IVX]+[.)])/.test(normalized)) return "heading";
  if (/^[A-Z0-9\s&’'()\-:]+$/.test(normalized) && normalized.length < 90) return "heading";
  if (/^[\u0600-\u06FF]+$/.test(normalized) && normalized.length < 80) return "heading";
  return "paragraph";
}

function splitSentences(text: string) {
  const normalized = text.trim().replace(/\s+/g, " ");
  const matches = normalized.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
  if (!matches) return [normalized];
  return matches.map((sentence) => sentence.trim()).filter(Boolean);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default function ArticlePageView({ locale, slug }: ArticlePageViewProps) {
  const article = getLocalizedArticle(slug, locale);
  const isPersian = locale === "fa";
  const articleContentRef = useRef<HTMLElement | null>(null);
  const [userRating, setUserRating] = useState(0);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [draftNote, setDraftNote] = useState("");
  const [noteTargetKey, setNoteTargetKey] = useState<string | null>(null);
  const [highlightedSentences, setHighlightedSentences] = useState<Record<string, boolean>>({});
  const [selectionState, setSelectionState] = useState<SelectionState | null>(null);

  const sections = useMemo<Section[]>(() => {
    if (!article) return [];
    return article.body.map((text, index) => ({
      id: `section-${index}`,
      kind: classifySection(text),
      text,
    }));
  }, [article]);

  const summaryText = useMemo(() => {
    if (!article) return "";
    return [article.body[0], article.body[1], article.body[2]].filter(Boolean).join(" ");
  }, [article]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (articleContentRef.current && !articleContentRef.current.contains(event.target as Node)) {
        setSelectionState(null);
        setNoteTargetKey(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  if (!article) {
    return (
      <main style={{ padding: 40, fontFamily: "Vazirmatn, Tahoma, Arial, sans-serif" }}>
        <h1>{locale === "fa" ? "مقاله یافت نشد" : "Article not found"}</h1>
        <p>{locale === "fa" ? "این مقاله در پایگاه داده موجود نیست." : "This article is not available yet."}</p>
        <Link href={`/${locale}/archive`} style={{ color: "#a61922" }}>
          {locale === "fa" ? "بازگشت به آرشیو" : "Back to archive"}
        </Link>
      </main>
    );
  }

  const oppositeLocale = locale === "en" ? "fa" : "en";

  const handleSelection = () => {
    const selection = window.getSelection();
    const articleRoot = articleContentRef.current;
    if (!selection || !articleRoot || selection.rangeCount === 0) {
      setSelectionState(null);
      return;
    }

    const selectedText = selection.toString().trim();
    if (!selectedText) {
      setSelectionState(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const anchorNode = range.commonAncestorContainer;
    if (!articleRoot.contains(anchorNode)) {
      setSelectionState(null);
      return;
    }

    const sentenceElement = (anchorNode.nodeType === Node.ELEMENT_NODE
      ? anchorNode.parentElement
      : anchorNode.parentElement)?.closest<HTMLElement>("[data-sentence-key]");

    if (!sentenceElement) {
      setSelectionState(null);
      return;
    }

    const [sectionId, sentenceIndexText] = sentenceElement.getAttribute("data-sentence-key")?.split("::") ?? [];
    const sentenceIndex = Number(sentenceIndexText);
    if (!sectionId || Number.isNaN(sentenceIndex)) {
      setSelectionState(null);
      return;
    }

    const rect = range.getBoundingClientRect();
    setSelectionState({
      sectionId,
      sentenceIndex,
      text: selectedText,
      rect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      },
    });
  };

  const toggleHighlight = (key: string) => {
    setHighlightedSentences((prev) => ({ ...prev, [key]: !prev[key] }));
    setSelectionState(null);
    setNoteTargetKey(null);
  };

  const saveNote = (key: string) => {
    const trimmedNote = draftNote.trim();
    if (!trimmedNote) return;
    setNotes((prev) => ({ ...prev, [key]: trimmedNote }));
    setDraftNote("");
    setSelectionState(null);
    setNoteTargetKey(null);
  };

  const downloadAnnotatedArticle = () => {
    const highlights = Object.entries(highlightedSentences)
      .filter(([, isActive]) => isActive)
      .map(([key]) => key)
      .sort();

    const noteEntries = Object.entries(notes).filter(([, value]) => value.trim());

    const articleHtml = sections
      .map((section) => {
        if (section.kind === "heading") {
          return `<h2>${escapeHtml(section.text)}</h2>`;
        }

        const sentences = splitSentences(section.text);
        const sentenceHtml = sentences
          .map((sentence, sentenceIndex) => {
            const sentenceKey = `${section.id}::${sentenceIndex}`;
            const isHighlighted = highlightedSentences[sentenceKey];
            const note = notes[sentenceKey];
            const sentenceMarkup = isHighlighted
              ? `<mark>${escapeHtml(sentence)}</mark>`
              : escapeHtml(sentence);
            return note
              ? `<div><p>${sentenceMarkup}</p><blockquote>${escapeHtml(note)}</blockquote></div>`
              : `<p>${sentenceMarkup}</p>`;
          })
          .join("");

        return `<div>${sentenceHtml}</div>`;
      })
      .join("");

    const highlightsHtml = highlights.length
      ? `<ul>${highlights.map((key) => `<li>${escapeHtml(key)}</li>`).join("")}</ul>`
      : `<p>${isPersian ? "هنوز هایلایتی ثبت نشده است." : "No highlights yet."}</p>`;

    const notesHtml = noteEntries.length
      ? `<ul>${noteEntries.map(([key, value]) => `<li><strong>${escapeHtml(key)}</strong><br />${escapeHtml(value)}</li>`).join("")}</ul>`
      : `<p>${isPersian ? "هنوز حاشیه‌ای ثبت نشده است." : "No margin notes yet."}</p>`;

    const html = `<!DOCTYPE html>
<html lang="${locale}">
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(article.title)}</title>
    <style>
      body { font-family: Tahoma, Arial, sans-serif; line-height: 1.8; color: #222; padding: 32px; }
      h1, h2 { color: #7d1017; }
      mark { background: #f6d8dc; padding: 0 2px; }
      blockquote { border-left: 4px solid #a61922; padding-left: 12px; color: #6b4b4d; margin: 8px 0 16px; }
      .section { margin-bottom: 18px; }
    </style>
  </head>
  <body>
    <h1>${escapeHtml(article.title)}</h1>
    <p><strong>${escapeHtml(article.description)}</strong></p>
    <h2>${isPersian ? "متن مقاله" : "Article text"}</h2>
    ${articleHtml}
    <h2>${isPersian ? "هایلایت‌ها و حاشیه‌ها" : "Highlights and margin notes"}</h2>
    <h3>${isPersian ? "هایلایت‌ها" : "Highlights"}</h3>
    ${highlightsHtml}
    <h3>${isPersian ? "حاشیه‌ها" : "Margin notes"}</h3>
    ${notesHtml}
  </body>
</html>`;

    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${slug}-annotated.html`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main
      dir={isPersian ? "rtl" : "ltr"}
      style={{ padding: 32, maxWidth: 1100, margin: "0 auto", fontFamily: "Vazirmatn, Tahoma, Arial, sans-serif", lineHeight: 1.8, textAlign: isPersian ? "right" : "left" }}
    >
      <div style={{ marginBottom: 24 }}>
        <Link href={`/${locale}/archive`} style={{ color: "#a61922", textDecoration: "none", fontWeight: 700 }}>
          ← {locale === "fa" ? "بازگشت به آرشیو" : "Back to archive"}
        </Link>
      </div>

      <div style={{ border: "1px solid #eadfda", borderRadius: 18, padding: 24, background: "#fffdfb", boxShadow: "0 10px 24px rgba(125, 16, 23, 0.06)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", padding: "6px 10px", borderRadius: 999, background: "#fbf7f1", color: "#7d1017", fontWeight: 800, fontSize: 13 }}>
            {article.category}
          </span>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Link href={`/${locale}/articles/${slug}`} style={{ padding: "8px 12px", borderRadius: 999, background: "#a61922", color: "#fff", textDecoration: "none", fontWeight: 700 }}>
              {locale === "fa" ? "نسخه فعلی" : "Current version"}
            </Link>
            <Link href={`/${oppositeLocale}/articles/${slug}`} style={{ padding: "8px 12px", borderRadius: 999, border: "1px solid #eadfda", color: "#7d1017", textDecoration: "none", fontWeight: 700 }}>
              {locale === "fa" ? "نسخه انگلیسی" : "Persian version"}
            </Link>
          </div>
        </div>

        <h1 style={{ margin: "0 0 8px", fontSize: 32, lineHeight: 1.4, color: "#221f1f", fontWeight: 800 }}>{article.title}</h1>
        <p style={{ margin: "0 0 16px", color: "#686868", fontSize: 15 }}>{article.description}</p>

        <div style={{ marginBottom: 24, padding: 18, borderRadius: 14, background: "#fff7f3", border: "1px solid #f2d5d9" }}>
          <p style={{ margin: "0 0 14px", fontSize: 16, lineHeight: 1.9, color: "#3f2c2e", textAlign: "justify" }}>{summaryText}</p>
          <button
            type="button"
            onClick={downloadAnnotatedArticle}
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 16px", borderRadius: 999, background: "linear-gradient(135deg, #8f141c, #bd2731)", color: "#fff", textDecoration: "none", fontWeight: 800, boxShadow: "0 10px 20px rgba(155, 23, 29, 0.18)", border: "none", cursor: "pointer" }}
          >
            {isPersian ? "دانلود خروجی مقاله با هایلایت و حاشیه" : "Download article with highlights and notes"}
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 24 }}>
          <div style={{ border: "1px solid #eadfda", borderRadius: 12, padding: 12, background: "#fff" }}>
            <strong style={{ display: "block", color: "#7d1017", marginBottom: 4 }}>
              {locale === "fa" ? "نویسنده" : "Author"}
            </strong>
            <span>{article.author}</span>
          </div>
          <div style={{ border: "1px solid #eadfda", borderRadius: 12, padding: 12, background: "#fff" }}>
            <strong style={{ display: "block", color: "#7d1017", marginBottom: 4 }}>
              {locale === "fa" ? "صفحه شروع" : "Start page"}
            </strong>
            <span>{article.startPage}</span>
          </div>
          <div style={{ border: "1px solid #eadfda", borderRadius: 12, padding: 12, background: "#fff" }}>
            <strong style={{ display: "block", color: "#7d1017", marginBottom: 4 }}>
              {locale === "fa" ? "دسته‌بندی" : "Category"}
            </strong>
            <span>{article.category}</span>
          </div>
        </div>

        <div style={{ border: "1px solid #eadfda", borderRadius: 14, padding: 14, background: "#fff", marginBottom: 20 }}>
          <div style={{ fontWeight: 800, color: "#7d1017", marginBottom: 8 }}>
            {isPersian ? "امتیازدهی به این مدخل" : "Rate this entry"}
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setUserRating(value)}
                style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 24, color: value <= userRating ? "#f1b444" : "#d7d0c7" }}
                aria-label={`${value} star`}
              >
                ★
              </button>
            ))}
            <span style={{ marginRight: 8, color: "#686868", fontSize: 14 }}>
              {userRating > 0 ? `${userRating}/5` : (isPersian ? "هنوز امتیازی ثبت نشده" : "No rating yet")}
            </span>
          </div>
        </div>

        <article ref={articleContentRef} onMouseUp={handleSelection} onKeyUp={handleSelection}>
          {selectionState ? (
            <div
              style={{ position: "fixed", top: Math.max(16, selectionState.rect.top - 64), left: Math.max(16, selectionState.rect.left + selectionState.rect.width / 2), transform: "translateX(-50%)", zIndex: 20, background: "#fff", border: "1px solid #eadfda", borderRadius: 14, padding: 10, boxShadow: "0 12px 24px rgba(0,0,0,0.12)", minWidth: 220 }}
            >
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: noteTargetKey === `${selectionState.sectionId}::${selectionState.sentenceIndex}` ? 8 : 0 }}>
                <button
                  type="button"
                  onClick={() => toggleHighlight(`${selectionState.sectionId}::${selectionState.sentenceIndex}`)}
                  style={{ border: "none", background: highlightedSentences[`${selectionState.sectionId}::${selectionState.sentenceIndex}`] ? "#a61922" : "#fbf7f1", color: highlightedSentences[`${selectionState.sectionId}::${selectionState.sentenceIndex}`] ? "#fff" : "#7d1017", borderRadius: 999, padding: "6px 10px", cursor: "pointer", fontWeight: 700 }}
                >
                  {isPersian ? "هایلایت" : "Highlight"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const key = `${selectionState.sectionId}::${selectionState.sentenceIndex}`;
                    setNoteTargetKey(key);
                    setDraftNote(notes[key] ?? "");
                  }}
                  style={{ border: "1px solid #eadfda", background: "#fff", color: "#7d1017", borderRadius: 999, padding: "6px 10px", cursor: "pointer", fontWeight: 700 }}
                >
                  {isPersian ? "حاشیه" : "Margin"}
                </button>
              </div>

              {noteTargetKey === `${selectionState.sectionId}::${selectionState.sentenceIndex}` ? (
                <div style={{ display: "grid", gap: 8 }}>
                  <textarea
                    value={draftNote}
                    onChange={(event) => setDraftNote(event.target.value)}
                    placeholder={isPersian ? "یک حاشیه کوتاه برای این جمله بنویسید..." : "Write a short margin note for this sentence..."}
                    style={{ width: "100%", minHeight: 80, border: "1px solid #eadfda", borderRadius: 10, padding: 8, resize: "vertical", fontSize: 13 }}
                  />
                  <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
                    <button type="button" onClick={() => saveNote(`${selectionState.sectionId}::${selectionState.sentenceIndex}`)} style={{ border: "none", background: "#a61922", color: "#fff", padding: "8px 10px", borderRadius: 999, cursor: "pointer", fontWeight: 700 }}>
                      {isPersian ? "ثبت حاشیه" : "Save note"}
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {sections.map((section) => {
            if (section.kind === "heading") {
              const headingLevel = section.text.length < 60 ? 3 : 2;
              const HeadingTag = `h${headingLevel}` as ElementType;
              return (
                <HeadingTag
                  key={section.id}
                  style={{ margin: "24px 0 10px", color: "#221f1f", fontWeight: 800, lineHeight: 1.4, fontSize: headingLevel === 3 ? "1.05rem" : "1.25rem" }}
                >
                  {section.text}
                </HeadingTag>
              );
            }

            const sentences = splitSentences(section.text);
            return (
              <section key={section.id} style={{ marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid #f3e8e8" }}>
                <div style={{ display: "grid", gap: 10 }}>
                  {sentences.map((sentence, sentenceIndex) => {
                    const sentenceKey = `${section.id}::${sentenceIndex}`;
                    const isHighlighted = highlightedSentences[sentenceKey];
                    const note = notes[sentenceKey];
                    return (
                      <div key={sentenceKey} style={{ display: "grid", gap: 8 }}>
                        <div
                          data-sentence-key={sentenceKey}
                          style={{ padding: "10px 12px", borderRadius: 12, background: isHighlighted ? "rgba(199, 75, 82, 0.12)" : "#fff", border: isHighlighted ? "1px solid rgba(166, 25, 34, 0.2)" : "1px solid #f2e8e6", transition: "0.2s ease" }}
                        >
                          <p style={{ margin: 0, fontSize: 16, color: "#262626", textAlign: "justify", lineHeight: 1.85 }}>{sentence}</p>
                        </div>
                        {note ? (
                          <div style={{ borderRight: "3px solid #c74b52", padding: "8px 10px", background: "#fff8f7", borderRadius: 8 }}>
                            <div style={{ fontSize: 12, color: "#7d1017", fontWeight: 800, marginBottom: 4 }}>
                              {isPersian ? "حاشیه" : "Margin"}
                            </div>
                            <div style={{ fontSize: 14, color: "#3f2c2e", lineHeight: 1.7 }}>{note}</div>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </article>

        <div style={{ marginTop: 24, borderTop: "1px solid #eadfda", paddingTop: 20 }}>
          <button
            type="button"
            onClick={downloadAnnotatedArticle}
            style={{ border: "none", background: "#a61922", color: "#fff", padding: "10px 14px", borderRadius: 999, cursor: "pointer", fontWeight: 800 }}
          >
            {isPersian ? "دانلود خروجی نهایی" : "Download final output"}
          </button>
        </div>
      </div>
    </main>
  );
}
