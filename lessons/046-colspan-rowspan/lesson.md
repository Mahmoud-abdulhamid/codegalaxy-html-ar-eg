# HTML Table Colspan and Rowspan

المصدر: https://www.w3schools.com/html/html_table_colspan_rowspan.asp

## مقدمة الدرس

مرحبا بكم في درس دمج خلايا جداول HTML باستخدام colspan و rowspan.

- جداول الويب المرنة وتخطيط البيانات
- استخدام colspan لدمج الأعمدة المتعددة
- استخدام rowspan لدمج الصفوف المختلفة

## مفهوم Colspan

نستخدم attribute المسمى colspan لتمكين الخلية من الامتداد عبر عدة أعمدة.

- خاصية colspan تدمج الأعمدة الأفقية
- تحدد القيمة الرقمية عدد الأعمدة المتجاورة
- تستخدم غالبا في عناصر th و td

## كود Colspan القسم الأول

نبدأ جدول HTML ونستخدم colspan بقيمة 2 لدمج عمودي الاسم.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <table>
      <tr>
        <th colspan="2">Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>43</td>
      </tr>
    </table>
  </body>
</html>
```

## كود Colspan القسم الثاني

نكمل بناء صفوف بيانات الجدول لتوضيح تأثير دمج الأعمدة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <table>
      <tr>
        <th colspan="2">Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>43</td>
      </tr>
    </table>
  </body>
</html>
```

## معاينة Colspan

معاينة جدول الويب بعد تطبيق خصائص colspan بنجاح.

## مفهوم Rowspan

نستخدم attribute المسمى rowspan لتمكين الخلية من الامتداد عبر عدة صفوف رأسية.

- خاصية rowspan تدمج الصفوف الرأسية
- تحدد القيمة الرقمية عدد الصفوف للأسفل
- تساعد في تنظيم البيانات المتكررة

## كود Rowspan القسم الأول

إنشاء جدول ويب وتطبيق rowspan بقيمة 2 لدمج صفوف الهاتف.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <table>
      <tr>
        <th>Name</th>
        <td>Jill</td>
      </tr>
      <tr>
        <th rowspan="2">Phone</th>
        <td>555-1234</td>
      </tr>
      <tr>
        <td>555-8745</td>
      </tr>
    </table>
  </body>
</html>
```

## كود Rowspan القسم الثاني

إكمال هيكل الجدول لعرض دمج الصفوف بشكل منظم.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <table>
      <tr>
        <th>Name</th>
        <td>Jill</td>
      </tr>
      <tr>
        <th rowspan="2">Phone</th>
        <td>555-1234</td>
      </tr>
      <tr>
        <td>555-8745</td>
      </tr>
    </table>
  </body>
</html>
```

## معاينة Rowspan

معاينة نتيجة استخدام rowspan لتوزيع أرقام الهواتف داخل الجدول.

## خلاصة الدرس

خلاصة دمج الخلايا في جداول HTML باستخدام خصائص colspan و rowspan.

- استخدام colspan لدمج الأعمدة الأفقية
- استخدام rowspan لدمج الصفوف الرأسية
- تصميم جداول ويب متقدمة ومنظمة
- تابعون في الدروس القادمة مع محمود عبدالحميد
