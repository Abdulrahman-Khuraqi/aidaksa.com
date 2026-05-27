import { execSync } from 'child_process';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import spawn from 'cross-spawn';
import waitOn from 'wait-on';

// اللغات المدعومة واللغة الافتراضية
const locales = ['ar', 'en'];
const defaultLocale = 'ar';

// مسار الخروج
const exportPath = path.resolve(process.cwd(), 'out');

// دالة لجلب البيانات وكتابة الملفات
const fetchAndWrite = async (locale, url, outputPath) => {
  try {
    const res = await fetch(`http://localhost:3000${url}`);
    const body = await res.text();
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(outputPath, body);
    console.log(`Successfully wrote ${outputPath}`);
  } catch (error) {
    console.error(`Failed to fetch and write ${url} for locale ${locale}:`, error);
  }
};

// دالة لتصدير البيانات لكل لغة
const exportLocale = async (locale) => {
  const url = locale === defaultLocale ? '/' : `/${locale}`;
  const outputPath = locale === defaultLocale ? `${exportPath}/index.html` : `${exportPath}/${locale}/index.html`;

  console.log(`Exporting locale: ${locale}`);
  await fetchAndWrite(locale, url, outputPath);

  // إضافة المزيد من الصفحات هنا إذا لزم الأمر
  await fetchAndWrite(locale, '/about', `${exportPath}/${locale}/about/index.html`);
  await fetchAndWrite(locale, '/contact', `${exportPath}/${locale}/contact/index.html`);
};

// دالة لتنفيذ عملية التصدير
const runExport = async () => {
  // بناء المشروع
  execSync('npx next build', { stdio: 'inherit' });

  // تشغيل المشروع
  const server = spawn('npx', ['next', 'start', '-p', '3000'], {
    stdio: 'inherit',
    detached: true,
  });

  server.on('error', (error) => {
    console.error('Failed to start server:', error);
  });

  // انتظر حتى يكون الخادم جاهزًا
  await waitOn({ resources: ['http://localhost:3000'] });

  for (const locale of locales) {
    console.log(`Building for locale: ${locale}`);
    // ضبط البيئة لتحديد اللغة الحالية
    process.env.NEXT_PUBLIC_LOCALE = locale;

    try {
      // تصدير الموقع للغة الحالية
      await exportLocale(locale);
    } catch (error) {
      console.error(`Failed to build and export for locale ${locale}:`, error);
    }
  }

  // إيقاف الخادم بعد التصدير
  process.kill(server.pid);

  console.log('Export completed.');
};

runExport().catch(err => {
  console.error(err);
  process.exit(1);
});
