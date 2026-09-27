# HTML Video Element Challenge

المصدر: https://www.w3schools.com/html/html_challenges_video.asp

## مقدمة حول تضمين الفيديو

مرحبا بكم في درس تضمين الفيديو باستخدام HTML5.

- تستخدم لغة HTML لبناء هيكل صفحات الويب
- عنصر video يتيح عرض ملفات الفيديو مباشرة
- تحدي اليوم يختبر قدرتك على استخدام هذا العنصر

## القواعد الأساسية لعنصر الفيديو

تتكون عناصر HTML من Start Tag والمحتوى ثم End Tag.

- العنصر الأساسي هو <video>
- Attribute controls ضرورية لتشغيل وإيقاف الفيديو
- يمكن تحديد العرض والارتفاع عبر Attributes
- يجب إغلاق العنصر بـ </video>

## كتابة كود الفيديو

استخدام source Element داخل video لتحديد مسار الملف.

```html
<video width="320" controls>
  <source src="movie.mp4" type="video/mp4">
</video>
```

## شرح Attributes البرمجية

Attributes src و type ضرورية لعمل الفيديو بشكل سليم.

- src: يحدد مسار ملف الفيديو
- type: يحدد نوع الملف مثل video/mp4
- controls: توفر واجهة المستخدم للمشاهد

## أفضل الممارسات

أضف نصا بديلا للمتصفحات التي لا تدعم الفيديو.

```html
<video controls>
  <source src="movie.mp4">
  Your browser does not support
  the video tag.
</video>
```

## خلاصة الدرس

طبق ما تعلمته الآن وجرب الكود بنفسك.

- استخدم <video> لتضمين الوسائط
- لا تنس إضافة controls
- جرب التحدي العملي عبر الرابط
- استمر في ممارسة البرمجة يوميا
