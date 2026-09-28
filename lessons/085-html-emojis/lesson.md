# Using Emojis in HTML

المصدر: https://www.w3schools.com/html/html_emojis.asp

## شرح Introduction to Emojis

مرحبا بكم في درس استخدام Emojis في صفحات الويب لتجربة ممتعة ومميزة.

- تعلم استخدام Emojis في صفحات الويب
- فهم طبيعة الرموز والتعرف على UTF-8
- تطبيق الأمثلة العملية خطوة بخطوة

## شرح What are Emojis

تبدو Emojis كالصورة لكنها في الواقع حروف من مجموعة UTF-8 الشاملة.

- Emojis تبدو كالصور ولكنها حروف
- تنتمي إلى مجموعة الحروف UTF-8
- تغطي جميع الرموز واللغات في العالم

## شرح The HTML charset Attribute

تحديد مجموعة الحروف UTF-8 عبر عنصر meta لضمان العرض السليم.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Styled Web Page</p>
  </body>
</html>
```

## شرح UTF-8 Characters and Entity Numbers

استخدام الأرقام لتمثيل الحروف والرموز التي لا تتوفر على لوحة المفاتيح.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <p>I will display A B C</p>
    <p>I will display &#65; &#66; &#67;</p>
  </body>
</html>
```

## شرح Example Explained

شرح كيفية عمل أرقام الكيان مع متصفحات الويب وعرض الحروف بدقة.

- عنصر meta يحدد مجموعة الحروف بدقة
- الحروف A و B و C تمثل بالأرقام 65 و 66 و 67
- تبدأ أرقام الكيان بـ &# وتنتتهي بـ

## شرح My First Emoji

إضافة أول رمز تعبيري Emoji باستخدام رقمه الفرعي داخل فقرة HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>My First Emoji</h1>
    <p>&#128512;</p>
  </body>
</html>
```

## شرح Sized Emojis Example

التحكم في أحجام الرموز التعبيرية باستخدام خاصية font-size في CSS.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>Sized Emojis</h1>
    <p style="font-size:48px">&#128512; &#128516; &#128525; &#128151;</p>
  </body>
</html>
```

```text
Sized Emojis
😀 😃 😍 💖
```

## شرح Conclusion and Best Practices

خلاصة الدرس وأهمية استخدام UTF-8 مع الرموز التعبيرية في HTML.

- ضرورة تحديد UTF-8charset دائما
- إمكانية تغيير حجم Emojis بـ font-size
- تجربة الأمثلة البرمجية من الرابط أدناه
