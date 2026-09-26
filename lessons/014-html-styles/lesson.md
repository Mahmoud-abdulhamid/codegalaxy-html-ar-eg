# HTML Styles

المصدر: https://www.w3schools.com/html/html_styles.asp

## مقدمة حول HTML Styles

تعلم كيفية استخدام style attribute لإضافة تنسیقات CSS إلى عناصر HTML.

- تستخدم لغة HTML لتصميم صفحات الويب
- يضيف style attribute مظهرا جماليا للعناصر
- نتعلم التحكم بالألوان والخطوط والأحجام

## الصيغة العامة لـ style attribute

الصيغة العامة لكتابة التنسيق باستخدام style attribute.

```html
<tagname
  style="property:value;">
```

## تغيير لون خلفية الصفحة

تحديد لون الخلفية باستخدام background-color داخل عنصر body.

```html
<body style="background-color:powderblue;">
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
</body>
```

## خلفيات متعددة للعناصر

تطبيق خلفيات مختلفة لعنصرين مستقلين في صفحة HTML واحدة.

```html
<body>
  <h1 style="background-color:powderblue;">
    This is a heading
  </h1>
  <p style="background-color:tomato;">
    This is a paragraph.
  </p>
</body>
```

## تغيير لون النصوص

استخدام خاصية color لتغيير لون النصوص داخل العناصر.

```html
<h1 style="color:blue;">
  This is a heading
</h1>
<p style="color:red;">
  This is a paragraph.
</p>
```

## تنسيق الخطوط عبر font-family

تغيير نوع خط النص باستخدام خصائص CSS داخل HTML.

```html
<h1 style="font-family:verdana;">
  This is a heading
</h1>
<p style="font-family:courier;">
  This is a paragraph.
</p>
```

## التحكم في حجم النصوص

ضبط أحجام النصوص باستخدام النسبة المئوية في font-size.

```html
<h1 style="font-size:300%;">
  This is a heading
</h1>
<p style="font-size:160%;">
  This is a paragraph.
</p>
```

## محاذاة النصوص أفقيا

محاذاة النصوص في منتصف الصفحة باستخدام text-align.

```html
<h1 style="text-align:center;">
  Centered Heading
</h1>
<p style="text-align:center;">
  Centered paragraph.
</p>
```

## خلاصة الدرس وتطبيقات العمل

ملخص شامل لكل ما تعلمناه حول تنسيق عناصر HTML.

- استخدام style attribute للتنسيق المباشر
- تغيير background-color و color
- ضبط font-family و font-size و text-align
