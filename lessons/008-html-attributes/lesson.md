# HTML Attributes

المصدر: https://www.w3schools.com/html/html_attributes.asp

## مقدمة Attributes

تعلم كيفية استخدام HTML attributes لتوفير معلومات إضافية عن Elements.

- تستخدم HTML attributes لتوفير معلومات إضافية عن Elements
- تكتب دائما داخل Start Tag للعنصر
- تتكون عادة من name و value مثل name="value"

## شرح The href Attribute

تحديد الروابط باستخدام a tag و href attribute.

```html
<a href="https://www.w3schools.com">
  Visit W3Schools
</a>
```

## شرح The src Attribute

استخدام img tag مع src attribute لعرض الصور.

```html
<img src="img_girl.jpg">
<img src="/images/img_girl.jpg">
```

## شرح Width, Height and Alt Attributes

تحديد الأبعاد باستخدام width و height والنص البديل عبر alt attribute.

```html
<img src="img_girl.jpg"
     width="500"
     height="600"
     alt="Girl with a jacket">
```

## شرح The style and lang Attributes

تطبيق التنسيق عبر style وتحديد لغة الصفحة عبر lang attribute.

```html
<html lang="en">
<body>
  <p style="color:red;">
    This is a red paragraph.
  </p>
</body>
</html>
```

## شرح The title Attribute

عرض معلومات إضافية كرمز توضيحي Tooltip باستخدام title attribute.

```html
<p title="I'm a tooltip">
  This is a paragraph.
</p>
```

## شرح Best Practices for Attributes

أفضل الممارسات: استخدام الحروف الصغيرة وإحاطة القيم بعلامات التنصيص.

- توصي W3C دائما باستخدام الحروف الصغيرة لأسماء Attributes
- يجب دائما إحاطة قيم Attributes بعلامات تنصيص Quotes
- استخدام علامات التنصيص المفردة أو المزدوجة عند احتواء القيمة على علامات أخرى

## خلاصة الدرس

خلاصة شاملة لمهارات استخدام Attributes في لغة HTML.

- Attributes تمنح Elements مرونة وقدرات وظيفية متقدمة
- استخدام المسارات النسبية يمنع انكسار الروابط عند تغيير النطاق
- الالتزام بالمعايير القياسية يضمن توافقية عالية مع جميع المتصفحات
