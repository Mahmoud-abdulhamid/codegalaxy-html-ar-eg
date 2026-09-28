# HTML Script and Noscript Elements

المصدر: https://www.w3schools.com/html/html_challenges_scripts.asp

## مقدمة حول الـ script element

نستعرض اليوم كيفية إضافة التفاعلية إلى صفحات الويب باستخدام script element وكيفية التعامل مع المتصفحات التي لا تدعم السكربتات عبر noscript.

- لغة HTML توفر script element لتضمين JavaScript
- يستخدم noscript لعرض محتوى بديل عند تعطيل السكربتات
- تعتبر هذه العناصر أساسية لبناء تطبيقات ويب تفاعلية

## مفهوم الـ script element

يستخدم script element لتضمين JavaScript، حيث يمكن كتابة الكود مباشرة أو ربط ملف خارجي عبر src Attribute.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <script>
      console.log('Hello World');
    </script>
    <script src="app.js"></script>
  </body>
</html>
```

## فهم الـ noscript element

يستخدم noscript element لعرض محتوى بديل في حال قام Web Browser بتعطيل JavaScript، مما يضمن تجربة مستخدم أفضل.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <noscript>
      عذراً، متصفحك لا يدعم JavaScript.
    </noscript>
  </body>
</html>
```

## مثال عملي متكامل

مثال يجمع بين script و noscript لضمان عمل الصفحة بكفاءة وتنبيه المستخدم في حال تعطل السكربتات.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <script>
      document.write("مرحباً بك!");
    </script>
    <noscript>
      يرجى تفعيل JavaScript.
    </noscript>
  </body>
</html>
```

## كيف يظهر الكود في المتصفح

يوضح هذا المشهد كيف يتعامل Web Browser مع script و noscript بناء على إعدادات المستخدم.

- المتصفح ينفذ script إذا كانت السكربتات مفعلة
- المتصفح يتجاهل script ويعرض noscript إذا كانت معطلة
- يضمن هذا التوافق مع جميع أنواع المتصفحات

## أفضل الممارسات البرمجية

أفضل الممارسات تشمل وضع السكربتات في نهاية body لتحسين الأداء وضمان وضوح رسائل noscript.

- ضع ملفات السكربت قبل إغلاق body
- استخدم ملفات خارجية لسهولة الصيانة
- اجعل رسالة noscript واضحة ومباشرة

## خلاصة الدرس

تعلمنا اليوم كيفية استخدام script و noscript لبناء صفحات ويب تفاعلية. جربوا الأكواد بأنفسكم عبر الرابط في الوصف.

- script يضيف التفاعلية للويب
- noscript يوفر بدائل للمتصفحات المقيدة
- التطبيق العملي هو مفتاح الاحتراف
