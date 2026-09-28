# HTML Ordered Lists

المصدر: https://www.w3schools.com/html/html_lists_ordered.asp

## مقدمة القوائم المرقمة في HTML

نتعرف اليوم على كيفية إنشاء القوائم المرقمة باستخدام ol tag لتنظيم المحتوى.

- تستخدم لغة HTML القوائم المرقمة لتنظيم وترتيب البيانات
- يتم تعريف القائمة المرقمة الأساسية باستخدام ol tag
- تظهر عناصر القائمة المرقمة بترتيب رقمي أو حرفي

## الهيكل الأساسي للقائمة المرقمة

تبدأ القائمة المرقمة باستخدام ol tag وكل عنصر داخلها يبدأ بـ li tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
  </body>
</html>
```

## معاينة القائمة المرقمة في المتصفح

يظهر الترقيم تلقائيا بالأرقام في متصفح الويب لكل عنصر داخل القائمة.

## التحكم في شكل الترقيم عبر type attribute

يمكننا تغيير شكل الترقيم باستخدام type attribute مع ol tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <ol type="A">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
  </body>
</html>
```

## خيارات وأنماط type attribute المتعددة

تضم خيارات type attribute قيما متعددة للأرقام والحروف الرومانية.

## التحكم في نقطة بداية الترقيم start attribute

يمكننا البدء من رقم محدد غير الواحد باستخدام start attribute داخل ol tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <ol start="50">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
  </body>
</html>
```

## القوائم المتداخلة Nested HTML Lists

يمكن أن تتداخل القوائم بحيث يحتوي عنصر القائمة على قائمة مرقمة جديدة.

## خلاصة الدرس ودعوة للتجربة

تعرفنا على تفاصيل القوائم المرقمة وكيفية التحكم في ترقيمها وتداخلها.

- استخدام ol tag لإنشاء القوائم المرقمة
- تخصيص الرمز والترقيم باستخدام type attribute
- تحديد نقطة البداية عبر start attribute
- بناء قوائم متداخلة Nested Lists باحترافية
