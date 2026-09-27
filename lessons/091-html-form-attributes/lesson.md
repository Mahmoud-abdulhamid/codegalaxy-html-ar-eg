# HTML Form Attributes

المصدر: https://www.w3schools.com/html/html_forms_attributes.asp

## مقدمة إلى HTML Form Attributes

مرحبا بكم يا أصدقائي في هذا الدرس الجديد من دورة لغة HTML. سنتعرف اليوم بالتفصيل على Attributes الخاصة بعنصر form، وكيف تحدد كيفية إرسال البيانات وتعامل Web Browser معها.

- action: تحديد وجهة إرسال البيانات
- target: مكان عرض الاستجابة
- method: طريقة إرسال طلب HTTP
- autocomplete: تفعيل الإكمال التلقائي
- novalidate: إلغاء فحص المدخلات

## استخدام Attribute action

يحدد Attribute action الملف أو المسار الذي ترسل إليه بيانات النموذج عند الضغط على زر Submit. وفي حالة عدم كتابته، سيتم إرسال البيانات تلقائيا إلى الصفحة الحالية نفسها.

```html
<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname"
         name="fname" value="John">
  <input type="submit" value="Submit">
</form>
```

## معاينة نموذج HTML في المتصفح

لاحظوا معي في هذه المعاينة المرئية كيف يظهر النموذج في الشاشة. عندما يقوم المستخدم بملء حقول الإدخال والضغط على Submit، تبعث البيانات إلى action_page.php لتعالجها برمجيات Server.

## تحديد وجهة الاستجابة باستخدام target

يحدد Attribute target مكان عرض استجابة الخادم القادمة بعد إرسال البيانات. القيمة _blank تؤدي إلى فتح النتيجة في Tab جديد، بينما القيمة الافتراضية _self تعرض في النافذة الحالية نفسها.

```html
<form action="/action_page.php"
      target="_blank">
  <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>
```

## طريقة إرسال البيانات باستخدام method

يحدد Attribute method أسلوب إرسال البيانات عبر بروتوكول HTTP. يرسل GET البيانات كـ URL Variables، بينما يستخدم POST لإرسال البيانات في Body الشيء الذي يجعله أكثر أمانا للمعلومات الشخصية.

## الإكمال التلقائي بواسطة autocomplete

يتيح Attribute autocomplete لـ Web Browser إكمال القيم تلقائيا بناء على بيانات سابقة أدخلها المستخدم. يمكن ضبط القيمة على on للتفعيل أو off لإلغاء هذه الميزة التلقائية.

```html
<form action="/action_page.php"
      autocomplete="on">
  <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>
```

## إلغاء التحقق عبر novalidate

يعتبر Attribute novalidate من نوع Boolean Attribute. عند إضافته إلى Element form، يقوم المتصفح بإرسال بيانات النموذج مباشرة دون إجراء أي عملية Validation أو فحص للحقول المدخلة.

```html
<form action="/action_page.php"
      novalidate>
  <input type="email" name="email">
  <input type="submit" value="Submit">
</form>
```

## خلاصة الدرس وأفضل الممارسات

ختاما، توفر لكم Attributes الخاصة بـ form تحكما كاملا في كيفية إرسال البيانات وتأمينها. أدعوكم لتجربة هذه الأكواد عبر الرابط في الوصف، ونلتقي في الدرس القادم!

- استخدم action لتحديد وجهة إرسال بيانات Form
- اعتمد دائما على POST مع البيانات الحساسة
- تحكم بوضوح في الإكمال التلقائي باستخدام autocomplete
- استخدم novalidate عند الحاجة لإلغاء فحص المتصفح
