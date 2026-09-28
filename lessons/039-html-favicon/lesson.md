# تعلم كيفية إضافة Favicon إلى صفحات الويب

المصدر: https://www.w3schools.com/html/html_favicon.asp

## مقدمة حول الـ Favicon

الـ Favicon هي أيقونة صغيرة تظهر بجانب عنوان الصفحة في تبويب متصفح الويب.

- الـ Favicon هي صورة صغيرة تمثل موقعك
- تظهر في تبويب الـ Web Browser بجانب العنوان
- تساعد في تمييز موقعك بين التبويبات المفتوحة

## طريقة إضافة الـ Favicon

يمكنك استخدام أي صورة بسيطة كأيقونة، ويفضل حفظها باسم favicon.ico في المجلد الرئيسي.

- استخدم صورا بسيطة وواضحة
- احفظ الملف باسم favicon.ico
- ضع الملف في المجلد الرئيسي أو مجلد images

## كود الـ HTML الأساسي

نستخدم Tag link داخل قسم head لربط ملف الأيقونة بصفحة الـ HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>My Page Title</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

## استكمال هيكل الصفحة

نكمل هيكل الصفحة بإضافة المحتوى المرئي داخل قسم body.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>My Page Title</title>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

## معاينة النتيجة

بعد تحديث المتصفح، ستظهر الأيقونة بجانب عنوان الصفحة في التبويب.

## نصائح وممارسات

استخدم صورا بسيطة وواضحة، ويمكنك تصميم أيقونتك عبر مواقع متخصصة.

- استخدم صورا ذات تباين عال
- جرب تصميم أيقونتك على موقع favicon.cc
- تأكد من مسار الملف في الـ href

## خاتمة الدرس

تعلمنا اليوم كيفية إضافة Favicon احترافية لموقعك. جرب الكود بنفسك!

- تم شرح مفهوم الـ Favicon
- تم تطبيق كود الـ link
- تم توضيح أهمية الأيقونة للموقع
