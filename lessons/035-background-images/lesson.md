# استخدام الصور كخلفية في HTML

المصدر: https://www.w3schools.com/html/html_images_background.asp

## مقدمة حول صور الخلفية

يمكن إضافة صورة كخلفية لأي Element في HTML باستخدام خصائص CSS.

- صور الخلفية تعزز التصميم البصري
- يمكن تطبيقها على أي Element
- تعتمد على خصائص CSS مثل background-image

## إضافة الخلفية عبر Attribute

استخدام style Attribute لإضافة صورة خلفية لعنصر p.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <p style="background-image: url('img_girl.jpg');">هذا النص يحتوي على صورة خلفية.</p>
  </body>
</html>
```

## استخدام قسم style

تحديد صورة الخلفية داخل style Element في قسم head.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      p {
        background-image: url('img_girl.jpg');
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Styled Web Page</p>
  </body>
</html>
```

## خلفية الصفحة بالكامل

تطبيق صورة الخلفية على كامل الصفحة عبر body Element.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      body {
        background-image: url('img_girl.jpg');
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Styled Web Page</p>
  </body>
</html>
```

## التحكم في تكرار الصورة

استخدام background-repeat لمنع تكرار صورة الخلفية.

```css
body {
  background-image: url('img.jpg');
  background-repeat: no-repeat;
}
```

## تغطية وتمديد الخلفية

استخدام background-size و background-attachment للتحكم في عرض الخلفية.

```css
body {
  background-image: url('img.jpg');
  background-size: cover;
  background-attachment: fixed;
}
```

## خلاصة الدرس

مارسوا كتابة الأكواد لتطوير مهاراتكم في تصميم صفحات الويب.

- استخدام background-image للصور
- استخدام no-repeat لمنع التكرار
- استخدام cover لتغطية كامل المساحة
- استخدام fixed لتثبيت الخلفية
