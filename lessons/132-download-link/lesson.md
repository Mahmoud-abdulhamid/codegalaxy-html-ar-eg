# إنشاء روابط التحميل باستخدام HTML

المصدر: https://www.w3schools.com/howto/howto_html_download_link.asp

## مقدمة حول روابط التحميل

مرحبا بكم في درس جديد من دورة HTML لتعلم كيفية إنشاء روابط تحميل مباشرة للملفات باستخدام لغة الويب.

- إنشاء روابط تحميل مباشرة للملفات
- استخدام download attribute في HTML
- تحسين تجربة المستخدم في صفحات الويب

## مفهوم download attribute

نستخدم download attribute داخل a element لإخبار المتصفح بأن الرابط مخصص للتحميل، مع ضرورة وجود href attribute.

- يستخدم download attribute مع a element
- يجب تحديد href attribute ليعمل الرابط
- المتصفح يكتشف امتداد الملف تلقائيا

## مثال على رابط تحميل بسيط

مثال لاستخدام download attribute بدون قيمة، حيث يستخدم المتصفح اسم الملف الأصلي للتحميل.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <a href="/images/myw3schoolsimage.jpg" download>
      <img src="/images/myw3schoolsimage.jpg" alt="W3Schools">
    </a>
  </body>
</html>
```

## تخصيص اسم الملف المحمل

يمكن تحديد اسم جديد للملف المحمل عبر إعطاء قيمة لـ download attribute.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <a href="/images/myw3schoolsimage.jpg" download="w3logo">
      <img src="/images/myw3schoolsimage.jpg" alt="W3Schools">
    </a>
  </body>
</html>
```

## ملاحظات تقنية هامة

المتصفح يكتشف امتداد الملف تلقائيا، وينصح باختيار أسماء واضحة للملفات المحملة.

- المتصفح يكتشف امتداد الملف تلقائيا
- لا قيود على قيم download attribute
- استخدم أسماء ملفات واضحة للمستخدم

## خاتمة الدرس

تعلمنا كيفية إنشاء روابط تحميل احترافية باستخدام HTML. جربوا الأكواد بأنفسكم لمزيد من الفهم.

- تم شرح download attribute
- تم توضيح كيفية تغيير اسم الملف
- راجعوا المصدر لمزيد من التفاصيل
