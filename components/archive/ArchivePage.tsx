"use client";

import { useMemo, useState } from "react";

type Locale = "fa" | "en";

type Entry = {
  no: number;
  en: string;
  fa: string;
  page: number;
};

type Part = {
  id: string;
  number: string;
  faTitle: string;
  enTitle: string;
  entries: Entry[];
};

const encyclopediaParts: Part[] = [
  {
    id: "part-1",
    number: "I",
    faTitle: "بخش اول: تاریخ‌ها، مفاهیم و نظریه‌ها",
    enTitle: "PART I: HISTORIES, CONCEPTS AND THEORIES",
    entries: [
      { no: 1, en: "Activism and social movements", fa: "کنشگری و جنبش‌های اجتماعی", page: 2 },
      { no: 2, en: "Community economies", fa: "اقتصادهای اجتماعی محلی", page: 12 },
      { no: 3, en: "Contemporary understandings", fa: "برداشت‌های معاصر", page: 19 },
      { no: 4, en: "Ecological economics", fa: "اقتصاد بوم‌شناختی", page: 27 },
      { no: 5, en: "Feminist economics", fa: "اقتصاد فمینیستی", page: 37 },
      { no: 6, en: "Globalization and alter-globalization", fa: "جهانی‌سازی و دگرجهانی‌سازی", page: 44 },
      { no: 7, en: "Heterodox economics", fa: "اقتصاد دگراندیش", page: 53 },
      { no: 8, en: "Indigenous economies", fa: "اقتصادهای بومی", page: 61 },
      { no: 9, en: "Moral economy and human economy", fa: "اقتصاد اخلاقی و اقتصاد انسانی", page: 68 },
      { no: 10, en: "Origins and histories", fa: "خاستگاه‌ها و تاریخ‌ها", page: 73 },
      { no: 11, en: "Postcolonial theories", fa: "نظریه‌های پسااستعماری", page: 83 },
      { no: 12, en: "The Black social economy", fa: "اقتصاد اجتماعی سیاهان", page: 92 },
      { no: 13, en: "The commons", fa: "کامنز", page: 97 },
    ],
  },
  {
    id: "part-2",
    number: "II",
    faTitle: "بخش دوم: کنشگران و سازمان‌ها",
    enTitle: "PART II: ACTORS AND ORGANIZATIONS",
    entries: [
      { no: 14, en: "African American solidarity economics and distributive justice", fa: "اقتصاد همبستگی آفریقایی-آمریکایی و عدالت توزیعی", page: 105 },
      { no: 15, en: "Associations and associationalism", fa: "انجمن‌ها و انجمن‌گرایی", page: 113 },
      { no: 16, en: "Community-based organizations", fa: "سازمان‌های مبتنی بر جامعه", page: 121 },
      { no: 17, en: "Cooperatives and mutuals", fa: "تعاونی‌ها و نهادهای متقابل", page: 131 },
      { no: 18, en: "LGBT* inclusion", fa: "شمول LGBT*", page: 138 },
      { no: 19, en: "Migrants and refugees", fa: "مهاجران و پناهندگان", page: 147 },
      { no: 20, en: "Non-governmental organisations and foundations", fa: "سازمان‌های غیردولتی و بنیادها", page: 155 },
      { no: 21, en: "Social enterprises", fa: "بنگاه‌های اجتماعی", page: 163 },
      { no: 22, en: "Women’s self-help groups", fa: "گروه‌های خودیاری زنان", page: 172 },
      { no: 23, en: "Youth", fa: "جوانان", page: 180 },
    ],
  },
  {
    id: "part-3",
    number: "III",
    faTitle: "بخش سوم: پیوندها با توسعه",
    enTitle: "PART III: LINKAGES TO DEVELOPMENT",
    entries: [
      { no: 24, en: "Care and home support services", fa: "خدمات مراقبت و حمایت خانگی", page: 187 },
      { no: 25, en: "Culture, sports and leisure sectors", fa: "بخش‌های فرهنگ، ورزش و اوقات فراغت", page: 194 },
      { no: 26, en: "Education sector", fa: "بخش آموزش", page: 200 },
      { no: 27, en: "Energy, water and waste management sectors", fa: "بخش‌های انرژی، آب و مدیریت پسماند", page: 209 },
      { no: 28, en: "Finance sector", fa: "بخش مالی", page: 216 },
      { no: 29, en: "Food and agriculture sector", fa: "بخش غذا و کشاورزی", page: 224 },
      { no: 30, en: "Gender equality and empowerment", fa: "برابری جنسیتی و توانمندسازی", page: 231 },
      { no: 31, en: "Health and care sector", fa: "بخش سلامت و مراقبت", page: 240 },
      { no: 32, en: "Housing sector", fa: "بخش مسکن", page: 248 },
      { no: 33, en: "Information and communication technology (ICT)", fa: "فناوری اطلاعات و ارتباطات", page: 255 },
      { no: 34, en: "Local community development", fa: "توسعه جامعه محلی", page: 264 },
      { no: 35, en: "Peace and non-violence", fa: "صلح و عدم خشونت", page: 272 },
      { no: 36, en: "Reduction of hunger and poverty", fa: "کاهش گرسنگی و فقر", page: 281 },
      { no: 37, en: "Reduction of multidimensional inequalities", fa: "کاهش نابرابری‌های چندبعدی", page: 287 },
      { no: 38, en: "Social services", fa: "خدمات اجتماعی", page: 295 },
      { no: 39, en: "Sustainable investment, production and consumption", fa: "سرمایه‌گذاری، تولید و مصرف پایدار", page: 303 },
      { no: 40, en: "The Sustainable Development Goals", fa: "اهداف توسعه پایدار", page: 310 },
      { no: 41, en: "Tourism sector", fa: "بخش گردشگری", page: 321 },
      { no: 42, en: "Work integration", fa: "ادغام در کار", page: 329 },
    ],
  },
  {
    id: "part-4",
    number: "IV",
    faTitle: "بخش چهارم: محیط توانمندساز و حکمرانی",
    enTitle: "PART IV: ENABLING ENVIRONMENT AND GOVERNANCE",
    entries: [{ no: 43, en: "Access to markets", fa: "دسترسی به بازارها", page: 338 }],
  },
];

