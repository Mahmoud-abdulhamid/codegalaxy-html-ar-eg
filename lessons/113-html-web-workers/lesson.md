# Web Workers API

المصدر: https://www.w3schools.com/html/html5_webworkers.asp

## مقدمة حول Web Workers

تساعد Web Workers في تشغيل الأكواد الثقيلة في الخلفية دون التأثير على استجابة صفحة الويب.

- تجنب توقف الصفحة عند تنفيذ مهام طويلة
- تشغيل JavaScript بشكل مستقل في الخلفية
- تحسين تجربة المستخدم عبر تعدد الخيوط

## التحقق من دعم المتصفح

يجب التحقق من دعم المتصفح لـ Web Worker قبل البدء في استخدامها.

```javascript
if(typeof(Worker) !== "undefined") {
  x.innerHTML = "Supported!";
} else {
  x.innerHTML = "Not supported!";
}
```

## إنشاء ملف Web Worker

يتم إنشاء Web Worker في ملف JavaScript خارجي واستخدام postMessage لإرسال النتائج.

```javascript
var i = 0;
function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()", 500);
}
timedCount();
```

## إنشاء كائن Web Worker

يتم ربط الـ Web Worker بالصفحة واستقبال الرسائل عبر الحدث onmessage.

```javascript
w = new Worker("demo_workers.js");
w.onmessage = function(event) {
  document.getElementById("result").innerHTML = 
  event.data;
};
```

## إنهاء Web Worker

استخدم terminate لإيقاف الـ Web Worker وتحرير الموارد.

```javascript
function stopWorker() {
  w.terminate();
  w = undefined;
}
```

## خلاصة الدرس

تعد Web Workers أداة قوية للمهام المكثفة، مع مراعاة عدم الوصول المباشر لـ DOM.

- تستخدم للمهام التي تستهلك المعالج
- لا تملك وصولا لـ DOM
- يتم التواصل عبر postMessage
- يجب إنهاؤها عند عدم الحاجة
