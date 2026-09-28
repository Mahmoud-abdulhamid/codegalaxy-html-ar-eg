# التعامل مع Geolocation API في HTML5

المصدر: https://www.w3schools.com/html/html5_geolocation.asp

## مقدمة حول Geolocation API

تستخدم Geolocation API للحصول على الموقع الجغرافي للمستخدم في تطبيقات الويب.

- تستخدم Geolocation API للحصول على الموقع الجغرافي
- تتطلب موافقة المستخدم لضمان الخصوصية
- تعمل فقط في سياقات آمنة مثل HTTPS
- تعتمد على تقنيات GPS في الأجهزة الذكية

## قواعد العمل مع الموقع

يجب توفر اتصال آمن HTTPS لطلب الموقع، ويقوم المتصفح بطلب إذن المستخدم.

- يجب استخدام HTTPS للوصول للموقع
- يطلب المتصفح إذن المستخدم أولا
- يتم الوصول عبر navigator.geolocation
- تستخدم getCurrentPosition لاسترجاع البيانات

## كود الحصول على الموقع

استخدام الدالة getCurrentPosition لاسترجاع إحداثيات الموقع.

```javascript
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
    success, error);
  } else {
    x.innerHTML = "Not supported.";
  }
}
```

## دالة النجاح ومعالجة البيانات

استخراج الإحداثيات من كائن position وعرضها.

```javascript
function success(position) {
  x.innerHTML = "Lat: " +
  position.coords.latitude +
  "<br>Long: " +
  position.coords.longitude;
}
```

## معالجة الأخطاء

معالجة الأخطاء باستخدام كائن error.code.

```javascript
function error(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED: x.innerHTML = "Denied.";
    break;
    case error.POSITION_UNAVAILABLE: x.innerHTML = "Unavailable.";
    break;
  }
}
```

## تتبع الموقع

استخدام watchPosition لتتبع حركة المستخدم بشكل مستمر.

```javascript
navigator.geolocation.watchPosition(
success, error
);
```

## خلاصة الدرس

تعلمنا كيفية استخدام Geolocation API مع مراعاة الخصوصية ومعالجة الأخطاء.

- استخدام getCurrentPosition للموقع الحالي
- استخدام watchPosition للتتبع المستمر
- ضرورة معالجة الأخطاء البرمجية
- احترام خصوصية المستخدم دائما
