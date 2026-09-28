# HTML Table Sizes

المصدر: https://www.w3schools.com/html/html_table_sizes.asp

## مقدمة أحجام الجداول

نتعلم اليوم كيفية التحكم في أحجام الجداول والعناصر المختلفة باستخدام style attribute.

- تحديد أحجام الجداول والأعمدة والصفوف في لغة HTML
- استخدام style attribute مع خاصية width
- استخدام style attribute مع خاصية height
- التحكم الكامل في أبعاد عناصر الويب

## قواعد وأساسيات الأبعاد

استخدام النسبة المئوية في عرض الجدول يقارنه بالعنصر الأب مثل body.

- التحكم في العرض عبر النسبة المئوية percentage
- مقارنة حجم العنصر مع العنصر الأب parent element
- العنصر الأب الافتراضي هو body element
- ضمان مرونة التصميم على مختلف الشاشات

## كود تحديد عرض الجدول كاملا

نضيف style="width:100" إلى عنصر table لتحديد العرض الكلي.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <table style="width:100%">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
    </table>
  </body>
</html>
```

```text
عرض الجدول الكلي بنسبة 100 بالمئة
```

## معاينة عرض الجدول الكلي

معاينة الجدول بعد تطبيق عرض 100 بالمئة في المتصفح.

## تحديد عرض عمود محدد

نحدد عرض العمود الأول بإضافة style="width:70" إلى عنصر th.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <table style="width:100%">
      <tr>
        <th style="width:70%">Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
    </table>
  </body>
</html>
```

```text
تخصيص 70 بالمئة لعرض العمود الأول
```

## معاينة عرض العمود المخصص

معاينة تخصيص عرض العمود الأول بنسبة 70 بالمئة.

## تحديد ارتفاع صف محدد

نحدد ارتفاع الصف الثاني بإضافة style="height:200px" إلى عنصر tr.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <table style="width:100%">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr style="height:200px">
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
    </table>
  </body>
</html>
```

```text
تحديد ارتفاع الصف الثاني بـ 200 بكسل
```

## معاينة ارتفاع الصف المخصص

معاينة ارتفاع الصف الثاني بعد تطبيق خصائص البكسل.

## خلاصة أحجام الجداول

خلاصة شاملة لمهارات التحكم في أحجام الجداول عبر لغة HTML.

- استخدام style attribute للتحكم في الأبعاد
- تحديد عرض الجدول والأعمدة بالنسب المئوية
- تحديد ارتفاع الصفوف بوحدات البكسل pixels
- تنظيم محتوى صفحات الويب باحترافية عالية
