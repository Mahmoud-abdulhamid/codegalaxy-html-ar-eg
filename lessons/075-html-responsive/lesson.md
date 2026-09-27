# تصميم صفحات الويب المتجاوبة Responsive Web Design في HTML

المصدر: https://www.w3schools.com/html/html_responsive.asp

## مفهوم Responsive Web Design

Responsive Web Design يهدف إلى جعل صفحات الويب ملائمة وتلقائية التكيف على جميع الأجهزة والشاشات المختلفة.

- مفهوم Responsive Web Design يعتمد على HTML و CSS
- إعادة ضبط أحجام العناصر وإخفاؤها أو إظهارها تلقائيا
- دعم الهواتف والأجهزة اللوحية والحواسيب المكتبية

## إعداد meta viewport في الرأس

إضافة meta viewport في head ترشد المتصفح لكيفية ضبط أبعاد الصفحة ومقياس عرضها.

```html
<meta name="viewport"
  content="width=device-width, initial-scale=1.0">
```

## الصور المتجاوبة مع max-width

استخدام max-width بنسبة 100 يمنع الصورة من التمدد خارج أبعادها الأصلية مع تصغيرها بمرونة.

```html
<img src="img_girl.jpg"
  style="max-width:100%;height:auto;">
```

## تبديل الصور باستخدام picture Element

عنصر picture يتيح تقديم مصادر صور متعددة بناء على قيود media لعرض الصورة المناسبة لكل شاشة.

```html
<picture>
  <source srcset="small.jpg"
    media="(max-width: 600px)">
  <source srcset="large.jpg"
    media="(max-width: 1500px)">
  <img src="flowers.jpg" alt="Flowers">
</picture>
```

## المعاينة المرئية للتصميم المتجاوب

معاينة عملية لتحول الأعمدة الأفقية على الشاشات الكبيرة إلى تخطيط رأسي على الشاشات الصغيرة.

## حجم النص ووحدة vw وقواعد Media Queries

تسمح وحدة vw للنصوص بالتغير تبعا لعرض viewport وتطبق Media Queries تنسيقات خاصة عند breakpoints.

```css
@media screen and (max-width: 800px) {
  .left, .main, .right {
    width: 100%;
  }
}
```

## أطر عمل CSS المتجاوبة

مقارنة بين إطاري العمل W3.CSS و Bootstrap في دعم التصميم المتجاوب.

## خلاصة الدرس وأفضل الممارسات

الخلاصة: ابدأ دائما بـ meta viewport وطبق max-width و Media Queries لتحقيق التجاوب الكامل.

- إدراج meta viewport دائما في head
- استخدام max-width: 100 مع الصور
- استعمال picture لتبديل الصور و vw لتجاوب النصوص
- توظيف Media Queries أو Frameworks للتخطيط المرن
