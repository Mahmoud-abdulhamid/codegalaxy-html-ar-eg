# HTML Architecture & Page Anatomy

المصدر: https://www.w3schools.com/html/default.asp

## خرافة كود HTML الشغال بدون معايير

كثير من المطورين يظنون أن مجرد فتح الصفحة يعني كود HTML سليم 100. في الحقيقة، غياب سطر 1 يدخل المتصفح في Quirks Mode مما يسبب انهيار التنسيق واختلافات بين المتصفحات. أهلا بكم، أنا محمود عبد الحميد، واليوم سنفك شفرة الأساس خطوة بخطوة لبناء الـ DOM Tree بأعلى المعايير.

- خرافة: فتح الصفحة في المتصفح يعني كود HTML سليم 100
- غياب سطر DOCTYPE html يدخل المتصفح في Quirks Mode
- انهيار معايير W3C يسبب اختلافات كارثية بين المتصفحات
- خارطة الدرس: تشريح الهيكل القياسي وفهم ترابط العناصر

## الهيكل الشجري للصفحة DOM Tree

يقوم المتصفح بتحويل ملف HTML في الذاكرة إلى هيكل شجري يسمى DOM Tree، يبدأ من Document ثم العنصر الأساسي html. ينقسم الهيكل إلى head للبيانات الوصفية والإعدادات، و body لجميع العناصر المرئية والتفاعلية المعروضة على الشاشة.

## تشريح الهيكل الأساسي لصفحة HTML

سطر 1 يعلن للمتصفح اعتماد معيار HTML5 عبر DOCTYPE html. سطر 2 يبدأ Root Elementي html مع خاصية lang لتحديد اللغة. يحتوي head على title لعرض اسم الصفحة في تبويب المتصفح، بينما يحتوي body على h1 و p كعناصر مرئية للمستخدم.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>First HTML Page</title>
  </head>
  <body>
    <h1>Learning HTML</h1>
    <p>Building standard web pages from scratch.</p>
  </body>
</html>
```

## مقارنة العناصر وقيم المتصفح الافتراضية

مقارنة بين عناصر الصفحة وسلوك المتصفح الافتراضي: DOCTYPE هو إعلان معيار وليس Element. عنصر head مخصص للبيانات الوصفية ولا يظهر للمستخدم، بينما body يحتوي العناصر المرئية مثل h1 و p التي تأخذ سلوك Block Elements بعرض كامل 100.

## البيانات الوصفية المتقدمة داخل head

ضبط البيانات الوصفية المتقدمة داخل head باستخدام meta charset UTF-8 و Viewport وربط ملف CSS الخارجي عبر link Tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Professional HTML Architecture">
    <title>Modern Web Standards</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Architectural Setup</h1>
  </body>
</html>
```

## كواليس المحرك: معالجة المتصفح لملف HTML

مسار معالجة HTML داخل محرك المتصفح من Bytes عبر Tokenization و Nodes وصولا إلى DOM Tree و Render Tree.

## مقارنة الأداء: Standards Mode مقابل Quirks Mode

مقارنة زمن المعالجة ومؤشرات الأداء بين Standards Mode و Quirks Mode وتأثير DOCTYPE على سرعة الرندرة.

## إمكانية الوصول Accessibility والتوافقية a11y

تطبيق قواعد النفاذية والتوافقية a11y عبر تحديد lang و title دقيق والتدرج المنطقي لعناوين h1 إلى h6.

- تحديد lang='ar' في html Tag لتوجيه نطق Screen Readers تلقائيا
- صياغة title فريد ووصفي لكل صفحة لمساعدة فاقدي البصر في التصفح
- التدرج الهرمي المنطقي للعناوين من h1 إلى h6 دون القفز بين المستويات
- بناء هيكل قياسي يرفع تقييم SEO ويحقق معايير النفاذية a11y

## أخطاء شائعة في الإنتاج وأفضل الممارسات

أشهر 3 أخطاء شائعة: تكرار Tag h1 يربك محركات البحث، إهمال إغلاق Tags يضعف بناء الـ DOM، وخلط عناصر الواجهة داخل head يكسر المعايير الهيكلية.

- استخدام h1 واحد فقط لكل صفحة لضبط الـ SEO وقارئات الشاشة
- إغلاق جميع الـ Tags غير الذاتية بدقة لضمان بناء DOM سليم
- حظر وضع عناصر الواجهة البصرية نهائيا داخل head
- فصل الـ Metadata داخل head وتخصيص body للمحتوى التفاعلي والمرئي

## الكود المتكامل للمشروع: HTML مع CSS

كود إنتاجي قياسي متكامل: دمج هيكل HTML5 المعياري مع تنسيقات CSS حديثة لإنشاء واجهة بطاقة تفاعلية متجاوبة.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Landing Page</title>
    <style>
      body {
        font-family: system-ui, sans-serif; margin: 0; padding: 24px; background: #f8fafc; color: #0f172a;
      }
      .card {
        max-width: 600px; margin: 40px auto; padding: 32px; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      }
      h1 {
        color: #2563eb; font-size: 28px; margin-top: 0;
      }
      p {
        line-height: 1.6; color: #475569; font-size: 16px;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Welcome to Web Development</h1>
      <p>Mastering HTML standards is the core foundation for crafting robust, high-performance web applications.</p>
    </div>
  </body>
</html>
```

## الخلاصة وخارطة الطريق وتحدي الدرس

الخلاصة وتحدي التطبيق العملي: بناء ملف index.html معياري، فحص الـ DOM عبر DevTools، والتحضير للدرس القادم.

- الأركان الأربعة: إعلان DOCTYPE وجذر html ورأس head وجسم body
- التحدي العملي: إنشاء ملف index.html وفحص شجرة DOM بواسطة DevTools
- الخطوة القادمة: هندسة العناصر النصية Text Elements وتضمين الصور والروابط
