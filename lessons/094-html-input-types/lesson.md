# HTML Input Types Comprehensive Guide

المصدر: https://www.w3schools.com/html/html_form_input_types.asp

## مقدمة حول HTML input element

سنتعرف اليوم على العنصر input وأنواعه المختلفة التي تساعدنا في بناء نماذج الويب التفاعلية.

- العنصر input هو الوسيلة الأساسية لجمع بيانات المستخدم
- يتم تحديد نوع الحقل باستخدام Attribute type
- القيمة الافتراضية للسمة type هي text

## أنواع الحقول النصية وكلمات المرور

استخدام النوع text للنصوص والنوع password لحقول كلمات المرور.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form>
      <label for="user">User:</label>
      <input type="text" id="user">
      <label for="pwd">Pass:</label>
      <input type="password" id="pwd">
    </form>
  </body>
</html>
```

## أزرار الإرسال وإعادة التعيين

استخدام النوع submit للإرسال والنوع reset لإعادة تعيين النموذج.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form action="/submit">
      <input type="submit" value="Send">
      <input type="reset" value="Clear">
    </form>
  </body>
</html>
```

## الاختيارات المتعددة و Radio buttons

الفرق بين radio للاختيار الفردي و checkbox للاختيارات المتعددة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <input type="radio" name="opt">
    <label>Option 1</label>
    <input type="checkbox" name="box">
    <label>Option 2</label>
  </body>
</html>
```

## التعامل مع الأرقام والمدى

استخدام النوع number و range لضبط المدخلات الرقمية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <input type="number" min="1" max="5">
    <input type="range" min="0" max="100">
  </body>
</html>
```

## أنواع متقدمة مثل التاريخ واللون

استخدام الأنواع المتقدمة مثل date و color و email.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <input type="date">
    <input type="color">
    <input type="email">
  </body>
</html>
```

## خلاصة الدرس

خلاصة: اختر النوع المناسب لكل حقل لتحسين تجربة المستخدم.

- استخدم النوع المناسب للبيانات المطلوبة
- استفد من Attributes min و max و step
- جرب الأكواد بنفسك عبر الرابط المرفق
