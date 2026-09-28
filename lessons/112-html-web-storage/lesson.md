# Web Storage API

المصدر: https://www.w3schools.com/html/html5_webstorage.asp

## مقدمة في Web Storage API

تعد Web Storage API وسيلة آمنة وفعالة لتخزين البيانات محليا في المتصفح بدلا من استخدام Cookies.

- تخزين البيانات محليا في المتصفح
- أكثر أمانا من استخدام Cookies
- سعة تخزين أكبر تصل إلى 5MB
- لا يتم إرسال البيانات إلى السيرفر

## التحقق من دعم المتصفح

يجب التأكد دائما من دعم المتصفح لـ Web Storage قبل البدء في استخدامه.

```javascript
if (typeof(Storage) !== "undefined") {
  // المتصفح يدعم التخزين
} else {
  // لا يوجد دعم
}
```

## استخدام localStorage

يسمح localStorage بتخزين البيانات بشكل دائم حتى بعد إغلاق المتصفح.

```javascript
localStorage.setItem("lastname", "Smith");
const name = localStorage.getItem("lastname");
localStorage.removeItem("lastname");
```

## مثال عملي: عداد النقرات

يمكن استخدام localStorage لحفظ حالة العداد وتحديثها عند كل نقرة.

```javascript
if (localStorage.clickcount) {
  localStorage.clickcount =
  Number(localStorage.clickcount) + 1;
} else {
  localStorage.clickcount = 1;
}
```

## الفرق مع sessionStorage

يستخدم sessionStorage للبيانات المؤقتة التي تنتهي بانتهاء جلسة التصفح.

```javascript
sessionStorage.setItem("key", "value");
// تحذف البيانات عند إغلاق التبويب
```

## خلاصة الدرس

تعد Web Storage أداة قوية للمطورين لتحسين تجربة المستخدم وإدارة البيانات بكفاءة.

- localStorage للبيانات الدائمة
- sessionStorage للبيانات المؤقتة
- تذكر دائما تحويل البيانات إلى نصوص
- استخدم الروابط في الوصف للتطبيق العملي
