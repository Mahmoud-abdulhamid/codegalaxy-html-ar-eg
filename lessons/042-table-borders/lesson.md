# تنسيق حدود الجداول في HTML

المصدر: https://www.w3schools.com/html/html_table_borders.asp

## مقدمة حول حدود الجداول

تعتبر الجداول في HTML جزءا أساسيا لعرض البيانات، ويمكننا تحسين مظهرها باستخدام خصائص CSS للتحكم في الحدود.

- الجداول في HTML تدعم أنماطا متنوعة للحدود
- نستخدم CSS للتحكم في شكل وحجم ولون الحدود
- تحسين تجربة المستخدم من خلال تنسيق بصري احترافي

## إضافة الحدود الأساسية

نستخدم خاصية border في CSS لتحديد سمك ونوع ولون الحدود للعناصر table و th و td.

```css
table, th, td {
  border: 1px solid black;
}
```

## دمج الحدود المتعددة

خاصية border-collapse تمنع تكرار الحدود وتجعلها تظهر كخط واحد مشترك بين الخلايا.

```css
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
```

## تنسيق الحدود المخفية

يمكن محاكاة الحدود غير المرئية عبر مطابقة لون الحدود مع لون خلفية الصفحة.

```css
table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
}
th, td {
  background-color: #96D4D4;
}
```

## الزوايا الدائرية

خاصية border-radius تضفي طابعا عصريا على الجداول من خلال تدوير الزوايا.

```css
th, td {
  border: 1px solid black;
  border-radius: 10px;
}
```

## أنماط وألوان الحدود

تتيح خصائص border-style و border-color تخصيص مظهر الحدود بشكل دقيق.

```css
th, td {
  border-style: dotted;
  border-color: #96D4D4;
}
```

## خاتمة الدرس

مارسوا كتابة هذه الأكواد لتتقنوا التحكم في مظهر الجداول في مشاريعكم القادمة.

- استخدم border-collapse لدمج الحدود
- جرب border-radius للزوايا الدائرية
- نوع في border-style و border-color
- راجع الرابط في الوصف لمزيد من الأمثلة
