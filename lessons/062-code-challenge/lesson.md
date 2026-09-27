# Understanding the HTML id Attribute

المصدر: https://www.w3schools.com/html/html_challenges_id.asp

## شرح Introduction to the id Attribute

مرحبا بكم في درس جديد حول استخدام id Attribute في لغة HTML لتحديد عناصر الصفحة بشكل فريد.

- الـ id Attribute يمنح هوية فريدة للعنصر
- يستخدم لربط CSS و JavaScript بالعنصر
- يسمح بإنشاء روابط داخلية أو Bookmarks

## شرح Core Concepts of id

يجب أن يكون id Attribute فريدا لكل عنصر داخل صفحة الويب لضمان عمل الأكواد بشكل صحيح.

- قاعدة ذهبية: لا تكرر نفس الـ id في الصفحة
- يجب أن يبدأ الـ id بحرف أو شرطة سفلية
- حساس لحالة الأحرف Case-sensitive

## شرح Implementing id in HTML

تطبيق عملي لإضافة id Attribute إلى عناصر h1 و p داخل كود HTML.

```html
<h1 id="main-title">Welcome</h1>
<p id="intro-text">
  This is a paragraph.
</p>
```

## شرح Creating Bookmarks

استخدام id لإنشاء روابط تنقل داخلية تسمى Bookmarks في صفحة الويب.

```html
<a href="#main-title">
  Go to Title
</a>
<h1 id="main-title">
  Main Title
</h1>
```

## شرح Best Practices

أفضل الممارسات: استخدم أسماء واضحة للـ id وتجنب المسافات بين الكلمات.

- استخدم أسماء ذات دلالة مثل header-section
- لا تستخدم مسافات داخل قيمة الـ id
- استخدم الحروف الصغيرة دائما للتنظيم

## شرح Conclusion

خلاصة الدرس: الـ id Attribute أداة أساسية لتنظيم وتحديد العناصر، جرب الأكواد بنفسك الآن.

- الـ id هو مفتاحك للتحكم الدقيق في العناصر
- يسمح بالتنقل السريع داخل الصفحة
- مارس التحديات البرمجية لتعزيز فهمك
