# HTML HSL and HSLA Colors

المصدر: https://www.w3schools.com/html/html_colors_hsl.asp

## مقدمة في HSL

نظام HSL هو وسيلة قوية لتحديد الألوان في صفحات الويب عبر ثلاث قيم أساسية، مع إمكانية إضافة الشفافية باستخدام HSLA.

- HSL تعني Hue و Saturation و Lightness
- HSLA هي امتداد لـ HSL مع قناة Alpha للشفافية
- تستخدم هذه القيم لتحديد ألوان العناصر بدقة

## مكونات نظام HSL

تتكون صيغة hsl(hue, saturation, lightness) من ثلاث قيم رقمية ونسب مئوية.

## فهم Saturation و Lightness

تتحكم Saturation في شدة اللون، بينما تتحكم Lightness في سطوعه بين الأسود والأبيض.

- Saturation 100 لون نقي
- Saturation 0 لون رمادي
- Lightness 0 أسود
- Lightness 100 أبيض

## كتابة كود HSL

مثال برمجي لاستخدام HSL في CSS لتحديد لون خلفية عنصر ما.

```css
div {
  background-color: hsl(120, 100%, 50%);
}
```

## استخدام HSLA للشفافية

قيمة Alpha في HSLA تحدد مدى شفافية اللون من 0.0 إلى 1.0.

- HSLA هو HSL مع قناة Alpha
- Alpha 0.0 شفاف تماما
- Alpha 1.0 غير شفاف

## كود HSLA العملي

مثال برمجي يوضح استخدام HSLA مع قيمة Alpha للتحكم في الشفافية.

```css
div {
  background-color: hsla(120, 100%, 50%, 0.3);
}
```

## خلاصة الدرس

استخدموا نظام HSL و HSLA لتطوير مهاراتكم في تصميم صفحات الويب.

- HSL يوفر تحكما دقيقا في الألوان
- HSLA يضيف مرونة الشفافية
- جربوا الأكواد عبر الرابط في الوصف
