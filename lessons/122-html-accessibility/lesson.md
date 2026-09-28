# HTML Accessibility Principles

المصدر: https://www.w3schools.com/html/html_accessibility.asp

## مقدمة في HTML Accessibility

مرحبا بكم في درس HTML Accessibility. كتابة كود يسهل الوصول إليه هي مهارة أساسية لكل مطور ويب محترف.

- أهمية Accessibility في صفحات الويب
- تحسين تجربة المستخدم عبر كود نظيف
- دعم أدوات قراءة الشاشة Screen Readers

## مفهوم Semantic HTML

استخدام Semantic HTML يعني اختيار العناصر الصحيحة لوظائفها، مما يحسن من تجربة التنقل عبر لوحة المفاتيح.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <button>Report an Error</button>
    <div>Report an Error</div>
  </body>
</html>
```

## أهمية Headings

تستخدم Headings من h1 إلى h6 لتنظيم هيكل الصفحة، وليس لتنسيق الخط.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>Main Heading</h1>
    <h2>Sub Heading</h2>
    <h3>Section Heading</h3>
  </body>
</html>
```

## استخدام alt Attribute

يوفر alt attribute نصا بديلا يصف الصورة في حال تعذر عرضها أو للمستخدمين الذين يعتمدون على قارئات الشاشة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <img src="photo.jpg" alt="A city street">
  </body>
</html>
```

## تحديد اللغة lang Attribute

يساعد تحديد اللغة عبر lang attribute المتصفحات ومحركات البحث على معالجة محتوى الصفحة بشكل أفضل.

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    ...
  </body>
</html>
```

## نصوص الروابط الواضحة

نصوص الروابط يجب أن تكون وصفية وواضحة لتوضيح وجهة الرابط للمستخدم.

- تجنب: Click here
- استخدم: Find out more about HTML
- استخدم: Read more about healthy eating

## خلاصة الدرس

الوصولية ضرورة وليست خيارا. استخدم العناصر الدلالية ونظم العناوين لضمان تجربة ويب شاملة.

- استخدم Semantic HTML
- نظم العناوين بشكل هرمي
- أضف نصوصا بديلة للصور
- حدد لغة الصفحة دائما
