# تنسيق جداول HTML باستخدام CSS

المصدر: https://www.w3schools.com/html/html_table_styling.asp

## مقدمة في تنسيق الجداول

مرحبا بكم في درس تنسيق الجداول باستخدام CSS لجعل صفحات الويب أكثر احترافية.

- تحسين مظهر الجداول باستخدام CSS
- جعل البيانات أكثر قابلية للقراءة
- تطبيق تقنيات التصميم الحديثة

## تأثير Zebra Stripes للصفوف

استخدام nth-child(even) لتطبيق تأثير Zebra Stripes على صفوف الجدول.

```css
tr:nth-child(even) {
  background-color: #D6EEEE;
}
```

## تأثير Zebra Stripes للأعمدة

تطبيق التنسيق على الأعمدة باستخدام td و th مع nth-child.

```css
td:nth-child(even),
th:nth-child(even) {
  background-color: #D6EEEE;
}
```

## دمج التنسيقات والألوان الشفافة

استخدام rgba لتطبيق ألوان شفافة ودمج تأثير الصفوف والأعمدة.

```css
tr:nth-child(even) {
  background-color: rgba(150, 212, 212, 0.4);
}
th:nth-child(even), td:nth-child(even) {
  background-color: rgba(150, 212, 212, 0.4);
}
```

## الفواصل الأفقية

إضافة فواصل أفقية باستخدام border-bottom على عناصر tr.

```css
tr {
  border-bottom: 1px solid #ddd;
}
```

## التفاعل عند تمرير الفأرة

استخدام hover لتسليط الضوء على الصفوف عند تمرير الفأرة.

```css
tr:hover {
  background-color: #D6EEEE;
}
```

## خلاصة الدرس

خلاصة: استخدم CSS لتنسيق الجداول وتجربة الأكواد المذكورة في مشاريعك.

- استخدام nth-child للتنسيق الدوري
- تطبيق rgba للشفافية
- استخدام border-bottom للفواصل
- تفعيل hover للتفاعل
