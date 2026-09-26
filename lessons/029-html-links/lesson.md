# تعلم إنشاء الروابط التشعبية باستخدام HTML Links

المصدر: https://www.w3schools.com/html/html_links.asp

## مقدمة عن HTML Links

تعتبر الروابط التشعبية أساسية في صفحات الويب لتسهيل التنقل.

- تتواجد الروابط في جميع صفحات الويب تقريبا
- تسمح Links للمستخدمين بالتنقل بسلاسة
- تتحول مؤشرات الفأرة تلقائيا إلى شكل يد عند المرور فوقها

## الصيغة الأساسية وبنية الروابط

يستخدم a tag لتعريف الرابط مع attribute من نوع href.

```html
<a href="url">
  link text
</a>
```

## مثال عملي على الروابط الخارجية

مثال عملي لإنشاء رابط يوجه المستخدم إلى موقع خارجي.

```html
<a href="https://www.w3schools.com/">
  Visit W3Schools.com!
</a>
```

## التحكم في نافذة العرض عبر target Attribute

يحدد target attribute المكان الذي سيتم فيه فتح المستند المرتبط.

```html
<a href="https://www.w3schools.com/"
   target="_blank">
  Visit W3Schools!
</a>
```

## الفرق بين Absolute URLs وRelative URLs

الفرق بين الروابط المطلقة والروابط النسبية في المواقع.

```html
<h2>Absolute URLs</h2>
<p><a href="https://www.google.com/">Google</a></p>
<h2>Relative URLs</h2>
<p><a href="html_images.asp">HTML Images</a></p>
```

## استخدام الصور والبريد الإلكتروني كروابط

يمكن تحويل الصور أو عناوين البريد الإلكتروني إلى روابط تشعبية فعالة.

```html
<a href="default.asp">
  <img src="smiley.gif" alt="Tutorial" 
       style="width:42px;height:42px;">
</a>
```

## استخدام الأزرار والعناوين التوضيحية Link Titles

استخدام الأزرار مع JavaScript وإضافة عناوين توضيحية باستخدام title.

```html
<button onclick="document.location='default.asp'">
  HTML Tutorial
</button>
<a href="url" title="More info">Link</a>
```

## خلاصة الدرس وأفضل الممارسات البرمجية

ملخص شامل لأهم مهارات التعامل مع HTML Links.

- استخدام a tag وhref attribute للربط الأساسي
- التحكم في النوافذ عبر target attribute
- استخدام Absolute URLs والروابط النسبية Relative URLs
- تضمين الصور والأزرار وتخصيص عناوين العناصر بـ title
