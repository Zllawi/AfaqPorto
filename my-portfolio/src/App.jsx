import React, { useState } from "react";
import BrandLogo from "./components/BrandLogo.jsx";

export default function App() {
  const year = new Date().getFullYear();

    const [viewer, setViewer] = useState(null);
  return (
    <div className="page" dir="rtl">
      {/* ====== Navbar ====== */}
      <header className="header">
        <div className="container">
          <nav className="nav">
<BrandLogo variant="nav" imgSrc="/brand/afaq-logo.png" ar="أفق للأنظمة وتقنية المعلومات" en="Afaq Systems &amp; IT" />
            <div className="nav-links">
              <a href="#about">نبذة</a>
              <a href="#services">الخدمات</a>
              <a href="#projects">المشاريع</a>
              <a href="#tech">التقنيات</a>
              <a href="#contact">تواصل</a>
            </div>
          </nav>
        </div>
      </header>

      {/* ====== Hero ====== */}
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="hero-eyebrow">🚀 بورتفوليو شخصي</div>
              <h1 className="hero-title">
                محمد (حمدي) الزلاوي
                <br />
                <span>مطور أنظمة | Afaq Systems &amp; IT</span>
              </h1>
              <p className="hero-subtitle">
                أساعد{" "}
                <strong>أصحاب المشاريع وصالات الألعاب والمتاجر الإلكترونية</strong> على بناء
                أنظمة جاهزة، منظمة وقابلة للتوسّع، تحول الفكرة إلى مشروع حقيقي.
              </p>

              <div className="hero-tags">
                <div className="tag">💻 Full-Stack Web</div>
                <div className="tag">🎮 Game Hall Systems</div>
                <div className="tag">🔐 Licensing &amp; Automation</div>
                <div className="tag">⚙️ IT Solutions</div>
              </div>

              <div className="hero-actions">
                <a href="#contact" className="btn-primary">
                  ✨ تواصل معي الآن
                </a>
                <a href="#projects" className="btn-outline">
                  👀 مشاهدة الأعمال
                </a>
              </div>
            </div>

            <aside className="hero-skills">
              <div className="skills-container">
                <h3 className="skills-title">المهارات الرئيسية</h3>
                <div className="skills-grid">
                  <div className="skill-item">
                    <div className="skill-name">React</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '95%'}}></div>
                    </div>
                    <div className="skill-percent">95%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">Node.js</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '90%'}}></div>
                    </div>
                    <div className="skill-percent">90%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">MongoDB</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '88%'}}></div>
                    </div>
                    <div className="skill-percent">88%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">JavaScript</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '92%'}}></div>
                    </div>
                    <div className="skill-percent">92%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">TailwindCSS</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '93%'}}></div>
                    </div>
                    <div className="skill-percent">93%</div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-name">REST APIs</div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '91%'}}></div>
                    </div>
                    <div className="skill-percent">91%</div>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </section>

        {/* ====== About ====== */}
        <section id="about">
          <div className="container">
            <div className="section-heading">
              <div className="section-eyebrow">About · نبذة</div>
              <h2 className="section-title">من أنا؟</h2>
            </div>
            <div className="about-text">
              <p>
                أنا <strong>محمد الزلاوي</strong>، مطور أنظمة ومؤسس{" "}
                <strong>Afaq Systems &amp; IT</strong>. أعمل على تطوير حلول تقنية عملية
                ومباشرة تساعد أصحاب المشاريع على تنظيم العمل، متابعة الأداء، وزيادة الأرباح
                بدون تعقيد.
              </p>
              <p>
                أركز على بناء أنظمة لإدارة <strong>صالات الألعاب (Game Hall)</strong>، المتاجر
                الإلكترونية، وأنظمة الترخيص والتحكم عن بعد، مع واجهات بسيطة وسهلة الاستخدام،
                وتجربة عملية تناسب السوق الليبي والعربي.
              </p>
            </div>
          </div>
        </section>

        {/* ====== Services ====== */}
        <section id="services">
          <div className="container">
            <div className="section-heading">
              <div className="section-eyebrow">Services · الخدمات</div>
              <h2 className="section-title">ماذا أقدّم؟</h2>
            </div>

            <div className="cards-grid">
              <div className="card">
                <h3>أنظمة إدارة صالات الألعاب</h3>
                <p>نظام متكامل لإدارة الأجهزة، الوقت، الحجوزات، والـ VIP.</p>
                <ul>
                  <li>إدارة وقت الأجهزة.</li>
                  <li>حجوزات مسبقة + VIP.</li>
                  <li>تقارير يومية/أسبوعية/شهرية.</li>
                </ul>
              </div>

              <div className="card">
                <h3>متاجر إلكترونية مخصصة</h3>
                <p>مواقع وتطبيقات بيع أونلاين بواجهة عصرية وسهلة.</p>
                <ul>
                  <li>إدارة منتجات وفئات.</li>
                  <li>سلة مشتريات وفواتير.</li>
                  <li>جاهزة للربط بأنظمة دفع لاحقًا.</li>
                </ul>
              </div>

              <div className="card">
                <h3>أنظمة ترخيص وبرمجيات</h3>
                <p>إدارة نسخ وبرامجك من لوحة تحكم مركزية.</p>
                <ul>
                  <li>إنشاء وإدارة مفاتيح الترخيص.</li>
                  <li>تفعيل/إلغاء تحكم عن بعد.</li>
                  <li>ربط مع أنظمة جاهزة لديك.</li>
                </ul>
              </div>

              <div className="card">
                <h3>تطوير واجهات React</h3>
                <p>تصميم واجهات تفاعلية سريعة باستخدام React و Tailwind.</p>
                <ul>
                  <li>لوحات تحكم Dashboards.</li>
                  <li>واجهات Single Page Application.</li>
                  <li>تجربة مستخدم واضحة وبسيطة.</li>
                </ul>
              </div>

              <div className="card">
                <h3>Back-End &amp; APIs</h3>
                <p>بناء خوادم آمنة وقابلة للتوسّع.</p>
                <ul>
                  <li>Node.js / Express.</li>
                  <li>JWT Authentication.</li>
                  <li>RESTful APIs.</li>
                </ul>
              </div>

              <div className="card">
                <h3>استشارات وتحويل الأفكار لمشاريع</h3>
                <p>مساعدتك في تحويل فكرتك التقنية إلى نظام جاهز.</p>
                <ul>
                  <li>تحليل الفكرة وتفصيل الموديولات.</li>
                  <li>اقتراح التقنيات المناسبة.</li>
                  <li>خطة تنفيذ على خطوات.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ====== Projects ====== */}
        <section id="projects">
          <div className="container">
            <div className="section-heading">
              <div className="section-eyebrow">Projects · الأعمال</div>
              <h2 className="section-title">أبرز المشاريع</h2>
            </div>

            {/* مشروع 1 */}
            <article className="project-card">
              <div className="project-header">
                <div className="project-title">Afaq Game Hall System</div>
                <div className="project-type">نظام إدارة صالات الألعاب</div>
              </div>
              <p className="project-desc">
                نظام متكامل لإدارة صالات ألعاب البلايستيشن، يدير وقت الأجهزة، الحجوزات، الغرف
                الخاصة VIP، مع تقارير مالية وتشغيلية، ونظام ترخيص للتحكم في النسخ عن بُعد.
              </p>
              <div className="project-meta">
                الدور: تحليل + تصميم + برمجة كاملة · Multi-tenant · جاهز للتوسّع.
              </div>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">MongoDB</span>
                <span className="project-tag">Licensing</span>
              </div>
              <div className="project-links">                <a href="https://afaq-3y10.onrender.com/gamehall.html" target="_blank" rel="noreferrer">
                  &#1605;&#1588;&#1575;&#1607;&#1583;&#1577; &#1608;&#1575;&#1580;&#1607;&#1577; &#1575;&#1604;&#1589;&#1575;&#1604;&#1577;
                </a>
                <span>·</span>
                <a href="#game-hall-shot" onClick={(e)=>{e.preventDefault(); setViewer({src:"/screenshots/game-hall-screenshot.svg", alt:"Game Hall screenshot"});}}>
                  &#1605;&#1588;&#1575;&#1607;&#1583;&#1577; &#1589;&#1608;&#1585;&#1577;
                </a>            </div>
            </article>

            {/* مشروع 2 */}
            <article className="project-card">
              <div className="project-header">
                <div className="project-title">Afaq Store</div>
                <div className="project-type">متجر إلكتروني</div>
              </div>
              <p className="project-desc">
                متجر إلكتروني بواجهة عصرية، مخصص لعرض المنتجات، إدارة الطلبات، وسلة المشتريات،
                مع إمكانية تطويره لاحقًا ليتصل بأنظمة دفع وشحن.
              </p>
              <div className="project-meta">
                الدور: تصميم واجهة + بناء لوحة تحكم + ربط مع قاعدة بيانات.
              </div>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">TailwindCSS</span>
                <span className="project-tag">REST API</span>
              </div>
              <div className="project-links">
                <a href="https://bassmastore-1.onrender.com/admin" target="_blank" rel="noreferrer">
                  مشاهدة واجهة المتجر
                </a>
              </div>
            </article>

            {/* مشروع 3 */}
            <article className="project-card">
              <div className="project-header">
                <div className="project-title">Afaq Licensing System</div>
                <div className="project-type">نظام ترخيص للبرمجيات</div>
              </div>
              <p className="project-desc">
                نظام لإدارة مفاتيح الترخيص للبرامج والأنظمة، يسمح بإنشاء مفاتيح، تحديد مدة أو
                نوع الترخيص، وإمكانية إيقاف أي نسخة عن بُعد من لوحة تحكم مركزية.
              </p>
              <div className="project-meta">
                الدور: Back-End + لوحة تحكم + ربط مع أنظمة أخرى.
              </div>
              <div className="project-tags">
                <span className="project-tag">Node.js</span>
                <span className="project-tag">Express</span>
                <span className="project-tag">JWT</span>
                <span className="project-tag">Admin Panel</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noreferrer">
                  طلب تجربة للنظام
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* ====== Tech Stack ====== */}
        <section id="tech">
          <div className="container">
            <div className="section-heading">
              <div className="section-eyebrow">Tech · التقنيات</div>
              <h2 className="section-title">التقنيات التي أستخدمها</h2>
            </div>

            <div className="tech-grid">
              <div className="tech-pill">React</div>
              <div className="tech-pill">Next.js</div>
              <div className="tech-pill">TailwindCSS</div>
              <div className="tech-pill">Node.js</div>
              <div className="tech-pill">Express.js</div>
              <div className="tech-pill">MongoDB</div>
              <div className="tech-pill">Firebase</div>
              <div className="tech-pill">REST APIs</div>
              <div className="tech-pill">JWT Auth</div>
            </div>
          </div>
        </section>

        {/* ====== Contact ====== */}
        <section id="contact">
          <div className="container">
            <div className="section-heading">
              <div className="section-eyebrow">Contact · تواصل</div>
              <h2 className="section-title">دعنا نعمل معًا</h2>
            </div>

            <div className="contact-wrapper">
              <div>
                <p className="contact-text">
                  إذا كان لديك{" "}
                  <strong>مشروع، صالة ألعاب، متجر إلكتروني، أو فكرة لنظام</strong> وتريد
                  تحويلها إلى واقع، يمكننا البدء بخطوة بسيطة: تواصل معي وأرسل فكرتك، وسأرد
                  عليك بخطة تقنية واضحة ومناسبة لميزانيتك.
                </p>

                <ul className="contact-list">
                  <li>
                    واتساب:&nbsp;
                    <a
                      href="https://wa.me/218944364216"
                      target="_blank"
                      rel="noreferrer"
                    >
                      +218 944364216
                    </a>
                  </li>
                  <li>
                    البريد الإلكتروني:&nbsp;
                    <a href="mailto:afaqly2025@gmail.com">
                      afaqly2025@gmail.com
                    </a>
                  </li>
                  <li>
                    فيسبوك:&nbsp;
                    <a href="#" target="_blank" rel="noreferrer">
                      Afaq Systems &amp; IT
                    </a>
                  </li>
                  <li>
                    إنستغرام:&nbsp;
                    <a href="#" target="_blank" rel="noreferrer">
                      @afaq.systems
                    </a>
                  </li>
                </ul>

                <p className="contact-note">
                  يمكن توفير <strong>تجربة مجانية لبعض الأنظمة</strong> لفترة محدودة، حسب نوع
                  المشروع.
                </p>
              </div>

              <aside className="contact-card">
                <h3>كيف نبدأ؟</h3>
                <ul>
                  <li>ترسل لي وصفًا بسيطًا للفكرة أو النظام المطلوب.</li>
                  <li>أقترح عليك تقسيم المشروع لموديولات واضحة.</li>
                  <li>أحدد لك التقنيات الأنسب وفترة تنفيذ تقريبية.</li>
                  <li>نبدأ بأبسط نسخة (MVP) ثم نطوّرها خطوة بخطوة.</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>
        
  {viewer && (
    <div className="lightbox" onClick={()=>setViewer(null)}>
      <div className="lightbox-content" onClick={(e)=>e.stopPropagation()}>
        <img src={viewer.src} alt={viewer.alt || "screenshot"} />
        <button className="lightbox-close" aria-label="Close" onClick={()=>setViewer(null)}>×</button>
      </div>
    </div>
  )}
</main>

      {/* ====== Footer ====== */}
      <footer className="footer">
        <div className="container footer-row">
          <div>
            © {year} Mohamed (Hamdi) Al-Zallawi · Afaq Systems &amp; IT
          </div>
          <div className="footer-links">
            <a href="#about">نبذة</a>
            <a href="#projects">المشاريع</a>
            <a href="#contact">تواصل</a>
          </div>
        </div>
      </footer>
    </div>
  );
}