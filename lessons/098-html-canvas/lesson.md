# HTML Canvas Graphics

المصدر: https://www.w3schools.com/html/html5_canvas.asp

## مقدمة حول HTML Canvas

عنصر canvas هو أداة قوية تستخدم لرسم الجرافيكس مباشرة على صفحة الويب.

- عنصر canvas هو حاوية للرسومات
- يستخدم JavaScript للرسم داخل canvas
- يدعم canvas جميع متصفحات الويب الرئيسية
- يمكن رسم المسارات، الصناديق، الدوائر، والنصوص

## إعداد عنصر canvas

يجب تحديد id و width و height لعنصر canvas لتعريف مساحة الرسم.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <canvas id="myCanvas"
      width="200" height="100"
      style="border:1px solid #000000;">
    </canvas>
  </body>
</html>
```

## الربط مع JavaScript

نستخدم getContext('2d') للبدء في الرسم داخل عنصر canvas.

```javascript
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
```

## رسم الأشكال والدوائر

استخدام التابع arc لرسم الدوائر وتحديد المسارات في canvas.

```javascript
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
```

## إضافة النصوص

يمكن إضافة نصوص إلى canvas باستخدام fillText أو strokeText.

```javascript
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
```

## استخدام التدرج اللوني

تستخدم التدرجات اللونية لإضافة ألوان متداخلة داخل عناصر canvas.

```javascript
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
```

## خاتمة الدرس

استمر في ممارسة استخدام canvas لبناء رسومات تفاعلية مذهلة.
