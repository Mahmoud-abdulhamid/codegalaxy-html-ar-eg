# HTML Video Elements and Attributes

المصدر: https://www.w3schools.com/html/html5_video.asp

## مقدمة عنصر الفيديو

مرحبا بكم في درس تشغيل الفيديو باستخدام video element في لغة HTML.

- تستخدم لغة HTML عنصر video لعرض مقاطع الفيديو
- إدراج الوسائط المتعددة يعزز تفاعل المستخدمين في صفحات الويب
- دعم الملفات المرئية أصبح أساسيا في مواقع الويب الحديثة

## الكود الأساسي للفيديو

استخدام video element مع تحديد الأبعاد وإضافة controls attribute.

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

## شرح وظائف العناصر

يسمح source element بتحديد ملفات بديلة بينما يظهر النص عند عدم دعم المتصفح.

- controls attribute تضيف أزرار التشغيل والإيقاف والصوت
- تحديد width وheight يمنع اهتزاز الصفحة أثناء تحميل الفيديو
- source element يوفر مرونة في اختيار صيغ الملفات المدعومة

## خاصية التشغيل التلقائي

استخدام autoplay attribute لبدء تشغيل الفيديو تلقائيا.

```html
<video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

## التشغيل التلقائي الصامت

إضافة muted بعد autoplay للسماح بالتشغيل التلقائي الصامت.

```html
<video width="320" height="240" autoplay muted>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

## معاينة الفيديو في المتصفح

معاينة عنصر الفيديو وأدوات التحكم في متصفح الويب.

## صيغ الفيديو المدعومة

أبرز تنسيقات الفيديو المدعومة في المتصفحات الحديثة.

- تنسيق MP4 مدعوم على نطاق واسع في جميع المتصفحات الحديثة
- تنسيق WebM يوفر ضغطا عاليا وجودة ممتازة
- تنسيق Ogg يعتبر خيارا بديلا وموثوقا لبعض المتصفحات

## خلاصة الدرس

خلاصة استخدام عناصر الفيديو والخصائص المتقدمة في HTML.

- استخدام video element لعرض الوسائط المرئية
- التحكم في العرض والأبعاد والصوت بكل إتقان
- تابعونا في الدروس القادمة للمزيد من المهارات المتقدمة
