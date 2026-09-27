# HTML Table Headers

المصدر: https://www.w3schools.com/html/html_table_headers.asp

## مقدمة رؤوس الجداول في HTML

تتيح لنا لغة HTML تنظيم الجداول وإضافة رؤوس واضحة لكل صف وعمود باستخدام العناصر المناسبة.

- تنظيم جداول البيانات بشكل احترافي
- استخدام العناصر المناسبة لعناوين الأعمدة
- تحسين تجربة المستخدم في قراءة البيانات

## استخدام th Elements

تعرف عناصر th لتحديد خلايا رؤوس الجداول بدلا من خلايا البيانات العادية td.

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
</table>
```

## هيكل الجدول الكامل

نضيف صفوف البيانات باستخدام عناصر td داخل الجدول بجانب رؤوس th.

```html
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
```

## الرؤوس العمودية Vertical Table Headers

يمكن تحويل العمود الأول في كل صف ليصبح رأس جدول عمودي باستخدام th.

```html
<table>
  <tr>
    <th>Firstname</th>
    <td>Jill</td>
  </tr>
  <tr>
    <th>Lastname</th>
    <td>Smith</td>
  </tr>
</table>
```

## محاذاة رؤوس الجداول CSS text-align

تكون رؤوس الجداول متوسطة وعريضة افتراضيا، ويمكن محاذاتها لليسار عبر CSS.

```css
th {
  text-align: left;
}
```

## دمج الأعمدة باستخدام colspan attribute

يمكن لرأس الجدول أن يمتد فوق أكثر من عمود باستخدام الخاصية colspan.

```html
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
</table>
```

## إضافة عنوان الجدول Table Caption

يستخدم عنصر caption لإضافة عنوان رئيسي للجدول ويكتب مباشرة بعد opening tag للجدول.

```html
<table style="width:100%">
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
</table>
```

## خلاصة الدرس وأفضل الممارسات

استخدمنا th و caption و colspan لبناء جداول منظمة واحترافية في صفحات الويب.

- استخدام th لخلايا الرؤوس بدلا من td
- تفعيل colspan لدمج الأعمدة بمرونة
- إضافة caption لوصف محتوى الجدول بالكامل
