# فهم واستخدام div Element في HTML

المصدر: https://www.w3schools.com/html/html_div.asp

## مقدمة حول div Element

يستخدم div Element كحاوية لتجميع عناصر HTML معا وتنظيم هيكل صفحة الويب.

- div هو اختصار لـ division
- يعمل كحاوية عامة للعناصر
- يساعد في تنظيم وتنسيق المحتوى

## الخصائص الافتراضية لـ div

يعتبر div من نوع block element ويشغل كامل العرض المتاح مع فواصل أسطر.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div>
      هذا محتوى داخل div
    </div>
  </body>
</html>
```

## استخدام div كحاوية

تجميع عناصر متعددة داخل div لتسهيل التنسيق.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div>
      <h2>العنوان</h2>
      <p>فقرة نصية هنا.</p>
    </div>
  </body>
</html>
```

## توسيط div باستخدام CSS

استخدام margin: auto لتوسيط عنصر div ذو عرض محدد.

```css
div {
  width: 300px;
  margin: auto;
}
```

## طرق محاذاة العناصر

طرق محاذاة عناصر div بجانب بعضها باستخدام CSS.

- استخدام خاصية float
- تغيير display إلى inline-block
- استخدام Flexbox Layout
- استخدام CSS Grid

## خلاصة الدرس

استمر في ممارسة استخدام div لبناء صفحات ويب منظمة واحترافية.
