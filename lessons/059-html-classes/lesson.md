# HTML class Attribute

المصدر: https://www.w3schools.com/html/html_classes.asp

## مقدمة حول class Attribute

يستخدم class Attribute لتحديد صنف معين لعناصر HTML وتطبيق التنسيقات عليها.

- يستخدم class Attribute لتحديد صنف للعنصر
- يمكن لعناصر متعددة مشاركة نفس الـ class
- يساعد في تنظيم التنسيقات عبر CSS
- يسهل الوصول للعناصر باستخدام JavaScript

## قواعد كتابة الـ class

تكتب الـ class في CSS بوضع نقطة قبل الاسم، وتعرف الخصائص داخل أقواس معقوفة.

```css
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
```

## تطبيق class على div

تطبيق class باسم city على عناصر div لتنسيقها بشكل موحد.

```html
<div class="city">
  <h2>London</h2>
  <p>Capital of England.</p>
</div>
<div class="city">
  <h2>Paris</h2>
  <p>Capital of France.</p>
</div>
```

## استخدام أكثر من class

يمكن إضافة أكثر من class للعنصر الواحد بفصل الأسماء بمسافة.

```html
<h2 class="city main">
  London
</h2>
<h2 class="city">
  Paris
</h2>
```

## الـ class مع JavaScript

تستخدم JavaScript الدالة getElementsByClassName للوصول للعناصر وتعديلها.

```javascript
function myFunction() {
  var x = document.
  getElementsByClassName("city");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
```

## خلاصة الدرس

استخدم class Attribute لتنظيم وتنسيق عناصر الويب بفعالية واحترافية.

- الـ class يربط HTML بـ CSS و JavaScript
- الأسماء حساسة لحالة الأحرف
- يمكن دمج عدة classes في عنصر واحد
- استخدم getElementsByClassName في JavaScript
