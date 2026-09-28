# إضافة Favicon إلى صفحات الويب

المصدر: https://www.w3schools.com/howto/howto_html_favicon.asp

## مقدمة حول الـ Favicon

الـ Favicon هي أيقونة صغيرة تظهر بجانب عنوان الصفحة في تبويب المتصفح.

- الـ Favicon تعزز هوية الموقع البصرية
- تظهر الأيقونة في تبويب الـ Web Browser
- تساعد المستخدم في تمييز موقعك بين التبويبات المفتوحة

## مواصفات الـ Favicon

يجب أن تكون الـ Favicon صورة بسيطة وذات تباين عال لتظهر بوضوح.

- استخدم صورا بسيطة وواضحة
- يفضل استخدام امتداد .ico
- يمكنك إنشاء أيقوناتك عبر مواقع مثل favicon.cc

## هيكلية الكود الأساسي

نبدأ بهيكل HTML الأساسي ونجهز قسم الـ head لإضافة الأيقونة.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page Title</title>
```

## إضافة Tag الـ link

نستخدم عنصر الـ link لربط ملف الأيقونة بصفحة الـ HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="icon" </head>
    <body>
      type="image/x-icon"
      href="/images/favicon.ico">
    </body>
  </html>
```

## إكمال هيكل الـ body

نضيف المحتوى المرئي داخل الـ body لإتمام صفحة الـ HTML.

```html
<body>
  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>
</body>
</html>
```

## نصائح تقنية هامة

تأكد من صحة مسار ملف الـ favicon لضمان ظهوره بشكل صحيح.

- تأكد من صحة مسار الـ href
- يفضل تسمية الملف favicon.ico
- أعد تحميل الصفحة في الـ Browser لرؤية التغييرات

## خاتمة الدرس

لقد تعلمنا كيفية إضافة الـ Favicon. جرب الكود بنفسك الآن!

- تمت تغطية كيفية ربط الـ Favicon
- استخدمنا عنصر الـ link بشكل صحيح
- راجع المصدر لمزيد من التفاصيل التقنية
