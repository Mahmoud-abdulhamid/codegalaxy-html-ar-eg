# إنشاء زر رفع الملفات File Upload Button باستخدام لغة HTML

المصدر: https://www.w3schools.com/howto/howto_html_file_upload_button.asp

## مقدمة عن زر رفع الملفات في HTML

مرحبا بكم في درس إنشاء زر رفع الملفات File Upload Button باستخدام لغة HTML.

- تعلم إنشاء زر رفع الملفات في صفحات الويب
- استخدام عناصر HTML الأساسية
- بناء نماذج تفاعلية متكاملة

## دور form Element في النماذج

نستخدم form Element كحاوية رئيسية لتجميع بيانات المستخدم وإرسالها إلى الخادم.

- استخدام form Element للحاويات التفاعلية
- تحديد مسار الخادم عبر الخاصية action
- تجميع بيانات المستخدمين بكفاءة عالية

## كتابة الكود الأساسي للنموذج

نبدأ بكتابة form Tag وتحديد مسار action الخاص بمعالجة البيانات.

```html
<form action="/action_page.php">

```

## إضافة input Element لرفع الملفات

نضيف input Element مع type file لإظهار زر اختيار الملفات Choose File.

```html
  <input type="file" id="myFile" 
  name="filename">

```

## إضافة زر الإرسال submit

نضيف input من نوع submit لإرسال الملفات والبيانات إلى الخادم.

```html
  <input type="submit">
</form>
```

## معاينة الكود الكامل لرفع الملفات

الكود الكامل لإنشاء زر رفع الملفات وتصميمه داخل صفحات الويب.

```html
<form action="/action_page.php">
  <input type="file" id="myFile" name="filename">
  <input type="submit">
</form>
```

## خلاصة الدرس وأفضل الممارسات

تعلمنا استخدام input type file مع form لإنشاء زر رفع الملفات بكفاءة.

- استخدام type file لإنشاء زر رفع الملفات
- ربط النماذج بخطوات الإرسال submit
- تجربة الأكواد بأنفسكم لتطوير المهارات
