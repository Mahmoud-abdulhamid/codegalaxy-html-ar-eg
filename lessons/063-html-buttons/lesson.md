# HTML Buttons Course

المصدر: https://www.w3schools.com/html/html_buttons.asp

## مقدمة حول الأزرار التفاعلية

مرحبا بكم في درس الأزرار التفاعلية ودورها الحيوي في صفحات الويب.

- تسمح الأزرار للمستخدمين بالتفاعل مع صفحات الويب
- يمكنها إرسال النماذج أو تشغيل أكواد JavaScript
- تعتبر عنصرا أساسيا في بناء واجهات المستخدم

## العنصر الاساسي لإنشاء الأزرار

نستخدم العنصر button لتعريف زر قابل للنقر في صفحة الويب.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <button>Click Me</button>
  </body>
</html>
```

## تنسيق الأزرار باستخدام CSS

يمكن تنسيق الأزرار بسهولة باستخدام CSS لتغيير ألوانها ومظهرها.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <button class="mytestbtn">Green Button</button>
  </body>
</html>
```

## الأزرار المعطلة Disabled Buttons

استخدم attribute المعطل disabled لتعطيل الزر وجعله غير قابل للنقر.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <button disabled>Disabled Button</button>
  </body>
</html>
```

## تشغيل JavaScript مع الأزرار

يمكنك تشغيل أكواد JavaScript عند النقر باستخدام attribute المسماة onclick.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <button onclick="alert('Hello!')">Click Me</button>
  </body>
</html>
```

## أنواع الأزرار المختلفة Button Types

يحدد attribute المسماة type وظيفة الزر، وهناك ثلاثة أنواع رئيسية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <button type="button">Normal</button>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  </body>
</html>
```

## استخدام الأزرار داخل النماذج Forms

تستخدم الأزرار داخل النماذج Forms لتنفيذ عمليات الإرسال وإعادة التعيين.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form action="/action_page.php">
      <input type="text" name="fname">
      <button type="submit">Submit</button>
      <button type="reset">Reset Form</button>
    </form>
  </body>
</html>
```

## خلاصة الدرس وأفضل الممارسات

خلاصة الدرس: تعلم كيفية إنشاء الأزرار وتنسيقها واستخدامها باحترافية.

- قم دائما بتحديد type المناسب لكل زر داخل النماذج
- استخدم CSS لتخصيص مظهر الأزرار لتناسب تصميم موقعك
- تابع معنا الدروس القادمة لاحتراف لغة HTML بالكامل
