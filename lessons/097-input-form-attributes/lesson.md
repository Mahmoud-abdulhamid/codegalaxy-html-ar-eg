# HTML Input form Attributes

المصدر: https://www.w3schools.com/html/html_form_attributes_form.asp

## مقدمة في Attributes النماذج

سنتعرف اليوم على Attributes HTML المتقدمة التي تمنحنا تحكما كاملا في عناصر input داخل نماذج الويب.

- التحكم في ارتباط input بالنماذج
- تخصيص مسارات المعالجة
- تحديد طرق الإرسال والترميز
- إدارة التحقق من صحة البيانات

## استخدام Attribute form

تسمح Attribute form بربط عنصر input بنموذج محدد حتى لو كان خارج نطاق Tag form الأساسي.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form id="form1" action="/save">
      <input type="text" name="fname">
    </form>
    <input type="text" form="form1">
  </body>
</html>
```

## شرح Attribute formaction

تستخدم formaction لتحديد مسار معالجة مختلف لكل زر إرسال داخل نفس النموذج.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form action="/default">
      <input type="submit" value="Submit">
      <input type="submit"
      formaction="/admin"
      value="Submit as Admin">
    </form>
  </body>
</html>
```

## شرح Attribute formenctype

تحدد formenctype كيفية ترميز البيانات عند إرسال النموذج باستخدام طريقة post.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form method="post">
      <input type="submit" value="Submit">
      <input type="submit"
      formenctype="multipart/form-data"
      value="Upload">
    </form>
  </body>
</html>
```

## شرح Attribute formmethod

تتيح formmethod تحديد طريقة إرسال البيانات لكل زر إرسال بشكل مستقل.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form method="get">
      <input type="submit" value="GET">
      <input type="submit"
      formmethod="post"
      value="POST">
    </form>
  </body>
</html>
```

## شرح Attribute formtarget

تحدد formtarget نافذة عرض الاستجابة بعد إرسال النموذج.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form>
      <input type="submit" value="Submit">
      <input type="submit"
      formtarget="_blank"
      value="New Window">
    </form>
  </body>
</html>
```

## التحقق من البيانات

تستخدم formnovalidate لتعطيل التحقق من صحة البيانات عند إرسال النموذج.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form>
      <input type="email">
      <input type="submit" value="Submit">
      <input type="submit"
      formnovalidate
      value="Draft">
    </form>
  </body>
</html>
```

## خلاصة الدرس

لقد استعرضنا Attributes التحكم في النماذج. جربوا الأكواد بأنفسكم لتعزيز فهمكم.

- form: للربط الخارجي
- formaction: لتغيير مسار المعالجة
- formmethod: لتحديد طريقة الإرسال
- formnovalidate: لتعطيل التحقق
