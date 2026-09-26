# عناصر الاقتباس والتوثيق في HTML

المصدر: https://www.w3schools.com/html/html_quotation_elements.asp

## مقدمة عناصر الاقتباس

سنتعرف في هذا الدرس على عناصر HTML المخصصة للاقتباس والتوثيق وإدارة النصوص بدقة.

- دراسة عناصر الاقتباس والتوثيق في HTML
- استخدام blockquote و q للنصوص المقتبسة
- تنظيم البيانات باستخدام abbr و address
- التحكم باتجاه النصوص باستخدام bdo

## استخدام blockquote للاقتباسات الطويلة

يستخدم العنصر blockquote لتحديد قسم مقتبس من مصدر آخر وغالبا ما يتم إزاحته تلقائيا.

```html
<blockquote cite="http://www.site.org">
  For 60 years, WWF has worked
  to help people and nature.
</blockquote>
```

## استخدام q للاقتباسات القصيرة

يحدد العنصر q اقتباسا قصيرا وتقوم المتصفحات عادة بإدراج علامات الاقتباس حوله.

```html
<p>
  Goal: <q>Build a future
  where people live
  in harmony.</q>
</p>
```

## استخدام abbr للاختصارات

يستخدم العنصر abbr للاختصارات مع Attribute title لعرض الوصف عند تحريك الفأرة.

```html
<p>
  The <abbr title="World Health">
  WHO</abbr> was founded.
</p>
```

## استخدام address لمعلومات الاتصال

يخصص العنصر address لمعلومات الاتصال ويتم عرضه بخط مائل مع فواصل أسطر تلقائية.

```html
<address>
  Written by John Doe.<br>
  Visit us at Example.com
</address>
```

## استخدام cite و bdo للتوثيق والاتجاهات

يحدد cite عنوان الأعمال الفنية بينما يغير bdo اتجاه النص بالكامل.

```html
<p><cite>The Scream</cite></p>
<bdo dir="rtl">
  Right to left text
</bdo>
```

## خلاصة الدرس والممارسات البرمجية

خلاصة استخدام عناصر الاقتباس والتوثيق لبناء صفحات ويب دقيقة ومنظمة.

- استخدام blockquote للاقتباسات الطويلة
- توظيف abbr للاختصارات مع title
- تنظيم العناوين بـ cite واتجاهات النص بـ bdo
- تجربة الأكواد البرمجية من الابط في الوصف
