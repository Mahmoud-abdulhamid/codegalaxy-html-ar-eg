# HTML Character Sets and Encoding

المصدر: https://www.w3schools.com/html/html_charset.asp

## شرح Introduction to Character Sets

مرحبا بكم في درس تشفير الحروف في لغة HTML وكيفية تحديد character set المناسب لصفحات الويب.

- تعريف مفاهيم ترميز الحروف Character Sets
- أهمية تحديد charset في متصفح الويب
- معايير التشفير الحديثة والقديمة

## شرح The HTML charset Attribute

لكي يعرض متصفح الويب صفحة HTML بشكل صحيح، يجب أن يعرف أي character set يستخدم عبر meta tag.

```html
<meta charset="UTF-8">
```

## شرح The UTF-8 Character Set

تشجع مواصفات HTML مطوري الويب على استخدام UTF-8 لأنه يغطي تقريبا كل الحروف والرموز في العالم.

- UTF-8 هو المعيار العالمي الموصى به
- يدعم جميع اللغات والرموز العالمية
- يكتب بسهولة داخل عنصر meta

## شرح The ASCII Character Set

كان ASCII أول معيار لتشفير الحروف على شبكة الويب وحدد 128 حرفا لاتينيا مختلفا.

- ASCII هو أول معيار تشفير للويب
- يدعم 128 حرفا لاتينيا فقط
- لا يدعم الحروف العربية أو الآسيوية

## شرح The ANSI Character Set

أما تشفير ANSI أو Windows-1252 فكان أول تشفير خاص بنظام التشغيل Windows.

```html
<meta charset="Windows-1252">
```

## شرح The ISO-8859-1 Character Set

كان التشفير الافتراضي لإصدار HTML 4 هو ISO-8859-1 وقد دعم 256 حرفا.

```html
<meta http-equiv="Content-Type"
content="text/html;charset=ISO-8859-1">
```

## شرح HTML 5 vs HTML 4 Examples

في HTML 5 أصبحت كتابة التشفير أبسط بكثير مقارنة بالطريقة القديمة في HTML 4.

```html
<meta charset="ISO-8859-1">
```

## شرح HTML UTF-8 Character Categories

يغطي معيار UTF-8 فئات واسعة مثل Basic Latin وعلامات الترقيم والرموز العالمية المختلفة.

- مفهوم Basic Latin and Latin Extended
- مفهوم Diacritical Marks and Punctuation
- مفهوم Super and Subscript and Braille

## شرح Conclusion and Best Practices

احرص دائما على استخدام UTF-8 في جميع مشاريع الويب لضمان توافقية عرض النصوص.

- دائما استخدم UTF-8 للمشاريع الجديدة
- تأكد من وضع meta charset في قسم head
- تابع معنا باقي دورة HTML عبر CodeGalaxy
