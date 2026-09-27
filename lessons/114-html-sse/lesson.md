# Server-Sent Events API

المصدر: https://www.w3schools.com/html/html5_serversentevents.asp

## مقدمة حول Server-Sent Events

تسمح تقنية Server-Sent Events ببدء تحديثات تلقائية من السيرفر إلى صفحة الويب عبر اتصال HTTP.

- تحديثات تلقائية من السيرفر إلى المتصفح
- تستخدم في تطبيقات مثل أخبار البورصة ونتائج الرياضة
- تعتمد على اتصال HTTP مستمر
- تغني عن طلب البيانات المتكرر من العميل

## مفاهيم أساسية

يستخدم الكائن EventSource لاستقبال إشعارات الأحداث المرسلة من السيرفر.

- استخدام EventSource للاتصال بالسيرفر
- التحقق من دعم المتصفح عبر typeof EventSource
- الاستماع للأحداث عبر onmessage
- تحديث واجهة المستخدم بناء على البيانات المستلمة

## كود العميل JavaScript

كود JavaScript للتحقق من دعم المتصفح والاتصال بالسيرفر.

```javascript
if(typeof(EventSource) !== "undefined") {
  var source = new EventSource("demo_sse.php");
  source.onmessage = function(event) {
    document.getElementById("result").innerHTML += 
    event.data + "<br>";
  };
} else {
  alert("No support!");
}
```

## كود السيرفر PHP

إعداد السيرفر لإرسال البيانات بتنسيق text/event-stream.

```php
<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$time = date('r');
echo "data: The server time is: {$time}\n\n";
flush();
?>
```

## معاينة النتيجة

تظهر البيانات المحدثة تلقائيا في المتصفح عند وصولها من السيرفر.

## ملاحظات هندسية

ملاحظة: SSE مخصصة للاتصال أحادي الاتجاه من السيرفر للعميل.

- SSE تدعم الاتصال أحادي الاتجاه فقط
- استخدم WebSockets للاتصال ثنائي الاتجاه
- تأكد من إغلاق الاتصال عند عدم الحاجة
- تعامل مع أخطاء الاتصال في كود JavaScript

## خاتمة الدرس

شكرا لمتابعتكم، استمروا في ممارسة البرمجة وتطوير مهاراتكم.

- تمت تغطية مفاهيم SSE
- تم شرح كود العميل والسيرفر
- تم توضيح أهمية EventSource
- راجعوا الروابط في الوصف للتطبيق العملي
