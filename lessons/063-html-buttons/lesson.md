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
<button>Click Me</button>
```

## تنسيق الأزرار باستخدام CSS

يمكن تنسيق الأزرار بسهولة باستخدام CSS لتغيير ألوانها ومظهرها.

```html
<button class="mytestbtn">
  Green Button
</button>
```

## الأزرار المعطلة Disabled Buttons

استخدم attribute المعطل disabled لتعطيل الزر وجعله غير قابل للنقر.

```html
<button disabled>
  Disabled Button
</button>
```

## تشغيل JavaScript مع الأزرار

يمكنك تشغيل أكواد JavaScript عند النقر باستخدام attribute المسماة onclick.

```html
<button onclick="alert('Hello!')">
  Click Me
</button>
```

## أنواع الأزرار المختلفة Button Types

يحدد attribute المسماة type وظيفة الزر، وهناك ثلاثة أنواع رئيسية.

```html
<button type="button">Normal</button>
<button type="submit">Submit</button>
<button type="reset">Reset</button>
```

## استخدام الأزرار داخل النماذج Forms

تستخدم الأزرار داخل النماذج Forms لتنفيذ عمليات الإرسال وإعادة التعيين.

```html
<form action="/action_page.php">
  <input type="text" name="fname">
  <button type="submit">Submit</button>
  <button type="reset">Reset Form</button>
</form>
```

## خلاصة الدرس وأفضل الممارسات

خلاصة الدرس: تعلم كيفية إنشاء الأزرار وتنسيقها واستخدامها باحترافية.

- قم دائما بتحديد type المناسب لكل زر داخل النماذج
- استخدم CSS لتخصيص مظهر الأزرار لتناسب تصميم موقعك
- تابع معنا الدروس القادمة لاحتراف لغة HTML بالكامل
