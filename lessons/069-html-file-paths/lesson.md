# HTML File Paths - مسارات الملفات في HTML

المصدر: https://www.w3schools.com/html/html_filepaths.asp

## مقدمة في مسارات الملفات File Paths

تحدد مسارات File Paths موقع الملفات داخل المجلدات في موقع الويب.

- تحدد File Paths موقع الملف داخل المجلدات
- تستخدم للربط مع الصور والملفات الخارجية
- تنقسم إلى Absolute Paths و Relative Paths

## المسارات المطلقة Absolute File Paths

يمثل Absolute File Path الرابط الكامل URL للملف على الإنترنت.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <img src="https://example.com/pic.jpg" alt="Mountain">
  </body>
</html>
```

## المسار النسبي من الجذر Root

تبدأ الشرطة المائلة / البحث عن الملف من جذر الموقع الرئيسي Root.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <img src="/images/picture.jpg" alt="Mountain">
  </body>
</html>
```

## المسار النسبي من المجلد الحالي Current Folder

كتابة اسم المجلد مباشرة يبحث عن الملف داخل المجلد الحالي.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <img src="images/picture.jpg" alt="Mountain">
  </body>
</html>
```

## المسار النسبي للمجلد الأعلى Parent Folder

تستخدم .. للصعود مستوى واحدا للأعلى في هيكل المجلدات.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <img src="../images/picture.jpg" alt="Mountain">
  </body>
</html>
```

## معاينة نتيجة عرض الصور بالأكواد

تظهر الصورة بالشكل المطلوب عند كتابة المسار بشكل صحيح.

## أفضل الممارسات البرمجية Best Practices

تفضل Relative File Paths لضمان عمل الرابط في أي خادم أو مسار مستقبلي.

- استخدم Relative Paths قدر الإمكان
- تجنب ربط الملفات المحلية بـ Absolute Paths
- تضمن عمل الصفحة على localhost وعلى الخوادم الحقيقية

## ملخص درس مسارات الملفات

تعلمنا كيفية تحديد مسارات الملفات المطلقة والنسبية في HTML.
