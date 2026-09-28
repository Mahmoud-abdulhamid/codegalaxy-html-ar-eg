# مقارنة لغة HTML مع XHTML

المصدر: https://www.w3schools.com/html/html_xhtml.asp

## مقدمة عن XHTML ومفهومها الأساسي

تعتبر XHTML نسخة أكثر صرامة وأقرب إلى لغة XML مقارنة بلغة HTML التقليدية.

- تعتبر XHTML نسخة صارمة معتمدة على XML
- تهدف إلى جعل كود الويب أكثر مرونة
- توفر آلية دقيقة للتعامل مع الأخطاء

## لماذا نستخدم XHTML ومعالجة الأخطاء

تتطلب XHTML معالجة دقيقة للأخطاء بخلاف متصفحات الويب التي تتجاهل أخطاء HTML.

- تتطلب XHTML أن تكون المستندات مصاغة بشكل سليم
- تتجاهل متصفحات الويب أخطاء HTML أحيانا
- تقدم XHTML معالجة أخطاء أكثر صرامة

## إلزامية استخدام <!DOCTYPE html> والعناصر الأساسية

يجب أن يحتوي مستند XHTML على تعريف DOCTYPE والعناصر الأساسية للغة.

- تعريف DOCTYPE إلزامي في مستندات XHTML
- يجب حضور عناصر html و head و title و body
- استخدام Attribute xmlns لتحديد النطاق

## مثال عملي لهيكل مستند XHTML القسم الأول

هيكل مستند XHTML يبدأ بتعريف DOCTYPE وفتح عنصر html مع Attribute النطاق.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="UTF-8">
    <title>Title of document</title>
  </head>
  <body>
    "-//W3C//DTD XHTML 1.1//EN"
    "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
    some content here...
  </body>
</html>
```

## مثال عملي لهيكل مستند XHTML القسم الثاني

نكمل هيكل المستند بإضافة قسم head وtitle ثم قسم <body> body.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="UTF-8">
    <title>Title of document</title>
  </head>
  <body>
    "-//W3C//DTD XHTML 1.1//EN"
    "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
    some content here...
  </body>
</html>
```

## قواعد تداخل العناصر وإغلاقها

تتطلب XHTML تداخلا سليما للعناصر وإغلاقا تاما لجميع Tags وEmpty Elements.

- يجب تداخل العناصر بشكل صحيح داخل بعضها
- إغلاق جميع العناصر بلا استثناء
- إغلاق Empty Elements مثل <br /> و <hr />

## حالة الأحرف وخصائص Tags

أسماء العناصر و Attributes يجب أن تكون بحروف صغيرة، وتوضع القيم بين علامات تنصيص.

- أسماء العناصر و Attributes بأحرف صغيرة lowercase
- قيم Attributes يجب أن تكون بين علامات تنصيص quotes
- منع تصغير Attributes attribute minimization نهائيا

## خلاصة الدرس وأفضل الممارسات

خلاصة قواعد XHTML الصارمة لضمان كتابة كود ويب نظيف وقابل للصيانة.

- تضمن قواعد XHTML كود ويب قياسيا ومنظما
- الالتزام بالإغلاق وحالة الأحرف الصغيرة
- تابع معنا الدروس القادمة لتطوير مهاراتك
