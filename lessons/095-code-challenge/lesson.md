# HTML Input Types and Login Forms

المصدر: https://www.w3schools.com/html/html_challenges_input_types.asp

## مقدمة حول نماذج الويب

مرحبا بكم في درس بناء نماذج تسجيل الدخول باستخدام HTML5.

- بناء نماذج تسجيل الدخول باستخدام HTML
- استخدام أنواع input المتنوعة
- تحسين تفاعل المستخدم مع صفحات الويب

## المفاهيم الأساسية للنماذج

تعتمد النماذج على عنصر form وعناصر input المتنوعة.

- عنصر form هو الحاوية الأساسية للنماذج
- عنصر input هو المسؤول عن استقبال بيانات المستخدم
- Attribute type تحدد طبيعة البيانات المدخلة
- استخدام password لإخفاء النصوص الحساسة

## كتابة هيكل النموذج

هيكل بسيط لنموذج تسجيل دخول باستخدام HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form>
      <label>Username:</label>
      <input type="text">
      <label>Password:</label>
      <input type="password">
    </form>
  </body>
</html>
```

## إضافة زر الإرسال

إضافة زر الإرسال باستخدام input من نوع submit.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form>
      <input type="text">
      <input type="password">
      <input type="submit" value="Login">
    </form>
  </body>
</html>
```

## أفضل الممارسات

استخدام Attribute name ضروري لتعريف البيانات في السيرفر.

- استخدام Attribute name لكل حقل إدخال
- توفير تجربة مستخدم واضحة ومنظمة
- التحقق من صحة البيانات قبل الإرسال
- استخدام label لربط النصوص بحقول الإدخال

## خاتمة الدرس

جربوا الأكواد بأنفسكم وطوروا مهاراتكم في HTML.

- راجعوا الرابط في الوصف للتطبيق العملي
- جربوا أنواع input إضافية مثل email
- استمروا في ممارسة كتابة الأكواد يوميا
