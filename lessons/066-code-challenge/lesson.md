# HTML Iframes Code Challenge

المصدر: https://www.w3schools.com/html/html_challenges_iframes.asp

## مقدمة حول iframe

مرحبا بكم في درس جديد من دورة HTML. سنتعلم اليوم كيفية استخدام iframe لتضمين صفحة ويب داخل صفحة أخرى.

- استخدام iframe لتضمين محتوى خارجي
- فهم كيفية عمل العناصر المضمنة في HTML
- تطبيق التحديات البرمجية لتعزيز الفهم

## مفهوم iframe في HTML

عنصر iframe يستخدم لعرض صفحة ويب مستقلة ضمن إطار داخل صفحتك الحالية، معتمدا على Attribute مثل src.

- iframe هو اختصار لـ Inline Frame
- يستخدم Attribute المسماة src لتحديد المصدر
- يمكن التحكم في العرض والارتفاع عبر Attributes

## كتابة كود iframe

نكتب Start Tag للعنصر iframe، ثم نضيف Attribute باسم src لتحديد المسار، ونغلق العنصر بـ End Tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <iframe src="url" title="description">
    </iframe>
  </body>
</html>
```

## تفاصيل الـ Attributes

لا ننسى أهمية Attribute مثل title لتحسين إمكانية الوصول، وكذلك height و width لتحديد أبعاد الإطار.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <iframe src="demo.html" width="600" height="400" title="Iframe">
    </iframe>
  </body>
</html>
```

## المعاينة في المتصفح

عند فتح هذا الكود في Web Browser مثل Chrome أو Edge، ستظهر الصفحة المضمنة داخل الإطار المحدد.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- النتيجة: -->
    <iframe src="demo.html"></iframe>
  </body>
</html>
```

## أفضل الممارسات

يجب دائما التأكد من أن الصفحة المضمنة تسمح بذلك، واستخدام Attribute مثل title لوصف المحتوى.

- استخدام title للوصف
- التحقق من أذونات الموقع الخارجي
- تحديد الأبعاد بدقة

## خلاصة الدرس

في ختام هذا الدرس، تعلمنا كيفية استخدام iframe لتضمين الصفحات. أدعوكم لتجربة التحديات البرمجية في الرابط الموجود في الوصف.

- تمت تغطية أساسيات iframe
- تم شرح أهمية Attributes
- شجعنا على التطبيق العملي
