import Link from "next/link";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --red-dark: #7d1017;
    --red-main: #a61922;
    --red-soft: #c74b52;
    --cream: #fbf7f1;
    --text: #262626;
    --muted: #686868;
    --border: #eadfda;
    --white: #ffffff;
  }

  body {
    font-family: "Vazirmatn", Tahoma, Arial, sans-serif;
    direction: rtl;
    color: var(--text);
    min-height: 100vh;
    background:
      radial-gradient(circle at 15% 10%, rgba(255, 255, 255, 0.18), transparent 28%),
      radial-gradient(circle at 85% 12%, rgba(255, 220, 220, 0.20), transparent 26%),
      linear-gradient(135deg, #681018 0%, #9b1722 42%, #c85b62 100%);
    padding: 42px 18px;
  }

  .page-wrapper {
    max-width: 1140px;
    margin: 0 auto;
    background: rgba(255, 252, 248, 0.97);
    min-height: calc(100vh - 84px);
    border-radius: 22px;
    box-shadow:
      0 30px 80px rgba(40, 0, 0, 0.32),
      inset 0 1px 0 rgba(255, 255, 255, 0.75);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.45);
  }

  .inner {
    padding: 34px 46px 36px;
  }

  .site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 26px;
    padding-bottom: 28px;
    border-bottom: 1px solid var(--border);
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .logo {
    width: 54px;
    height: 54px;
    border-radius: 18px;
    background: linear-gradient(135deg, #8d1119, #c5323b);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: 800;
    box-shadow: 0 12px 24px rgba(155, 23, 29, 0.28);
    flex-shrink: 0;
    position: relative;
  }

  .logo::after {
    content: "";
    position: absolute;
    inset: 7px;
    border: 1px solid rgba(255,255,255,0.36);
    border-radius: 13px;
  }

  .brand-text h1 {
    font-size: 27px;
    font-weight: 700;
    letter-spacing: -1px;
    color: #221f1f;
    margin-bottom: 4px;
  }

  .brand-text span {
    color: var(--muted);
    font-size: 13px;
    font-weight: 300;
  }

  .main-nav ul {
    list-style: none;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .main-nav a {
    color: #4b4b4b;
    background: #fff;
    border: 1px solid #eee1dc;
    text-decoration: none;
    font-size: 13.5px;
    font-weight: 400;
    padding: 9px 14px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    transition: all 0.25s ease;
    box-shadow: 0 4px 14px rgba(70, 30, 20, 0.04);
  }

  .main-nav a:hover {
    color: var(--red-main);
    border-color: #d8b1b4;
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(130, 20, 28, 0.10);
  }

  .nav-icon {
    color: var(--red-main);
    font-size: 12px;
  }

  .hero {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 46px;
    align-items: center;
    padding: 54px 0 38px;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #fff2f2;
    color: var(--red-main);
    border: 1px solid #f1c9cc;
    padding: 7px 13px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 18px;
  }

  .eyebrow-dot {
    width: 7px;
    height: 7px;
    background: var(--red-main);
    border-radius: 50%;
    box-shadow: 0 0 0 5px rgba(166, 25, 34, 0.10);
  }

  .hero h2 {
    font-size: 35px;
    line-height: 1.65;
    letter-spacing: -1.4px;
    font-weight: 800;
    color: #211d1d;
    margin-bottom: 18px;
  }

  .hero h2 span {
    color: var(--red-main);
  }

  .hero p {
    font-size: 16px;
    line-height: 2.15;
    color: #565656;
    font-weight: 300;
    max-width: 690px;
  }

  .hero-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 28px;
  }

  .primary-btn,
  .secondary-btn {
    height: 44px;
    padding: 0 19px;
    border-radius: 12px;
    text-decoration: none;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;
  }

  .primary-btn {
    background: linear-gradient(135deg, #8f141c, #bd2731);
    color: #fff;
    box-shadow: 0 14px 28px rgba(155, 23, 29, 0.22);
  }

  .primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 34px rgba(155, 23, 29, 0.30);
  }

  .secondary-btn {
    background: #fff;
    color: #333;
    border: 1px solid #eadbd6;
  }

  .secondary-btn:hover {
    color: var(--red-main);
    border-color: #d9b5b8;
    transform: translateY(-2px);
  }

  .hero-panel {
    background: linear-gradient(145deg, #ffffff, #fff8f6);
    border: 1px solid #eaded9;
    border-radius: 22px;
    padding: 24px;
    box-shadow: 0 18px 48px rgba(80, 35, 20, 0.10);
    position: relative;
    overflow: hidden;
  }

  .hero-panel::before {
    content: "";
    position: absolute;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: rgba(166, 25, 34, 0.08);
    left: -55px;
    top: -55px;
  }

  .panel-title {
    font-size: 15px;
    color: #2e2e2e;
    font-weight: 700;
    margin-bottom: 18px;
    position: relative;
  }

  .search-box {
    position: relative;
    margin-bottom: 14px;
  }

  .search-box input {
    width: 100%;
    height: 48px;
    border: 1px solid #ded3cf;
    background: #fff;
    border-radius: 14px;
    padding: 0 15px 0 48px;
    font-family: inherit;
    font-size: 14px;
    outline: none;
    transition: all 0.25s ease;
  }

  .search-box input:focus {
    border-color: #bd6369;
    box-shadow: 0 0 0 4px rgba(166, 25, 34, 0.08);
  }

  .search-box button {
    position: absolute;
    left: 13px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: transparent;
    font-size: 17px;
    cursor: pointer;
    color: #777;
  }

  .quick-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 16px;
  }

  .quick-links a {
    background: #fbf7f5;
    border: 1px solid #eaded9;
    color: #444;
    text-decoration: none;
    font-size: 13px;
    border-radius: 13px;
    min-height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.22s ease;
  }

  .quick-links a:hover {
    background: #fff;
    color: var(--red-main);
    border-color: #d8b1b4;
  }

  .status-box {
    margin-top: 18px;
    background: #fff;
    border: 1px dashed #ddb8bb;
    border-radius: 16px;
    padding: 15px 16px;
    font-size: 13px;
    line-height: 1.9;
    color: #666;
  }

  .status-box strong {
    color: var(--red-main);
    font-weight: 700;
  }

  .info-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-bottom: 34px;
  }

  .info-item {
    background: #fff;
    border: 1px solid #eaded9;
    border-radius: 18px;
    padding: 18px 20px;
    box-shadow: 0 10px 28px rgba(70, 30, 20, 0.05);
  }

  .info-item span {
    color: var(--red-main);
    font-size: 24px;
    font-weight: 800;
    display: block;
    margin-bottom: 7px;
  }

  .info-item p {
    color: #666;
    font-size: 13.5px;
    line-height: 1.8;
  }

  .intro-card {
    background: linear-gradient(135deg, #fff, #fffaf8);
    border: 1px solid #eaded9;
    border-radius: 22px;
    box-shadow: 0 18px 48px rgba(70, 30, 20, 0.07);
    padding: 30px 34px;
    margin-bottom: 28px;
    position: relative;
    overflow: hidden;
  }

  .intro-card::before {
    content: "";
    position: absolute;
    right: 0;
    top: 30px;
    width: 5px;
    height: calc(100% - 60px);
    background: linear-gradient(to bottom, var(--red-main), #d8686f);
    border-radius: 999px;
  }

  .intro-card h3 {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 13px;
    color: #242424;
  }

  .intro-card p {
    font-size: 15.5px;
    line-height: 2.15;
    color: #555;
    font-weight: 300;
  }

  .intro-footer {
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
    gap: 18px;
    flex-wrap: wrap;
    align-items: center;
    font-size: 13.5px;
    color: #333;
    border-top: 1px solid #f0e5e1;
    padding-top: 18px;
  }

  .intro-footer strong {
    font-weight: 700;
    color: #222;
  }

  .intro-links {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .intro-links a {
    color: var(--red-main);
    text-decoration: none;
    border-bottom: 1px solid rgba(166, 25, 34, 0.35);
  }

  .support-section {
    background: #fdf9f6;
    border: 1px solid #efe2de;
    border-radius: 20px;
    padding: 24px 28px;
    margin-bottom: 28px;
  }

  .support-section h3 {
    font-size: 17px;
    font-weight: 800;
    margin-bottom: 15px;
    color: #222;
  }

  .support-section ul {
    padding-right: 22px;
    line-height: 2.15;
    font-size: 14px;
    color: #4c4c4c;
  }

  .support-section li {
    margin-bottom: 5px;
  }

  .support-section li::marker {
    color: var(--red-main);
  }

  .support-section a {
    color: var(--red-main);
    text-decoration: none;
    border-bottom: 1px solid rgba(166, 25, 34, 0.35);
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin-top: 26px;
  }

  .feature-card {
    background: #fff;
    border: 1px solid #eaded9;
    border-radius: 20px;
    padding: 24px 22px;
    box-shadow: 0 14px 38px rgba(70, 30, 20, 0.06);
    transition: all 0.25s ease;
    position: relative;
    overflow: hidden;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 48px rgba(80, 25, 25, 0.11);
    border-color: #ddb9bb;
  }

  .feature-card::before {
    content: "";
    position: absolute;
    width: 86px;
    height: 86px;
    border-radius: 50%;
    background: rgba(166, 25, 34, 0.06);
    left: -35px;
    top: -35px;
  }

  .card-icon {
    width: 42px;
    height: 42px;
    border-radius: 14px;
    background: #fff2f2;
    color: var(--red-main);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    margin-bottom: 15px;
    position: relative;
  }

  .feature-card h3 {
    color: #262626;
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 10px;
    position: relative;
  }

  .feature-card p {
    font-size: 13.5px;
    line-height: 2;
    color: #5f5f5f;
    font-weight: 300;
    position: relative;
  }

  .site-footer {
    border-top: 1px solid #eaded9;
    padding-top: 20px;
    margin-top: 34px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    color: #686868;
    font-size: 13px;
  }

  .site-footer a {
    color: var(--red-main);
    text-decoration: none;
  }

  .site-footer a:hover {
    text-decoration: underline;
  }

  @media (max-width: 950px) {
    body {
      padding: 24px 14px;
    }

    .inner {
      padding: 28px 26px 30px;
    }

    .site-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .main-nav ul {
      justify-content: flex-start;
    }

    .hero {
      grid-template-columns: 1fr;
      gap: 30px;
      padding-top: 38px;
    }

    .hero h2 {
      font-size: 29px;
    }

    .info-strip,
    .feature-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 560px) {
    body {
      padding: 14px 9px;
    }

    .page-wrapper {
      border-radius: 18px;
    }

    .inner {
      padding: 24px 18px 26px;
    }

    .brand {
      align-items: flex-start;
    }

    .logo {
      width: 48px;
      height: 48px;
      border-radius: 16px;
    }

    .brand-text h1 {
      font-size: 21px;
      line-height: 1.55;
    }

    .brand-text span {
      font-size: 12px;
    }

    .main-nav ul {
      width: 100%;
      gap: 8px;
    }

    .main-nav a {
      font-size: 12.5px;
      padding: 8px 11px;
    }

    .hero h2 {
      font-size: 24px;
    }

    .hero p,
    .intro-card p {
      font-size: 14.5px;
    }

    .hero-actions {
      flex-direction: column;
    }

    .primary-btn,
    .secondary-btn {
      width: 100%;
    }

    .quick-links {
      grid-template-columns: 1fr;
    }

    .intro-card,
    .support-section {
      padding: 23px 20px;
    }

    .intro-footer,
    .site-footer {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default function FaHomePage() {
  return (
    <>
      <style>{styles}</style>

      <div className="page-wrapper">
        <div className="inner">
          <header className="site-header">
            <div className="brand">
              <div className="logo">هـ</div>

              <div className="brand-text">
                <h1>دانشنامه اقتصاد اجتماعی و همبستگی</h1>
                <span>ترجمه فارسی مدخل‌های دانشنامه اقتصاد اجتماعی و همبستگی</span>
              </div>
            </div>

            <nav className="main-nav">
              <ul>
                <li>
                  <a href="#">
                    <span className="nav-icon">▣</span>
                    مدخل‌ها
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="nav-icon">●</span>
                    درباره پروژه
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="nav-icon">◆</span>
                    همکاری با ما
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <main>
            <section className="hero">
              <div className="hero-content">
                <div className="eyebrow">
                  <span className="eyebrow-dot"></span>
                  پروژه ترجمه و انتشار دانشنامه
                </div>

                <h2>
                  دسترسی فارسی به مفاهیم کلیدی
                  <span> اقتصاد اجتماعی و همبستگی</span>
                </h2>

                <p>
                  این وب‌سایت ترجمه فارسی مدخل‌های «دانشنامه اقتصاد اجتماعی و همبستگی» را
                  در اختیار پژوهشگران، دانشجویان و علاقه‌مندان قرار می‌دهد. این پروژه
                  توسط گروهی از مترجمان و محققان اقتصاد اجتماعی در ایران انجام می‌شود.
                </p>

                <div className="hero-actions">
                  <Link href="/fa/archive" className="primary-btn">مشاهده فهرست مدخل‌ها</Link>
                  <Link href="/fa/archive" className="secondary-btn">بایگانی</Link>
                </div>
              </div>

              <aside className="hero-panel">
                <div className="panel-title">جستجو در دانشنامه</div>

                <div className="search-box">
                  <input type="text" placeholder="نام مدخل یا کلیدواژه را وارد کنید" />
                  <button aria-label="جستجو">🔍</button>
                </div>

                <div className="quick-links">
                  <Link href="/fa/archive">مدخل‌ها</Link>
                  <Link href="/fa/archive">فهرست الفبایی</Link>
                  <Link href="/fa/archive">بایگانی</Link>
                  <Link href="/fa/archive">مدخل تصادفی</Link>
                </div>

                <div className="status-box">
                  <strong>منبع اصلی:</strong>
                  دانشنامه تدوین‌شده توسط کارگروه اقتصاد اجتماعی و همبستگی سازمان ملل متحد.
                </div>
              </aside>
            </section>

            <section className="info-strip">
              <div className="info-item">
                <span>01</span>
                <p>ترجمه و انتشار مدخل‌های تخصصی اقتصاد اجتماعی و همبستگی به زبان فارسی.</p>
              </div>

              <div className="info-item">
                <span>02</span>
                <p>فعالیت علمی با همکاری گروهی از مترجمان و محققان اقتصاد اجتماعی در ایران.</p>
              </div>

              <div className="info-item">
                <span>03</span>
                <p>فراهم‌کردن دسترسی آسان برای دانشجویان، پژوهشگران و علاقه‌مندان این حوزه.</p>
              </div>
            </section>

            <section className="intro-card">
              <h3>درباره پروژه ترجمه فارسی</h3>

              <p>
                این وب‌سایت ترجمه فارسی مدخل‌های «دانشنامه اقتصاد اجتماعی و همبستگی» را
                منتشر می‌کند. ما گروهی از مترجمان و محققان اقتصاد اجتماعی در ایران هستیم
                که مدخل‌های این دانشنامه را که توسط کارگروه اقتصاد اجتماعی و همبستگی
                سازمان ملل متحد تدوین شده است، به فارسی ترجمه، بازبینی و در اختیار
                مخاطبان فارسی‌زبان قرار می‌دهیم.
              </p>

              <div className="intro-footer">
                <div>
                  <strong>گروه مترجمان و محققان:</strong>
                  پژوهشگران اقتصاد اجتماعی در ایران
                </div>

                <div className="intro-links">
                  <a href="#">اعضای گروه</a>
                  <span>|</span>
                  <a href="#">روش ترجمه و انتشار</a>
                </div>
              </div>
            </section>

            <section className="support-section">
              <h3>اهداف و فعالیت‌های این پروژه</h3>

              <ul>
                <li>
                  ترجمه و انتشار فارسی مدخل‌های دانشنامه اقتصاد اجتماعی و همبستگی برای استفاده پژوهشگران، دانشجویان و علاقه‌مندان.
                </li>
                <li>
                  گسترش ادبیات علمی اقتصاد اجتماعی و همبستگی در ایران از طریق ترجمه، ویرایش و بازنشر محتوای معتبر.
                </li>
                <li>
                  فعالیت علمی و پژوهشی با تکیه بر همکاری مترجمان و محققان حوزه اقتصاد اجتماعی و همبستگی.
                </li>
              </ul>
            </section>

            <section className="feature-grid">
              <article className="feature-card">
                <div className="card-icon">📘</div>
                <h3>درباره دانشنامه</h3>
                <p>
                  این دانشنامه مجموعه‌ای از مدخل‌های تخصصی در حوزه اقتصاد اجتماعی و همبستگی
                  است که توسط کارگروه اقتصاد اجتماعی و همبستگی سازمان ملل متحد تدوین شده است.
                </p>
              </article>

              <article className="feature-card">
                <div className="card-icon">✍️</div>
                <h3>پروژه ترجمه فارسی</h3>
                <p>
                  در این پروژه، مدخل‌های منتخب دانشنامه با دقت علمی ترجمه، بازبینی و
                  برای دسترسی مخاطبان فارسی‌زبان منتشر می‌شوند.
                </p>
              </article>

              <article className="feature-card">
                <div className="card-icon">🎓</div>
                <h3>برای پژوهشگران و دانشجویان</h3>
                <p>
                  این وب‌سایت بستری برای دسترسی آسان به مفاهیم، نظریه‌ها و مدخل‌های
                  کلیدی اقتصاد اجتماعی و همبستگی به زبان فارسی فراهم می‌کند.
                </p>
              </article>
            </section>
          </main>

          <footer className="site-footer">
            <div>© ۱۴۰۵ دانشنامه اقتصاد اجتماعی و همبستگی</div>

            <div>
              <a href="#">تماس با ما</a>
              |
              <a href="#">همکاری علمی</a>
              |
              <a href="#">سیاست انتشار</a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}