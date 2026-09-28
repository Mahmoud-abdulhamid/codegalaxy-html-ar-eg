# HTML Iframes

المصدر: https://www.w3schools.com/html/html_iframe.asp

## مقدمة عن iframe

مرحبا بكم في درس HTML Iframes للتعرف على كيفية تضمين صفحات الويب.

- تستخدم لغة HTML عنصر iframe لعرض صفحة وب داخل صفحة وب
- يسمى هذا الإطار بالعامة inline frame
- يساعد في تضمين مستندات خارجية بكل سهولة

## الصيغة الأساسية لـ iframe

الصيغة الأساسية لعنصر iframe مع خاصية src وخاصية title.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <iframe src="url" title="description"></iframe>
  </body>
</html>
```

## تحديد الطول والعرض

تحديد الأبعاد باستخدام خصائص العرض والارتفاع أو عبر CSS.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <iframe src="demo_iframe.htm" style="height:200px;width:300px;" title="Iframe Example"></iframe>
  </body>
</html>
```

## معاينة إطار iframe

معاينة شكل عنصر iframe بعد تطبيق أبعاد العرض والارتفاع.

## إزالة وتعديل الحدود

إزالة الحدود الافتراضية لعنصر iframe باستخدام خاصية CSS border.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <iframe src="demo_iframe.htm" style="border:2px solid red;" title="Iframe Example"></iframe>
  </body>
</html>
```

## معاينة إطار بإطار مخصص

صورة معاينة لعنصر iframe مع حدود مخصصة باللون الأحمر.

## استخدام iframe كهدف للرابط

ربط عناصر الرابط مع iframe لتغيير المحتوى عند النقر.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>
    <p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>
  </body>
</html>
```

## خلاصة الدرس

خلاصة استخدام عناصر iframe وأفضل الممارسات البرمجية.

- استخدام iframe لتضمين صفحات أخرى
- تخصيص الأبعاد عبر height و width
- إزالة أو تنسيق الحدود باستخدام CSS border
- توجيه الروابط داخل iframe باستخدام target
