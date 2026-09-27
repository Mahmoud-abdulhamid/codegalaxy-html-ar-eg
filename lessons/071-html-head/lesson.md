# HTML Head Element and Metadata

المصدر: https://www.w3schools.com/html/html_head.asp

## مقدمة حول الـ head

يعتبر الـ head حاوية للمعلومات الوصفية Metadata التي لا تظهر للمستخدم مباشرة في صفحة الويب.

- الـ head حاوية للمعلومات الوصفية
- لا يظهر محتوى الـ head في قسم <body>
- يحتوي على title و style و meta و script

## الهيكل الأساسي للـ head

يجب وضع الـ head بين وسمي <html> و <body>، ويعد الـ title عنصرا إجباريا.

```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
</body>
</html>
```

## أهمية الـ meta tags

تستخدم الـ meta لتحديد ترميز الأحرف، وصف الصفحة، والكلمات المفتاحية لمحركات البحث.

```html
<meta charset="UTF-8">
<meta name="description"
content="Free Web tutorials">
<meta name="keywords"
content="HTML, CSS, JavaScript">
```

## التحكم في الـ viewport

يضمن الـ viewport عرض الموقع بشكل صحيح على مختلف أحجام الشاشات.

```html
<meta name="viewport"
content="width=device-width,
initial-scale=1.0">
```

## إضافة الـ style والـ script

يمكن استخدام style للتنسيق الداخلي، وlink للربط الخارجي، وscript لإضافة JavaScript.

```html
<style>
body {background: blue;}
</style>
<link rel="stylesheet"
href="style.css">
<script>
console.log("Hello");
</script>
```

## استخدام الـ base element

يحدد الـ base الرابط الأساسي لجميع الروابط النسبية في الصفحة.

```html
<head>
<base href="https://w3schools.com/"
target="_blank">
</head>
```

## خلاصة الدرس

تعد عناصر الـ head أساسية لتحسين محركات البحث وتجربة المستخدم.

- الـ head يحوي metadata
- الـ title ضروري للـ SEO
- الـ viewport يضمن التجاوب
- استخدم link و script للربط والتفاعل
