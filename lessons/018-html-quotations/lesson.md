# HTML Quotation and Citation Elements

المصدر: https://www.w3schools.com/html/html_quotation_elements.asp

## مقدمة في عناصر الاقتباس

سنتعرف اليوم على مجموعة من Elements المخصصة لتنسيق الاقتباسات والمراجع والبيانات النصية في HTML.

- استخدام <blockquote> و <q> للاقتباسات
- استخدام <abbr> للاختصارات
- استخدام <address> لمعلومات الاتصال
- استخدام <cite> لعناوين الأعمال
- استخدام <bdo> للتحكم في اتجاه النص

## عناصر الاقتباس <blockquote> و <q>

يستخدم <blockquote> للاقتباسات الطويلة بينما يستخدم <q> للاقتباسات القصيرة داخل النص.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <blockquote cite="url">
      نص الاقتباس الطويل هنا
    </blockquote>
    <p>نص مع <q>اقتباس قصير</q></p>
  </body>
</html>
```

## عنصر الاختصارات <abbr>

يستخدم <abbr> لتعريف الاختصارات، ويفضل استخدام Attribute المسمى title لتوضيح المعنى.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <p>The <abbr title="World Health Organization">WHO</abbr> was
      founded in 1948.</p>
  </body>
</html>
```

## عنصر معلومات الاتصال <address>

يستخدم <address> لعرض معلومات الاتصال، ويظهر النص داخله بخط مائل مع فواصل أسطر تلقائية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <address>
      John Doe<br>
      Box 564, USA
    </address>
  </body>
</html>
```

## عنصر عناوين الأعمال <cite>

يستخدم <cite> لتحديد عناوين الأعمال الإبداعية، ويظهر النص داخله بخط مائل.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <p><cite>The Scream</cite> by
      Edvard Munch.</p>
  </body>
</html>
```

## عنصر اتجاه النص <bdo>

يستخدم <bdo> للتحكم في اتجاه النص وتجاوز الإعدادات الافتراضية للمتصفح.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <bdo dir="rtl">
      هذا النص يكتب من اليمين لليسار
    </bdo>
  </body>
</html>
```

## خاتمة الدرس

لقد تعلمنا اليوم كيفية استخدام عناصر الاقتباس والمراجع. جربوا الأكواد بأنفسكم لتعزيز مهاراتكم.

- استخدم <blockquote> للاقتباسات الطويلة
- استخدم <q> للاقتباسات القصيرة
- استخدم <abbr> للاختصارات مع title
- استخدم <address> لمعلومات الاتصال
- استخدم <cite> و <bdo> للتنسيقات الخاصة
