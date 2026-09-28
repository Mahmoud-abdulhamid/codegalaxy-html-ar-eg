# تشغيل فيديوهات YouTube في صفحات HTML

المصدر: https://www.w3schools.com/html/html_youtube.asp

## مقدمة الفيديوهات في الويب

تعرف على أسهل طريقة لتشغيل الفيديوهات في صفحات الويب باستخدام YouTube.

- تسهيل عرض الفيديوهات في صفحات الويب
- تجنب مشاكل صيغ الفيديو المختلفة وصعوبة التحويل
- الاعتماد على منصة YouTube كحل عملي وسريع

## معرف فيديو YouTube

استخدام معرف الفيديو YouTube Video ID للإشارة إلى الفيديو المطلوب داخل الكود.

- تجاوز عقبة تحويل الصيغ الصعبة والبطيئة
- الحصول على معرف فريد Video ID مثل tgbNymZ7vqY
- استخدام المعرف داخل كود HTML للربط المباشر

## عرض فيديو YouTube الأساسي

استخدام عنصر iframe لتضمين وتشغيل فيديو YouTube في صفحة الويب.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <iframe width="420"
      height="315"
      src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>
  </body>
</html>
```

## التشغيل التلقائي وكتم الصوت

إضافة خصائص التشغيل التلقائي مع كتم الصوت لضمان عمل الفيديو في المتصفحات.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <iframe width="420"
      height="315"
      src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
    </iframe>
  </body>
</html>
```

## تكرار الفيديوهات وقوائم التشغيل

تفعيل التكرار المستمر للفيديو باستخدام معاملات playlist و loop.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <iframe width="420"
      height="315"
      src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
    </iframe>
  </body>
</html>
```

## التحكم في أزرار ومشغل الفيديو

التحكم في إظهار أو إخفاء أزرار مشغل الفيديو باستخدام معامل controls.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <iframe width="420"
      height="315"
      src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
    </iframe>
  </body>
</html>
```

## معاينة النتيجة المرئية

معاينة شكل الفيديو داخل المتصفح بعد اكتمال التضمين.

## خلاصة الدرس

خلاصة شاملة لمهارات تضمين الفيديوهات المتقدمة في HTML.

- استخدام عنصر iframe لتضمين الفيديوهات
- التحكم بمعاملات autoplay و mute و loop
- إدارة ظهور أزرار التحكم بمرونة عالية
