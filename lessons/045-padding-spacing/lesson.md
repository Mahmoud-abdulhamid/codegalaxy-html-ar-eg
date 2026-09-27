# تنسيق الجداول باستخدام Padding و Spacing في HTML

المصدر: https://www.w3schools.com/html/html_table_padding_spacing.asp

## مقدمة حول تنسيق الجداول

تسمح لنا لغة HTML مع CSS بالتحكم الدقيق في المسافات داخل الجداول لتحسين مظهرها.

- الجداول عنصر أساسي في هيكلة البيانات
- التحكم في المسافات يعزز تجربة المستخدم
- استخدام CSS للتحكم في Padding و Spacing

## مفهوم Cell Padding

يمثل Cell Padding المساحة الفاصلة بين حدود الخلية ومحتواها الداخلي.

- Cell Padding هو المسافة داخل الخلية
- القيمة الافتراضية هي 0
- يتم تطبيق الخاصية على th و td

## تطبيق CSS Padding

تطبيق خاصية padding يضيف مساحة موحدة حول محتوى الخلية.

```css
th, td
{
  padding: 15px;
}
```

## تخصيص Padding لكل جانب

يمكن التحكم في كل جانب من جوانب الخلية بشكل مستقل باستخدام خصائص CSS المخصصة.

```css
th, td {
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
}
```

## مفهوم Cell Spacing

تتحكم خاصية border-spacing في المسافة الفاصلة بين خلايا الجدول.

- Cell Spacing هي المسافة بين الخلايا
- القيمة الافتراضية هي 2px
- تطبق على عنصر table

## تطبيق border-spacing

تطبيق border-spacing على الجدول يباعد بين الخلايا بشكل واضح.

```css
table
{
  border-spacing: 30px;
}
```

## خلاصة الدرس

استخدام CSS للتحكم في المسافات يجعل الجداول أكثر احترافية ووضوحا.

- استخدم padding للمسافة داخل الخلية
- استخدم border-spacing للمسافة بين الخلايا
- جرب الأكواد بنفسك عبر الرابط في الوصف
