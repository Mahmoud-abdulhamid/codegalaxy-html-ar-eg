# تنسيق صفحات الويب باستخدام CSS

المصدر: https://www.w3schools.com/html/html_css.asp

## مقدمة في CSS

تستخدم لغة CSS لتنسيق وتصميم عناصر صفحات الويب بشكل احترافي.

- CSS تعني Cascading Style Sheets
- تتحكم في تخطيط وألوان وأحجام العناصر
- توفر الكثير من الجهد في تنسيق الصفحات

## طرق إضافة CSS

توجد ثلاث طرق رئيسية لإضافة CSS إلى مستندات HTML.

- Inline CSS داخل عنصر HTML
- Internal CSS داخل قسم head
- External CSS في ملفات منفصلة

## تطبيق Inline CSS

نستخدم Attribute style لتطبيق تنسيق مباشر على عنصر واحد.

```html
<h1 style="color:blue;">Blue</h1>
<p style="color:red;">Red</p>
```

## استخدام Internal CSS

يتم تعريف Internal CSS داخل عنصر style في قسم head.

```html
<head>
<style>
body {background: powderblue;}
h1 {color: blue;}
p {color: red;}
</style>
</head>
```

## خصائص CSS الأساسية

تستخدم خصائص CSS للتحكم في ألوان وأحجام وأنواع الخطوط.

```css
h1 {
  color: blue;
  font-family: verdana;
  font-size: 300%;
}
```

## التحكم في المسافات

تستخدم خصائص border و padding و margin للتحكم في المسافات.

```css
p {
  border: 2px solid blue;
  padding: 30px;
  margin: 50px;
}
```

## خاتمة الدرس

استمر في ممارسة كتابة أكواد CSS لتطوير مهاراتك في تصميم الويب.

- راجع خصائص CSS الأساسية
- جرب تطبيق الأكواد بنفسك
- تابع دروس CSS المتقدمة
