# التعامل مع الصور في HTML

المصدر: https://www.w3schools.com/html/html_images.asp

## مقدمة حول الصور في HTML

تساهم الصور في تحسين تصميم صفحات الويب بشكل كبير.

- الصور تعزز من جاذبية وتصميم صفحات الويب
- يتم استخدام img Tag لإدراج الصور
- الصور لا تدرج فعليا بل يتم ربطها بالصفحة

## بنية عنصر img

يستخدم img Tag لإدراج الصور وهو Empty Element لا يحتاج ل Tag إغلاق.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <img src="url" alt="alternatetext">
  </body>
</html>
```

## شرح Attributes الأساسية

يجب تحديد src للمسار و alt للنص البديل.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <img src="img_chania.jpg" alt="Flowers in Chania">
  </body>
</html>
```

## التحكم في أبعاد الصور

استخدام style للتحكم في عرض وارتفاع الصورة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">
  </body>
</html>
```

## الصور الخارجية والمجلدات

يمكن ربط الصور من مجلدات محلية أو خوادم خارجية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <img src="/images/html5.gif" alt="HTML5 Icon">
  </body>
</html>
```

## استخدام الصورة كرابط

وضع img داخل a لإنشاء صورة قابلة للنقر.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <a href="default.asp">
      <img src="smiley.gif" alt="Tutorial">
    </a>
  </body>
</html>
```

## محاذاة الصور مع النصوص

استخدام CSS float لمحاذاة الصور بجانب النصوص.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <img src="smiley.gif" style="float:right; width:42px;height:42px;">
  </body>
</html>
```

## خلاصة الدرس

استخدم الصور بحذر لضمان سرعة تحميل الصفحة.

- استخدم دائما alt Attribute
- حدد أبعاد الصور لضمان استقرار الصفحة
- استخدم style بدلا من attributes الحجم
- احذر من أحجام الصور الكبيرة
