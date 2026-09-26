# التعامل مع الصور في HTML

المصدر: https://www.w3schools.com/html/html_images.asp

## مقدمة حول الصور في HTML

تساهم الصور في تحسين تصميم صفحات الويب بشكل كبير.

- الصور تعزز من جاذبية وتصميم صفحات الويب
- يتم استخدام img Tag لإدراج الصور
- الصور لا تدرج فعليا بل يتم ربطها بالصفحة

## بنية عنصر img

يستخدم img Tag لإدراج الصور وهو Empty Element لا يحتاج ل Tag إغلاق.

```html
<img src="url" alt="alternatetext">
```

## شرح Attributes الأساسية

يجب تحديد src للمسار و alt للنص البديل.

```html
<img src="img_chania.jpg" 
alt="Flowers in Chania">
```

## التحكم في أبعاد الصور

استخدام style للتحكم في عرض وارتفاع الصورة.

```html
<img src="img_girl.jpg" 
alt="Girl in a jacket" 
style="width:500px;height:600px;">
```

## الصور الخارجية والمجلدات

يمكن ربط الصور من مجلدات محلية أو خوادم خارجية.

```html
<img src="/images/html5.gif" 
alt="HTML5 Icon">
```

## استخدام الصورة كرابط

وضع img داخل a لإنشاء صورة قابلة للنقر.

```html
<a href="default.asp">
  <img src="smiley.gif" 
  alt="Tutorial">
</a>
```

## محاذاة الصور مع النصوص

استخدام CSS float لمحاذاة الصور بجانب النصوص.

```html
<img src="smiley.gif" 
style="float:right; 
width:42px;height:42px;">
```

## خلاصة الدرس

استخدم الصور بحذر لضمان سرعة تحميل الصفحة.

- استخدم دائما alt Attribute
- حدد أبعاد الصور لضمان استقرار الصفحة
- استخدم style بدلا من attributes الحجم
- احذر من أحجام الصور الكبيرة
