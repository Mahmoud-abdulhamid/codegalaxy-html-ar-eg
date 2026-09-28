# HTML Block and Inline Elements

المصدر: https://www.w3schools.com/html/html_blocks.asp

## مقدمة العناصر Block و Inline

تعرف على قيم العرض الافتراضية للعناصر في لغة HTML وكيفية تصنيفها إلى block و inline.

- لكل عنصر في HTML قيمة عرض افتراضية
- القيمتان الأكثر شيوعا هما block و inline
- تحدد هذه القيم كيفية ظهور العناصر في صفحة الويب

## خصائص عناصر Block

عناصر block-level تبدأ دائما في سطر جديد وتأخذ العرض الكامل المتاح لليسار واليمين.

- تبدأ دائما في سطر جديد بمفردها
- تأخذ كامل العرض المتاح أفقيا
- تضيف المتصفحات هوامش تلقائية قبلها وبعدها

## أمثلة على عناصر Block

مثال توضيحي لكيفية ظهور عناصر block مثل p و div في المستند.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <p>Hello World</p>
    <div>Hello World</div>
  </body>
</html>
```

## خصائص عناصر Inline

عناصر inline لا تبدأ في سطر جديد وتأخذ فقط العرض اللازم لمحتواها.

- لا تبدأ في سطر جديد إطلاقا
- تأخذ فقط القدر اللازم من العرض
- لا يمكنها احتواء عناصر block بداخلها

## مثال على عناصر Inline

مثال عملي لاستخدام عنصر span داخل النص بشكل inline.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <span>Hello World</span>
  </body>
</html>
```

## العنصر div الحاوي

عنصر div يعتبر حاوية افتراضية تستخدم لتجميع العناصر وتنسيقها معا.

- عنصر block رئيسي لتجميع المحتوى
- يستخدم كحاوية لتنظيم بنية الصفحة
- يتكامل بسلاسة مع خصائص CSS المختلفة

## تنسيق div باستخدام CSS

مثال متقدم لتنسيق عنصر div باستخدام أنماط CSS المضمنة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div style="background-color:black; color:white; padding:20px;">
      <h2>London</h2>
      <p>London is the capital.</p>
    </div>
  </body>
</html>
```

## العنصر span المضمن

عنصر span حاوية مضمنة لتنسيق أجزاء محددة من النص.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <p>My mother has
      <span style="color:blue;">blue</span> eyes.
      </p>
    </body>
  </html>
```

## خلاصة الدرس

ملخص شامل لعناصر block و inline مع تحيات المدرب محمود عبدالحميد.

- العناصر الكتلية block تأخذ سطرا كاملا
- العناصر المضمنة inline تتوسط السطر الحالي
- استخدم div للكتل و span للنصوص الجزئية
