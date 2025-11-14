# AfaqPorto

ملف مشروع بورتفوليو تقني مبني بـ Vite + React، مع هوية بصرية بالعربية وشعارات SVG وصور للهيرو وروابط مباشرة لمشاريع (واجهة المتجر وواجهة الصالة) وعارض صور داخل الصفحة.

## تشغيل محلي

- تثبيت:
  - من الجذر: `npm run install`
- التشغيل:
  - من الجذر: `npm run dev`
  - أو داخل المشروع: `cd my-portfolio && npm run dev`
- البناء والإستعراض:
  - `npm run build`
  - `npm run preview`

## هيكل المشروع

- `my-portfolio/` تطبيق Vite (الكود الفعلي)
  - `src/` المكونات والأنماط
    - `components/BrandLogo.jsx` مكوّن الشعار (يدعم صورة من public)
    - `index.css` الأنماط العامة + أنماط الهيرو والعارض
    - `App.jsx` الصفحة الرئيسية وروابط المشاريع وعارض الصور
  - `public/`
    - `brand/` شعارات وهوية (`afaq-logo.png`, `afaq-hero.png`, `afaq-header.svg`, `afaq-nav.svg`)
    - `screenshots/` لقطات المشاريع (`game-hall-screenshot.svg`)

ملاحظات:
- ضع صورة الهيرو باسم `public/brand/afaq-hero.png` (يمكن تغيير الامتداد من `index.css`).
- الشعار في النافبار يستخدم `brand/afaq-logo.png` إن وُجد، وإلا يسقط إلى SVG.

## روابط المشاريع

- واجهة الصالة: `https://afaq-3y10.onrender.com/gamehall.html` (زر "مشاهدة واجهة الصالة")
- واجهة المتجر (لوحة الإدارة): `https://bassmastore-1.onrender.com/admin` (زر "مشاهدة واجهة المتجر")
- زر "مشاهدة صورة" في مشروع الصالة يفتح `public/screenshots/game-hall-screenshot.svg` داخل عارض صور (Lightbox).

## جهوزية المستودع (Git)

تهيئة ورفع إلى مستودع باسم AfaqPorto:

1. من مجلد الجذر (الحالي):
   - `git init -b main`
   - `git add .`
   - `git commit -m "Initialize AfaqPorto (Vite React portfolio)"`
2. أنشئ مستودعًا جديدًا باسم `AfaqPorto` على GitHub/GitLab.
3. اربطه محليًا ثم ادفع:
   - `git remote add origin https://<your-host>/<your-username>/AfaqPorto.git`
   - `git push -u origin main`

نصائح Windows/UTF-8:
- لضمان عرض العربية في الطرفية: `powershell` → `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8`
- أو فعّل `git config --global i18n.logOutputEncoding utf-8` و`git config --global core.autocrlf true`.