const styles = `
  :root {
    --red-900: #7d1017;
    --red-700: #a61922;
    --red-500: #c74b52;
    --cream: #fbf7f1;
    --bg: #fffdfa;
    --white: #ffffff;
    --text: #262626;
    --muted: #6b6b6b;
    --line: #eadfda;
    --shadow: 0 12px 34px rgba(125, 16, 23, 0.08);
    --card-shadow: 0 8px 20px rgba(30, 30, 30, 0.05);
    --radius-xl: 22px;
    --radius-lg: 18px;
    --radius-md: 14px;
    --radius-sm: 10px;
  }

  * { box-sizing: border-box; }
  body { margin: 0; }

  .archive-page {
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px 18px 34px;
    color: var(--text);
    background: radial-gradient(circle at top right, rgba(166, 25, 34, 0.08), transparent 24%), linear-gradient(180deg, #fbf7f1 0%, #fffdf9 100%);
    font-family: Tahoma, "Vazirmatn", "IRANSans", sans-serif;
    font-size: 14px;
    line-height: 1.7;
  }

  .hero {
    background: linear-gradient(135deg, rgba(125,16,23,0.96), rgba(166,25,34,0.92));
    color: #fff;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow);
    padding: 24px 26px;
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
  }

  .hero::before, .hero::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
  }

  .hero::before { width: 240px; height: 240px; top: -100px; right: -70px; }
  .hero::after { width: 180px; height: 180px; left: -70px; bottom: -80px; }

  .hero-inner { position: relative; z-index: 2; display: grid; grid-template-columns: 1.6fr 0.9fr; gap: 20px; align-items: center; }
  .eyebrow { display: inline-flex; align-items: center; gap: 8px; padding: 5px 10px; border: 1px solid rgba(255,255,255,0.18); border-radius: 999px; background: rgba(255,255,255,0.08); font-size: 12px; margin-bottom: 10px; }
  .hero h1 { margin: 0 0 8px; font-size: clamp(1.35rem, 2.3vw, 2.2rem); line-height: 1.45; }
  .hero p { margin: 0; color: rgba(255,255,255,0.88); font-size: 0.92rem; }
  .stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .stat { border: 1px solid rgba(255,255,255,0.14); background: rgba(255,255,255,0.09); border-radius: 16px; padding: 12px; backdrop-filter: blur(8px); }
  .stat strong { display: block; font-size: 1.12rem; margin-bottom: 2px; }
  .stat span { font-size: 0.78rem; color: rgba(255,255,255,0.82); }

  .toolbar { display: grid; grid-template-columns: 1fr auto; gap: 10px; align-items: center; background: rgba(255,255,255,0.84); border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--card-shadow); padding: 10px; margin-bottom: 16px; backdrop-filter: blur(10px); position: sticky; top: 10px; z-index: 10; }
  .searchbox { display: flex; align-items: center; gap: 8px; background: var(--white); border: 1px solid var(--line); border-radius: 999px; padding: 7px 12px; }
  .searchbox span { color: var(--red-700); font-weight: 800; font-size: 0.82rem; white-space: nowrap; }
  .searchbox input { width: 100%; border: 0; outline: 0; background: transparent; color: var(--text); padding: 4px; font-size: 0.84rem; }
  .actions { display: flex; gap: 8px; flex-wrap: wrap; }
  .btn { border: 1px solid var(--line); background: var(--white); color: var(--red-900); border-radius: 999px; padding: 7px 12px; cursor: pointer; font-size: 0.82rem; transition: 0.2s ease; }
  .btn:hover { transform: translateY(-1px); background: #fff7f3; border-color: rgba(166,25,34,0.35); }

  .layout { display: grid; grid-template-columns: minmax(420px, 0.9fr) minmax(0, 1.1fr); gap: 16px; align-items: start; }
  .panel { background: rgba(255,255,255,0.86); border: 1px solid var(--line); border-radius: var(--radius-xl); box-shadow: var(--card-shadow); overflow: hidden; backdrop-filter: blur(12px); }
  .panel-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 16px; border-bottom: 1px solid var(--line); background: linear-gradient(90deg, rgba(166,25,34,0.06), rgba(255,255,255,0)); }
  .panel-head h2 { margin: 0; font-size: 0.98rem; color: var(--red-900); }
  .panel-head p { margin: 3px 0 0; color: var(--muted); font-size: 0.78rem; }
  .pill { border: 1px solid var(--line); background: var(--cream); color: var(--red-700); border-radius: 999px; padding: 6px 10px; font-size: 0.76rem; font-weight: 800; white-space: nowrap; }
  .catalog-body { padding: 10px; max-height: calc(100vh - 180px); overflow: auto; }
  .part { border: 1px solid var(--line); border-radius: 16px; background: #fffdfb; overflow: hidden; margin-bottom: 10px; }
  .part-toggle { width: 100%; border: 0; background: transparent; cursor: pointer; padding: 11px 12px; display: grid; grid-template-columns: 1fr auto; gap: 12px; text-align: right; align-items: center; }
  .part-toggle:hover { background: rgba(166,25,34,0.04); }
  .part-fa { font-weight: 900; color: var(--red-900); font-size: 0.86rem; }
  .part-en { direction: ltr; text-align: left; color: var(--muted); font-family: Georgia, "Times New Roman", serif; font-size: 0.76rem; margin-top: 2px; }
  .mark { width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--line); background: var(--cream); color: var(--red-700); font-weight: 900; }
  .entries { display: none; padding: 0 8px 8px; }
  .part.open .entries { display: grid; gap: 6px; }
  .entry-btn { width: 100%; border: 1px solid transparent; background: var(--white); border-radius: 12px; padding: 8px 9px; cursor: pointer; display: grid; grid-template-columns: auto 1fr; gap: 9px; text-align: right; align-items: start; transition: 0.18s ease; }
  .entry-btn:hover { border-color: rgba(166,25,34,0.22); transform: translateY(-1px); box-shadow: 0 6px 14px rgba(125,16,23,0.05); }
  .entry-btn.active { background: linear-gradient(90deg, rgba(166,25,34,0.08), rgba(199,75,82,0.03)); border-color: rgba(166,25,34,0.34); }
  .entry-no { min-width: 30px; height: 30px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--line); background: var(--cream); color: var(--red-700); font-size: 0.74rem; font-weight: 900; margin-top: 1px; }
  .entry-fa { font-size: 0.82rem; font-weight: 800; color: var(--text); line-height: 1.45; }
  .entry-en { direction: ltr; text-align: left; font-size: 0.76rem; color: var(--muted); font-family: Georgia, "Times New Roman", serif; line-height: 1.35; margin-top: 1px; }
  .entry-meta { font-size: 0.68rem; color: var(--muted); margin-top: 2px; }
  .reader-body { padding: 16px; min-height: 560px; }
  .empty { min-height: 470px; border: 1px dashed rgba(166,25,34,0.24); border-radius: var(--radius-lg); background: linear-gradient(135deg, rgba(251,247,241,0.95), rgba(255,255,255,0.93)); display: flex; align-items: center; justify-content: center; text-align: center; padding: 24px; color: var(--muted); }
  .empty h3 { margin: 0 0 8px; color: var(--red-900); font-size: 1rem; }
  .selected { display: grid; gap: 14px; }
  .entry-card { background: linear-gradient(135deg, rgba(125,16,23,0.95), rgba(166,25,34,0.88)); color: #fff; border-radius: var(--radius-lg); padding: 18px 20px; position: relative; overflow: hidden; }
  .entry-card::after { content: ""; position: absolute; width: 160px; height: 160px; border-radius: 50%; left: -45px; bottom: -70px; background: rgba(255,255,255,0.08); }
  .entry-card > div { position: relative; z-index: 2; }
  .entry-kicker { display: inline-flex; padding: 5px 9px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.10); font-size: 0.74rem; margin-bottom: 10px; color: rgba(255,255,255,0.9); }
  .entry-card h2 { margin: 0 0 5px; font-size: 1.3rem; line-height: 1.45; }
  .entry-card .entry-main-en { direction: ltr; text-align: left; font-family: Georgia, "Times New Roman", serif; color: rgba(255,255,255,0.84); font-size: 0.95rem; }
  .reader-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 10px 12px; background: #fffdfb; }
  .reader-top strong { display: block; color: var(--red-900); font-size: 0.86rem; margin-bottom: 1px; }
  .reader-top span { color: var(--muted); font-size: 0.75rem; }
  .lang-switch { position: relative; display: inline-grid; grid-template-columns: 1fr 1fr; width: 184px; min-width: 184px; padding: 4px; background: var(--cream); border: 1px solid var(--line); border-radius: 999px; overflow: hidden; }
  .lang-switch::before { content: ""; position: absolute; top: 4px; bottom: 4px; width: calc(50% - 4px); right: 4px; border-radius: 999px; background: var(--red-700); box-shadow: 0 7px 16px rgba(166,25,34,0.22); transition: transform 0.25s ease; z-index: 1; }
  .lang-switch[data-lang="en"]::before { transform: translateX(-100%); }
  .lang-btn { position: relative; z-index: 2; border: 0; background: transparent; cursor: pointer; border-radius: 999px; padding: 7px 10px; font-size: 0.78rem; font-weight: 800; color: var(--muted); }
  .lang-switch[data-lang="fa"] .lang-btn[data-lang="fa"], .lang-switch[data-lang="en"] .lang-btn[data-lang="en"] { color: #fff; }
  .article { border: 1px solid var(--line); border-radius: var(--radius-lg); background: #fffdfb; padding: 18px; min-height: 250px; }
  .article.en { direction: ltr; text-align: left; font-family: Georgia, "Times New Roman", serif; }
  .lang-label { display: inline-flex; align-items: center; gap: 6px; border: 1px solid var(--line); background: var(--cream); color: var(--red-700); border-radius: 999px; padding: 5px 9px; font-size: 0.75rem; font-weight: 800; margin-bottom: 12px; }
  .article h3 { margin: 0 0 10px; color: var(--red-900); font-size: 1.08rem; line-height: 1.45; }
  .article p { margin: 0 0 12px; font-size: 0.88rem; }
  .note { border: 1px dashed rgba(166,25,34,0.28); background: rgba(166,25,34,0.035); border-radius: 14px; padding: 14px; font-size: 0.88rem; }
  .meta-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 9px; }
  .meta-box { border: 1px solid var(--line); border-radius: 13px; background: #fff; padding: 10px; }
  .meta-box strong { display: block; color: var(--red-900); font-size: 0.73rem; margin-bottom: 3px; }
  .meta-box span { color: var(--muted); font-size: 0.78rem; line-height: 1.45; }

  @media (max-width: 1120px) { .hero-inner, .layout, .meta-grid { grid-template-columns: 1fr; } .toolbar { grid-template-columns: 1fr; position: static; } .catalog-body { max-height: none; } }
  @media (max-width: 640px) { .archive-page { padding: 14px 10px 28px; } .hero { padding: 20px 16px; } .stats { grid-template-columns: 1fr 1fr; } .reader-top, .panel-head { flex-direction: column; align-items: flex-start; } .lang-switch { width: 100%; min-width: 100%; } }
`;

