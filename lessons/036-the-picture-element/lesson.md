# شرح HTML picture Element بالتفصيل

المصدر: https://www.w3schools.com/html/html_images_picture.asp

## مقدمة عن picture Element

تعرف على عنصر picture في HTML لعرض صور مختلفة حسب حجم الشاشة أو الجهاز.

- تتعرف في هذا الدرس على عنصر picture الجديد
- يعرض صورا مختلفة تناسب أحجام الشاشات والأجهزة
- يوفر مرونة فائقة للمطورين في تحديد موارد الصور

## مفهوم picture و source و srcset

يحتوي عنصر picture على عناصر source مع Attributes srcset و media لتحديد الصورة المناسبة.

- العنصر picture يحتوي على عدة عناصر source
- تستخدم Attribute srcset للإشارة إلى مسار ملف الصورة
- تستخدم Attribute media لتحديد الشرط المناسب للشاشة

## كتابة هيكل picture لأحجام الشاشات الجزء الأول

نبدأ كتابة هيكل picture مع أول عنصر source للشاشات الواسعة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <picture>
      <source media="(min-width: 650px)" srcset="img_food.jpg">
      <source media="(min-width: 465px)" srcset="img_car.jpg">
      <img src="img_girl.jpg">
    </picture>
  </body>
</html>
```

## استكمال كود picture مع img الاحتياطية

نضيف عنصر source الثاني وعنصر img الأساسي في نهاية picture element.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <picture>
      <source media="(min-width: 650px)" srcset="img_food.jpg">
      <source media="(min-width: 465px)" srcset="img_car.jpg">
      <img src="img_girl.jpg">
    </picture>
  </body>
</html>
```

## معاينة النتيجة المرئية للصور

يعرض المتصفح الصورة الملائمة تلقائيا بناء على القياسات وحجم الشاشة.

## أسباب الاستخدام لتحسين Bandwidth

توفير Bandwidth وعدم تحميل صور ضخمة على الشاشات الصغيرة.

- تجنب تحميل صور كبيرة الحجم على الأجهزة ذات الشاشات الصغيرة
- يختار المتصفح أول source يطابق القيم ويتجاهل الباقي
- يساهم بشكل فعال في زيادة سرعة تحميل صفحات الويب

## دعم صيغ الصور المختلفة Format Support

دعم صيغ متعددة للصور لضمان التوافقية مع جميع المتصفحات.

- إضافة صور بصيغ حديثة ومتعددة داخل عنصر picture
- يختار المتصفح أول صيغة يفهمها ويدعمها مباشرة
- يعالج مشكلة عدم دعم بعض المتصفحات لصيغ معينة

## خلاصة الدرس وأفضل الممارسات

خلاصة درس picture element وأهمية وضع img في النهاية دائما.

- دائما ضع عنصر img كآخر ابن داخل picture element
- يستخدم img عند عدم دعم المتصفح لعنصر picture
- تابع معنا دورة HTML للمزيد من المهارات المتقدمة
