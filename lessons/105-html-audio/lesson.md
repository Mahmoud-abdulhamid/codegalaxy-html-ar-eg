# استخدام عنصر audio في HTML

المصدر: https://www.w3schools.com/html/html5_audio.asp

## مقدمة حول عنصر audio

يستخدم عنصر audio في HTML لتشغيل ملفات الصوت مباشرة داخل صفحات الويب.

- عنصر audio مخصص لتشغيل الصوت
- يدعم صيغا متعددة مثل MP3 و OGG
- يوفر تحكما كاملا للمستخدم

## الهيكل الأساسي لعنصر audio

نستخدم Attribute controls لإظهار أدوات التحكم الأساسية للمستخدم.

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support.
</audio>
```

## استخدام عنصر source

عنصر source يسمح بتحديد ملفات صوتية بديلة لضمان التوافق.

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
</audio>
```

## Attributes التشغيل التلقائي

Attribute autoplay تشغل الصوت تلقائيا، وmuted تجعله صامتا.

```html
<audio controls autoplay muted>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
```

## دعم المتصفحات

المتصفحات الحديثة تدعم عنصر audio بشكل كامل.

## خاتمة الدرس

استمر في ممارسة استخدام عناصر HTML لبناء صفحات ويب تفاعلية.

- استخدم controls لتجربة المستخدم
- وفر صيغا متعددة عبر source
- استخدم muted مع autoplay
- راجع DOM Reference للمزيد