function toFaNum(value: number | string) {
  return String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}

export default function ArchivePage({ locale = "fa" }: { locale?: Locale }) {
  const isFa = locale === "fa";
  const [query, setQuery] = useState("");
  const [activeEntryNo, setActiveEntryNo] = useState<number | null>(null);
  const [activeLanguage, setActiveLanguage] = useState<"fa" | "en">("fa");
  const [expandedParts, setExpandedParts] = useState<Record<string, boolean>>(
    Object.fromEntries(encyclopediaParts.map((part) => [part.id, true]))
  );

  const filteredParts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return encyclopediaParts;

    return encyclopediaParts.filter((part) =>
      part.entries.some((entry) => {
        const haystack = [entry.no, entry.en, entry.fa, entry.page, part.faTitle, part.enTitle].join(" ").toLowerCase();
        return haystack.includes(q);
      })
    );
  }, [query]);

  const totalEntries = encyclopediaParts.reduce((sum, part) => sum + part.entries.length, 0);
  const visibleCount = filteredParts.reduce((sum, part) => sum + part.entries.length, 0);

  const selectedEntry = useMemo(() => {
    if (activeEntryNo == null) return null;
    for (const part of encyclopediaParts) {
      const found = part.entries.find((entry) => entry.no === activeEntryNo);
      if (found) {
        return { ...found, partFa: part.faTitle, partEn: part.enTitle, partNumber: part.number };
      }
    }
    return null;
  }, [activeEntryNo]);

  const strings = isFa
    ? {
        eyebrow: "Encyclopedia Archive / آرشیو دانشنامه",
        heroTitle: "آرشیو مدخل‌های دانشنامه اقتصاد اجتماعی و همبستگی",
        heroText:
          "فهرست مدخل‌ها بر اساس فهرست مطالب کتاب تنظیم شده است. با انتخاب هر مدخل، اطلاعات آن در پنل سمت چپ نمایش داده می‌شود و می‌توانید متن را بین فارسی و انگلیسی جابه‌جا کنید.",
        partsLabel: "بخش اصلی",
        entriesLabel: "مدخل",
        switchLabel: "سوئیچ زبان",
        pdfLabel: "بر اساس فهرست کتاب",
        searchLabel: "جستجو",
        searchPlaceholder: "عنوان، شماره مدخل، صفحه...",
        expandAll: "باز کردن همه",
        collapseAll: "بستن همه",
        clear: "پاک کردن",
        catalogTitle: "فهرست مدخل‌ها",
        catalogSubtitle: "استخراج‌شده از فهرست کتاب",
        readerTitle: "نمایش مدخل",
        readerSubtitle: "اطلاعات مدخل انتخاب‌شده",
        emptyTitle: "هنوز مدخلی انتخاب نشده است",
        emptyText: "از فهرست سمت راست، یک مدخل را انتخاب کنید.",
        selectedBadge: (n: number) => `مدخل ${toFaNum(n)}`,
        languageHeading: "زبان نمایش مدخل",
        languageSubheading: "متن نمونه را بین فارسی و انگلیسی تغییر دهید",
        faView: "نمایش فارسی",
        enView: "English View",
        entryMetaLabel: "شماره مدخل",
        startPageLabel: "صفحه آغازین",
        sectionLabel: "بخش",
        englishTitleLabel: "عنوان انگلیسی",
      }
    : {
        eyebrow: "Encyclopedia Archive / Archive",
        heroTitle: "Archive of entries from the Social and Solidarity Economy Encyclopedia",
        heroText:
          "The entry list follows the book’s table of contents. Selecting an entry shows its details in the left panel and lets you switch between Persian and English views.",
        partsLabel: "Main sections",
        entriesLabel: "Entries",
        switchLabel: "Language switch",
        pdfLabel: "Based on the book’s table of contents",
        searchLabel: "Search",
        searchPlaceholder: "Title, entry number, page...",
        expandAll: "Expand all",
        collapseAll: "Collapse all",
        clear: "Clear",
        catalogTitle: "Entry catalog",
        catalogSubtitle: "Extracted from the book table of contents",
        readerTitle: "Entry preview",
        readerSubtitle: "Selected entry information",
        emptyTitle: "No entry selected yet",
        emptyText: "Choose an entry from the list on the right.",
        selectedBadge: (n: number) => `Entry ${n}`,
        languageHeading: "Entry display language",
        languageSubheading: "Switch the sample text between Persian and English",
        faView: "Persian view",
        enView: "English view",
        entryMetaLabel: "Entry number",
        startPageLabel: "Starting page",
        sectionLabel: "Section",
        englishTitleLabel: "English title",
      };

  const togglePart = (id: string) => {
    setExpandedParts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const nextState = Object.fromEntries(encyclopediaParts.map((part) => [part.id, true]));
    setExpandedParts(nextState);
  };

  const collapseAll = () => {
    const nextState = Object.fromEntries(encyclopediaParts.map((part) => [part.id, false]));
    setExpandedParts(nextState);
  };

  return (
    <div className="archive-page">
      <style>{styles}</style>

      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="eyebrow">{strings.eyebrow}</div>
            <h1>{strings.heroTitle}</h1>
            <p>{strings.heroText}</p>
          </div>

          <div className="stats">
            <div className="stat">
              <strong>{encyclopediaParts.length}</strong>
              <span>{strings.partsLabel}</span>
            </div>
            <div className="stat">
              <strong>{totalEntries}</strong>
              <span>{strings.entriesLabel}</span>
            </div>
            <div className="stat">
              <strong>{isFa ? "FA / EN" : "FA / EN"}</strong>
              <span>{strings.switchLabel}</span>
            </div>
            <div className="stat">
              <strong>PDF</strong>
              <span>{strings.pdfLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="toolbar">
        <label className="searchbox">
          <span>{strings.searchLabel}</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={strings.searchPlaceholder} />
        </label>

        <div className="actions">
          <button className="btn" type="button" onClick={expandAll}>{strings.expandAll}</button>
          <button className="btn" type="button" onClick={collapseAll}>{strings.collapseAll}</button>
          <button className="btn" type="button" onClick={() => setQuery("")}>{strings.clear}</button>
        </div>
      </section>

      <main className="layout">
        <aside className="panel">
          <div className="panel-head">
            <div>
              <h2>{strings.catalogTitle}</h2>
              <p>{strings.catalogSubtitle}</p>
            </div>
            <div className="pill">{isFa ? `${toFaNum(visibleCount)} مدخل` : `${visibleCount} entries`}</div>
          </div>

          <div className="catalog-body">
            {filteredParts.map((part) => (
              <div className={`part ${expandedParts[part.id] ? "open" : ""}`} key={part.id}>
                <button className="part-toggle" type="button" onClick={() => togglePart(part.id)}>
                  <div>
                    <div className="part-fa">{isFa ? part.faTitle : part.enTitle}</div>
                    <div className="part-en">{isFa ? part.enTitle : part.faTitle}</div>
                  </div>
                  <span className="mark">{expandedParts[part.id] ? "−" : "+"}</span>
                </button>

                <div className="entries">
                  {part.entries.map((entry) => (
                    <button
                      key={entry.no}
                      className={`entry-btn ${activeEntryNo === entry.no ? "active" : ""}`}
                      type="button"
                      onClick={() => setActiveEntryNo(entry.no)}
                    >
                      <span className="entry-no">{isFa ? toFaNum(entry.no) : entry.no}</span>
                      <span>
                        <div className="entry-fa">{isFa ? entry.fa : entry.en}</div>
                        <div className="entry-en">{isFa ? entry.en : entry.fa}</div>
                        <div className="entry-meta">{isFa ? `صفحه ${toFaNum(entry.page)}` : `Page ${entry.page}`}</div>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="panel">
          <div className="panel-head">
            <div>
              <h2>{strings.readerTitle}</h2>
              <p>{strings.readerSubtitle}</p>
            </div>
            <div className="pill">{selectedEntry ? (isFa ? strings.selectedBadge(selectedEntry.no) : `Entry ${selectedEntry.no}`) : (isFa ? "انتخاب نشده" : "Not selected")}</div>
          </div>

          <div className="reader-body">
            {!selectedEntry ? (
              <div className="empty">
                <div>
                  <h3>{strings.emptyTitle}</h3>
                  <p>{strings.emptyText}</p>
                </div>
              </div>
            ) : (
              <div className="selected">
                <section className="entry-card">
                  <div>
                    <div className="entry-kicker">{isFa ? selectedEntry.partFa : selectedEntry.partEn}</div>
                    <h2>{isFa ? selectedEntry.fa : selectedEntry.en}</h2>
                    <div className="entry-main-en">{isFa ? selectedEntry.en : selectedEntry.fa}</div>
                  </div>
                </section>

                <section className="reader-top">
                  <div>
                    <strong>{strings.languageHeading}</strong>
                    <span>{strings.languageSubheading}</span>
                  </div>

                  <div className="lang-switch" data-lang={activeLanguage}>
                    <button className="lang-btn" type="button" data-lang="fa" onClick={() => setActiveLanguage("fa")}>{isFa ? "فارسی" : "Persian"}</button>
                    <button className="lang-btn" type="button" data-lang="en" onClick={() => setActiveLanguage("en")}>{isFa ? "English" : "English"}</button>
                  </div>
                </section>

                <article className={`article ${activeLanguage === "en" ? "en" : ""}`}>
                  {activeLanguage === "fa" ? (
                    <>
                      <div className="lang-label">{strings.faView}</div>
                      <h3>{selectedEntry.fa}</h3>
                      <p>
                        {isFa
                          ? `این مدخل از فهرست کتاب دانشنامه استخراج شده و عنوان اصلی انگلیسی آن ${selectedEntry.en} است.`
                          : `This entry is extracted from the encyclopedia table of contents and paired here with its Persian label.`}
                      </p>
                      <div className="note">
                        {isFa
                          ? "در این نسخه، فهرست مدخل‌ها از داخل کتاب وارد شده است. در مرحله بعدی می‌توان برای هر مدخل متن کامل، مترجم، نویسنده، چکیده، کلیدواژه و پیوند به صفحه اختصاصی اضافه کرد."
                          : "In the next step, you can attach full entry content, contributor data, translators, keywords, and a dedicated single page."}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="lang-label">{strings.enView}</div>
                      <h3>{selectedEntry.en}</h3>
                      <p>
                        {isFa
                          ? `این مدخل از فهرست کتاب دانشنامه استخراج شده و عنوان فارسی آن ${selectedEntry.fa} است.`
                          : `This entry is extracted from the encyclopedia table of contents and paired here with its Persian label.`}
                      </p>
                      <div className="note">
                        {isFa
                          ? "در مرحله بعدی می‌توان متن کامل مدخل، مترجم، نویسنده، چکیده، کلیدواژه و پیوند به صفحه اختصاصی را اضافه کرد."
                          : "In the next step, you can attach full entry content, contributor data, translators, keywords, and a dedicated single page."}
                      </div>
                    </>
                  )}
                </article>

                <section className="meta-grid">
                  <div className="meta-box">
                    <strong>{strings.entryMetaLabel}</strong>
                    <span>{isFa ? toFaNum(selectedEntry.no) : selectedEntry.no}</span>
                  </div>
                  <div className="meta-box">
                    <strong>{strings.startPageLabel}</strong>
                    <span>{isFa ? toFaNum(selectedEntry.page) : selectedEntry.page}</span>
                  </div>
                  <div className="meta-box">
                    <strong>{strings.sectionLabel}</strong>
                    <span>{isFa ? selectedEntry.partFa : selectedEntry.partEn}</span>
                  </div>
                  <div className="meta-box">
                    <strong>{strings.englishTitleLabel}</strong>
                    <span>{selectedEntry.en}</span>
                  </div>
                </section>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
