# شرح خاصية id في لغة HTML والاستخدامات المتقدمة

المصدر: https://www.w3schools.com/html/html_id.asp

## مقدمة عن خاصية id

تعرف على كيفية استخدام خاصية id لتحديد عناصر فريدة في صفحة الويب.

- تستخدم خاصية id لتحديد معرف فريد لعنصر HTML
- لا يمكن تكرار نفس القيم لخاصية id داخل مستند واحد

## القواعد الأساسية لخاصية id

القواعد الأساسية لكتابة اسم id بشكل صحيح في لغة HTML.

- أسماء id حساسة لحالة الأسطر والحروف case-sensitive
- يجب ألا تبدأ برقم وألا تحتوي على مسافات فارغة

## تطبيق عملي لتنسيق id

كتابة كود HTML لتنسيق عنصر h1 باستخدام خاصية id.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      #myHeader {
        background-color: lightblue;
        color: black;
        padding: 40px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1 id="myHeader">My Header</h1>
  </body>
</html>
```

## استكمال الكود وعرض النتائج

استكمال كود HTML وعرض العنوان المرئي في المتصفح.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      #myHeader {
        background-color: lightblue;
        color: black;
        padding: 40px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1 id="myHeader">My Header</h1>
  </body>
</html>
```

## الفرق بين class و id

الفرق الجوهري بين استخدام class المتعدد و id الفريد في الصفحة.

## المرجعيات والروابط Bookmarks

إنشاء المرجعيات في صفحات الويب الطويلة باستخدام خاصية id.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <h2 id="C4">Chapter 4</h2>
    <a href="#C4">Jump to Chapter 4</a>
  </body>
</html>
```

## استخدام id مع JavaScript

استخدام خاصية id مع لغة JavaScript لتعديل محتوى العناصر.

```javascript
<script>
function displayResult() {
  document.getElementById(
  "myHeader"
  ).innerHTML =
  "Have a nice day!";
}
</script>
```

## خلاصة الدرس

خلاصة درس خاصية id ودعوتكم للتمرن المستمر لتطوير مهاراتكم.

- استخدم id لتحديد عناصر فريدة في صفحة HTML
- استفد من id مع CSS وتنسيقات JavaScript المتقدمة
