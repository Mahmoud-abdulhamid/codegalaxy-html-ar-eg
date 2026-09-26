# HTML Image Maps

المصدر: https://www.w3schools.com/html/html_images_imagemap.asp

## مقدمة عن Image Maps

تتيح لك HTML Image Maps إنشاء مناطق قابلة للنقر داخل الصورة الواحدة.

- تستخدم Image Maps لتقسيم الصورة إلى أجزاء
- كل جزء يمثل رابطا مستقلا بذاته
- نحتاج إلى عنصر الصورة وعناصر الخريطة المرتبطة بها

## استخدام Tag img مع usemap

نستخدم Tag <img> مع خاصية usemap لربط الصورة بالخريطة المستهدفة.

```html
<img src="workplace.jpg"
     alt="Workplace"
     usemap="#workmap">
```

## إنشاء عنصر map

نربط الخريطة بالصورة عبر الخاصية name التي تطابق قيمة usemap.

```html
<map name="workmap">
  <!-- المناطق تحدد هنا -->
</map>
```

## تحديد مناطق النقر المستطيلة rect

نستخدم شكل rect لتحديد منطقة مستطيلة بإحداثيات x و y.

```html
<area shape="rect"
      coords="34,44,270,350"
      href="computer.htm"
      alt="Computer">
```

## تحديد مناطق النقر الدائرية circle

نستخدم شكل circle لتحديد مركز الدائرة ونصف قطرها.

```html
<area shape="circle"
      coords="337,300,44"
      href="coffee.htm"
      alt="Coffee">
```

## تحديد الأشكال المعقدة shape poly

نستخدم shape poly لإنشاء مضلعات هندسية بأضلاع متعددة.

```html
<area shape="poly"
      coords="140,121,181,116,
      204,160,204,222"
      href="croissant.htm">
```

## ربط Image Maps مع JavaScript

يمكننا تفعيل وظائف JavaScript عند النقر على منطقة معينة.

```html
<area shape="circle"
      coords="337,300,44"
      href="coffee.htm"
      onclick="myFunction()">
```

## خلاصة الدرس

تعلمنا كيفية بناء خرائط الصور المتقدمة وتحديد مناطق النقر التفاعلية بدقة.

- استخدام usemap لربط الصورة بالخريطة
- تحديد الأشكال بـ rect و circle و poly
- إمكانية دمج JavaScript مع الحدث onclick
- تجربة الأكواد بشكل عملي عبر الروابط في الوصف
