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
<form id="form1" action="/save">
  <input type="text" name="fname">
</form>
<input type="text" form="form1">
```

## شرح Attribute formaction

تستخدم formaction لتحديد مسار معالجة مختلف لكل زر إرسال داخل نفس النموذج.

```html
<form action="/default">
  <input type="submit" value="Submit">
  <input type="submit" 
    formaction="/admin"
    value="Submit as Admin">
</form>
```

## شرح Attribute formenctype

تحدد formenctype كيفية ترميز البيانات عند إرسال النموذج باستخدام طريقة post.

```html
<form method="post">
  <input type="submit" value="Submit">
  <input type="submit" 
    formenctype="multipart/form-data"
    value="Upload">
</form>
```

## شرح Attribute formmethod

تتيح formmethod تحديد طريقة إرسال البيانات لكل زر إرسال بشكل مستقل.

```html
<form method="get">
  <input type="submit" value="GET">
  <input type="submit" 
    formmethod="post"
    value="POST">
</form>
```

## شرح Attribute formtarget

تحدد formtarget نافذة عرض الاستجابة بعد إرسال النموذج.

```html
<form>
  <input type="submit" value="Submit">
  <input type="submit" 
    formtarget="_blank"
    value="New Window">
</form>
```

## التحقق من البيانات

تستخدم formnovalidate لتعطيل التحقق من صحة البيانات عند إرسال النموذج.

```html
<form>
  <input type="email">
  <input type="submit" value="Submit">
  <input type="submit" 
    formnovalidate
    value="Draft">
</form>
```

## خلاصة الدرس

لقد استعرضنا Attributes التحكم في النماذج. جربوا الأكواد بأنفسكم لتعزيز فهمكم.

- form: للربط الخارجي
- formaction: لتغيير مسار المعالجة
- formmethod: لتحديد طريقة الإرسال
- formnovalidate: لتعطيل التحقق
