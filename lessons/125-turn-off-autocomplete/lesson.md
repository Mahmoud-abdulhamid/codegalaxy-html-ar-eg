# التحكم في خاصية Autocomplete في HTML

المصدر: https://www.w3schools.com/howto/howto_html_autocomplete_off.asp

## مقدمة حول Autocomplete

مرحبا بكم في درس التحكم في خاصية autocomplete في HTML.

- خاصية autocomplete توفر اقتراحات تلقائية
- المتصفحات تقوم بتخزين البيانات المدخلة سابقا
- أحيانا نحتاج لتعطيل هذه الميزة لأسباب أمنية
- التحكم يتم عبر Attribute بسيط في HTML

## مفهوم خاصية Autocomplete

تعمل خاصية autocomplete على التحكم في اقتراحات المتصفح.

- القيمة الافتراضية هي on
- القيمة off تقوم بتعطيل الميزة تماما
- تستخدم مع عناصر input و form
- تساعد في حماية خصوصية بيانات المستخدم

## تعطيل Autocomplete لحقل واحد

استخدام autocomplete مع عنصر input.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <input type="text" autocomplete="off">
  </body>
</html>
```

## تعطيل Autocomplete للنموذج بالكامل

تعطيل autocomplete على مستوى النموذج.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form autocomplete="off">
      <!-- الحقول هنا -->
    </form>
  </body>
</html>
```

## أفضل الممارسات

استخدم autocomplete بحكمة لتعزيز تجربة المستخدم والأمان.

- استخدم off للبيانات الحساسة
- اتركها on للبيانات العامة لتسهيل الإدخال
- اختبر دائما سلوك المتصفح في Chrome و Edge
- راجع توثيق HTML Forms لمزيد من التفاصيل

## خاتمة الدرس

شكرا لمتابعتكم، جربوا الأكواد بأنفسكم عبر الرابط.

- تعلمنا تعطيل autocomplete
- طبقنا الخاصية على input و form
- فهمنا أهمية الأمان في نماذج الويب
- استمروا في الممارسة والتعلم
