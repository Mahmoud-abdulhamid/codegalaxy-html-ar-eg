# HTML Unordered Lists and Custom Markers

المصدر: https://www.w3schools.com/html/html_lists_unordered.asp

## مقدمة القوائم غير المرتبة

تعرف على كيفية إنشاء القوائم غير المرتبة باستخدام عناصر HTML الأساسية.

- استخدام عنصر ul لتعريف القائمة غير المرتبة
- استخدام عنصر li لتعريف كل عنصر داخل القائمة
- عرض النقاط السوداء الصغيرة بشكل افتراضي

## كتابة هيكل القائمة الأساسي

يبدأ هيكل القائمة ب Tag ul ويحتوي على عناصر li المتعددة.

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

## تخصيص أشكال الأيقونات بـ CSS

استخدام خاصية list-style-type لتغيير شكل الرموز بجانب العناصر.

```html
<ul style="list-style-type:circle;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

## إنشاء القوائم المتداخلة Nested Lists

يمكن تضمين قائمة داخلية بالكامل داخل عنصر li فرعي.

```html
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
```

```text
• Coffee
• Tea
  - Black tea
  - Green tea
• Milk
```

## بناء القوائم الأفقية للتنقل

تنسيق القوائم أفقيا لإنشاء شريط التنقل العلوي للمواقع.

```html
<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
```

## معاينة النتيجة المرئية للموقع

معاينة شكل شريط التنقل الأفقي بعد تطبيق التنسيقات.

## خلاصة الدرس وأفضل الممارسات

خلاصة شاملة لمفاهيم القوائم غير المرتبة وتطبيقاتها.

- إتقان استخدام ul و li في هيكلة البيانات
- التحكم الكامل بأشكال Markers عبر CSS
- بناء قوائم تنقل أفقية متقدمة وفعالة
