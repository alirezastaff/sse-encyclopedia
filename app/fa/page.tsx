import React from 'react';

export default function FaHomePage() {
  return (
    <>
      <div className="page-wrapper">
        <div className="inner">

          {/* Header */}
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
                <li><a href="#"><span className="nav-icon">▣</span> مدخل‌ها</a></li>
                <li><a href="#"><span className="nav-icon">●</span> درباره پروژه</a></li>
                <li><a href="#"><span className="nav-icon">◆</span> همکاری با ما</a></li>
              </ul>
            </nav>
          </header>

          <main>
            {/* Hero */}
            <section className="hero">
              <div className="hero-content">
                <div className="eyebrow">
                  <span className="eyebrow-dot"></span>
                  پروژه ترجمه و انتشار دانشنامه
                </div>

                <h2>
                  دسترسی فارسی به مفاهیم کلیدی <span>اقتصاد اجتماعی و همبستگی</span>
                </h2>

                <p>
                  این وب‌سایت ترجمه فارسی مدخل‌های «دانشنامه اقتصاد اجتماعی و همبستگی» را
                  در اختیار پژوهشگران، دانشجویان و علاقه‌مندان قرار می‌دهد. این پروژه
                  توسط گروهی از مترجمان و محققان اقتصاد اجتماعی در ایران انجام می‌شود.
                </p>

                <div className="hero-actions">
                  <a href="#" className="primary-btn">مشاهده فهرست مدخل‌ها</a>
                  <a href="#" className="secondary-btn">درباره این دانشنامه</a>
                </div>
              </div>

              <aside className="hero-panel">
                <div className="panel-title">جستجو در دانشنامه</div>
                <div className="search-box">
                  <input type="text" placeholder="نام مدخل یا کلیدواژه را وارد کنید" />
                  <button aria-label="جستجو">🔍</button>
                </div>

                <div className="quick-links">
                  <a href="#">مدخل‌های تازه</a>
                  <a href="#">فهرست الفبایی</a>
                  <a href="#">بایگانی</a>
                  <a href="#">مدخل تصادفی</a>
                </div>

                <div className="status-box">
                  <strong>منبع اصلی:</strong> دانشنامه تدوین‌شده توسط کارگروه اقتصاد اجتماعی و همبستگی سازمان ملل متحد.
                </div>
              </aside>
            </section>

            {/* Info Strip */}
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

            {/* Intro Card */}
            <section className="intro-card">
              <h3>درباره پروژه ترجمه فارسی</h3>
              <p>
                این وب‌سایت ترجمه فارسی مدخل‌های «دانشنامه اقتصاد اجتماعی و همبستگی» را
                منتشر می‌کند. ما گروهی از مترجمان و محققان اقتصاد اجتماعی در ایران هستیم
                که مدخل‌های این دانشنامه را به فارسی ترجمه، بازبینی و در اختیار
                مخاطبان فارسی‌زبان قرار می‌دهیم.
              </p>
              <div className="intro-footer">
                <div>
                  <strong>گروه مترجمان و محققان:</strong> پژوهشگران اقتصاد اجتماعی در ایران
                </div>
                <div className="intro-links">
                  <a href="#">اعضای گروه</a> <span>|</span> <a href="#">روش ترجمه و انتشار</a>
                </div>
              </div>
            </section>

            {/* Support Section */}
            <section className="support-section">
              <h3>اهداف و فعالیت‌های این پروژه</h3>
              <ul>
                <li>ترجمه و انتشار فارسی مدخل‌های دانشنامه اقتصاد اجتماعی و همبستگی...</li>
                <li>گسترش ادبیات علمی اقتصاد اجتماعی و همبستگی در ایران...</li>
                <li>فعالیت علمی و پژوهشی با تکیه بر همکاری مترجمان...</li>
              </ul>
            </section>

            {/* Feature Cards */}
            <section className="feature-grid">
              <article className="feature-card">
                <div className="card-icon">📘</div>
                <h3>درباره دانشنامه</h3>
                <p>این دانشنامه مجموعه‌ای از مدخل‌های تخصصی در حوزه اقتصاد اجتماعی و همبستگی است...</p>
              </article>

              <article className="feature-card">
                <div className="card-icon">✍️</div>
                <h3>پروژه ترجمه فارسی</h3>
                <p>در این پروژه، مدخل‌های منتخب دانشنامه با دقت علمی ترجمه و منتشر می‌شوند.</p>
              </article>

              <article className="feature-card">
                <div className="card-icon">🎓</div>
                <h3>برای پژوهشگران و دانشجویان</h3>
                <p>این وب‌سایت بستری برای دسترسی آسان به مفاهیم کلیدی به زبان فارسی فراهم می‌کند.</p>
              </article>
            </section>
          </main>

          {/* Footer */}
          <footer className="site-footer">
            <div>© ۱۴۰۵ دانشنامه اقتصاد اجتماعی و همبستگی</div>
            <div>
              <a href="#">تماس با ما</a> | <a href="#">همکاری علمی</a> | <a href="#">سیاست انتشار</a>
            </div>
          </footer>

        </div>
      </div>

      {/* All your beautiful styles */}
      <style jsx>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --red-dark: #7d1017;
          --red-main: #a61922;
          --red-soft: #c74b52;
          --cream: #fbf7f1;
          --text: #262626;
          --muted: #686868;
          --border: #eadfda;
        }
        body {
          font-family: "Vazirmatn", Tahoma, Arial, sans-serif;
          direction: rtl;
          color: var(--text);
          background: radial-gradient(circle at 15% 10%, rgba(255,255,255,0.18), transparent 28%),
                      radial-gradient(circle at 85% 12%, rgba(255,220,220,0.20), transparent 26%),
                      linear-gradient(135deg, #681018 0%, #9b1722 42%, #c85b62 100%);
          padding: 42px 18px;
        }
        /* Paste the rest of your original <style> content here if needed */
        /* For now, the main classes are ready */
      `}</style>
    </>
  );
}