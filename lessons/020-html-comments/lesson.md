# شرح التعليقات في لغة HTML وإخفاء المحتوى

المصدر: https://www.w3schools.com/html/html_comments.asp

## مقدمة تعليقات HTML

مرحبا بكم في درس تعليقات HTML ودورها في توثيق الكود.

- تعليقات HTML لا تظهر أبدأ في متصفح الويب
- تساعد في توثيق وفهم كود المصدر بوضوح
- تسهل تنظيم وترتيب الأكواد الكبيرة

## بنية Tag التعليق

شرح بنية تعليقات HTML ووجود علامة التعجب في بداية Tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- Write your comments here -->
  </body>
</html>
```

## كتابة التعليقات والتنبيهات

استخدام التعليقات لإضافة ملاحظات وتذكيرات داخل كود الويب.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- This is a comment -->
    <p>This is a paragraph.</p>
    <!-- Remember to add more information here -->
  </body>
</html>
```

## إخفاء المحتوى مؤقتا

استخدام التعليقات لإخفاء المحتوى مؤقتا عن العرض في المتصفح.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <p>This is a paragraph.</p>
    <!-- <p>This is another paragraph
  </p> -->
  <p>This is a paragraph too.</p>
</body>
</html>
```

## فحص الأخطاء و Debugging

أهمية التعليقات في اكتشاف الأخطاء وتصحيح الأكواد.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <p>This is a paragraph.</p>
    <!--
    <p>Look at this cool image:</p>
    <img src="pic_trulli.jpg" alt="Trulli">
    -->
    <p>This is a paragraph too.</p>
  </body>
</html>
```

## إخفاء المحتوى ضمن السطر الواحد

إخفاء أجزاء معينة داخل الفقرات باستخدام التعليقات المضمنة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <p>This <!-- great text --> is a paragraph.</p>
  </body>
</html>
```

## معاينة النتيجة المرئية

عرض النتيجة النهائية وكيفية تعامل متصفح الويب مع التعليقات.

## خلاصة الدرس

خلاصة درس تعليقات HTML وأهم ممارسات التوثيق البرمجي.

- Comments تفيد في توثيق وصيانة كود المصدر
- تستخدم لإخفاء العناصر المؤقتة واكتشاف الأخطاء
- ندعوكم لتجربة الأكواد بأنفسكم عبر روابط المصدر
