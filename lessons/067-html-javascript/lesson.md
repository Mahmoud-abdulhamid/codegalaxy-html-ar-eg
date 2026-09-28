# استخدام JavaScript في صفحات HTML

المصدر: https://www.w3schools.com/html/html_scripts.asp

## مقدمة حول JavaScript

تستخدم JavaScript لجعل صفحات الويب أكثر تفاعلية وديناميكية.

- JavaScript تجعل صفحات الويب تفاعلية
- تستخدم لتغيير المحتوى والأنماط
- تساعد في التحقق من النماذج

## استخدام script Tag

يستخدم script Tag لتعريف السكربتات داخل صفحة HTML.

- يستخدم script Tag لتعريف السكربتات
- يمكن كتابة الكود داخل العنصر
- يمكن ربط ملف خارجي عبر src

## تغيير المحتوى برمجيا

استخدام getElementById لتغيير محتوى عنصر معين.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <script>
      document.getElementById("demo").innerHTML =
      "Hello JavaScript!";
    </script>
  </body>
</html>
```

## تغيير الأنماط والخصائص

يمكن لـ JavaScript تغيير الأنماط و Attributes بسهولة.

```javascript
document.getElementById("demo").style.fontSize =
"25px";
document.getElementById("demo").style.color =
"red";
```

## التعامل مع noscript Tag

يستخدم noscript Tag لعرض محتوى بديل عند تعطيل السكربتات.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <noscript>
      Sorry, your browser does not
      support JavaScript!
    </noscript>
  </body>
</html>
```

## أفضل الممارسات

نصائح لتحسين أداء وجودة الكود البرمجي.

- استخدم ملفات خارجية للسكربتات
- نظم الكود بشكل جيد
- وفر دائما محتوى بديل عبر noscript
- اختبر الكود في متصفحات مختلفة

## خاتمة الدرس

شكرا لمتابعتكم، استمروا في التعلم والتطبيق العملي.

- تعلمنا دمج JavaScript مع HTML
- استخدام script و noscript
- تغيير العناصر برمجيا
- راجعوا الروابط لمزيد من التفاصيل
