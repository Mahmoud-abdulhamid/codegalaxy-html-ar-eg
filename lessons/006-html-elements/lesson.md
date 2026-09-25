# HTML Elements and Structure

المصدر: https://www.w3schools.com/html/html_elements.asp

## مقدمة عن عناصر HTML

تتكون عناصر HTML من Start Tag والمحتوى ثم End Tag لبناء صفحات الويب.

- تعريف HTML Elements في صفحات الويب
- دور Start Tag و End Tag في تحديد الحدود
- أهمية محتوى العنصر Content داخل الوثيقة

## العناصر المتداخلة Nested Elements

تتكون مستندات HTML من عناصر متداخلة Nested HTML Elements تحتوي عناصر أخرى.

- مفهوم Nested HTML Elements في المستندات
- احتواء العناصر على عناصر فرعية أخرى
- بناء الهيكل الشامل للصفحة بواسطة التداخل

## الكود الأساسي الأول

يبدأ المستند بتعريف DOCTYPE HTML ثم عنصر html الجذري وعنصر body.

```html
<!DOCTYPE html>
<html>
<body>
  <h1>My First Heading</h1>
<p>My first paragraph.</p>
</body>
</html>
```

## شرح أجزاء الكود بالتفصيل

عنصر html هو الجذر، بينما body يحتوى على h1 للعنوان و p للفقرة.

- عنصر html يعتبر Root Element للمستند
- عنصر body يحدد محتوى صفحة الويب
- عنصرا h1 و p لتمييز العناوين والفقرات

## شرح Empty Elements Empty Elements

Empty Elements Empty Elements ليس لها محتوى ولا تحتوي على End Tag مثل br.

```html
<p>This is a <br> paragraph with a line break.</p>
```

## حساسية حالة الحروف Case Sensitivity

Tags في HTML ليست حساسة لحالة الحروف ولكن يفضل استخدام الحروف الصغيرة.

- لغة HTML ليست حساسة لحالة الحروف Case Sensitive
- استخدام <P> يعطي نفس النتيجة مثل <p>
- التوصية البرمجية باعتماد الحروف الصغيرة دائما

## خلاصة الدرس وأفضل الممارسات

خلاصة الدرس: احرص دائما على كتابة End Tag وتنظيم عناصر HTML بشكل سليم.

- تجنب إهمال End Tag لمنع الأخطاء غير المتوقعة
- الالتزام بكتابة أسماء العناصر بأحرف صغيرة
- مراجعة المراجع الشاملة لتطوير مهارات HTML
