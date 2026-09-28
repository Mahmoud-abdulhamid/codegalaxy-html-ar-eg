# HTML Table Colgroup

المصدر: https://www.w3schools.com/html/html_table_colgroup.asp

## مقدمة عن colgroup

ستعرف اليوم على كيفية تنسيق أعمدة الجدول باستخدام عنصر colgroup وعنصر col لترتيب صفحة الويب.

- تستخدم لغة HTML لتصميم جداول منظمة ومتناسقة
- يساعد عنصر colgroup في تنسيق أعمدة محددة بكفاءة
- نتعلم تطبيق الأنماط والخصائص مباشرة على الأعمدة

## المفاهيم والقواعد الأساسية

يستخدم عنصر colgroup كحاوية لتحديد خصائص الأعمدة ويجب وضعه قبل عناصر الجدول وبعد عنصر caption.

- عنصر colgroup يوضع مباشرة داخل table
- يتم تحديد كل مجموعة باستخدام عنصر col
- خاصية span تحدد عدد الأعمدة المستهدفة بالتنسيق

## كتابة الكود الأساسي الأول

نطبق التنسيق هنا على اول عمودين في الجدول باستخدام colgroup وcol مع خاصية style.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <table>
      <colgroup>
        <col span="2" style="background-color: #D6EEEE">
      </colgroup>
      <tr>
        <th>MON</th>
        <th>TUE</th>
      </tr>
    </table>
  </body>
</html>
```

```text
Table with styled columns
```

## خصائص CSS المسموحة

هناك مجموعة محدودة فقط من خصائص CSS المسموح استخدامها مع colgroup مثل العرض والخلفية والحدود.

- خاصية width لتحديد عرض الأعمدة
- خاصية visibility للتحكم في ظهور الأعمدة
- خسائص background وborder فقط المسموحة

## استخدام عناصر col متعددة

إذا أردنا تنسيق عدة أعمدة بأنماط مختلفة، يمكننا استخدام أكثر من عنصر col داخل colgroup.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <table>
      <colgroup>
        <col span="2" style="background-color: #D6EEEE">
        <col span="3" style="background-color: pink">
      </colgroup>
      <tr>
        <th>MON</th>
        <th>TUE</th>
        <th>WED</th>
      </tr>
    </table>
  </body>
</html>
```

```text
Table with multiple styled columns
```

## استخدام عناصر col فارغة

لتنسيق أعمدة في منتصف الجدول، يمكننا إدراج عنصر col فارغ بدون أنماط للأعمدة السابقة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <table>
      <colgroup>
        <col span="3">
        <col span="2" style="background-color: pink">
      </colgroup>
      <tr>
        <th>MON</th>
        <th>TUE</th>
        <th>WED</th>
      </tr>
    </table>
  </body>
</html>
```

```text
Table with middle columns styled
```

## إخفاء الأعمدة في الجداول

نستطيع أيضا إخفاء أعمدة معينة في الجدول بسهولة تامة باستخدام خاصية visibility مع قيمة collapse.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <table>
      <colgroup>
        <col span="2">
        <col span="3" style="visibility: collapse">
      </colgroup>
      <tr>
        <th>MON</th>
        <th>TUE</th>
      </tr>
    </table>
  </body>
</html>
```

```text
Table with hidden columns
```

## خلاصة الدرس

انتهينا من شرح استخدام colgroup وcol لتنسيق وإخفاء أعمدة الجدول باحترافية تامة.

- تم شرح استخدام colgroup وcol بوضوح
- تعرفنا على خصائص CSS المسموحة والأعمدة المخفية
- تابعوا تطبيق الأكواد عبر الرابط الموجود في الوصف
