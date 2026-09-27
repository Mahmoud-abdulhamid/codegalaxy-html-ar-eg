# HTML Form Elements Challenge

المصدر: https://www.w3schools.com/html/html_challenges_form_elements.asp

## مقدمة في عناصر النماذج

مرحبا بكم في درس جديد من دورة HTML. اليوم سنتقن التعامل مع Form Elements لجمع بيانات المستخدم.

- تعتبر النماذج جزءا حيويا في صفحات الويب
- تسمح Form Elements للمستخدمين بالتفاعل مع الموقع
- سنتعلم اليوم كيفية بناء Dropdown و Textarea

## عنصر القائمة المنسدلة

نستخدم select لإنشاء قائمة منسدلة، ونضع بداخلها عناصر option لتحديد الخيارات المتاحة للمستخدم.

```html
<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
</select>
```

## عنصر مساحة النص

يستخدم عنصر textarea للسماح للمستخدم بإدخال نصوص طويلة ومتعددة الأسطر داخل النموذج.

```html
<textarea name="message" rows="4" cols="50">
اكتب رسالتك هنا...
</textarea>
```

## هيكلة النموذج الكامل

يجب وضع جميع عناصر الإدخال داخل Tag form لضمان إرسال البيانات بشكل صحيح إلى السيرفر.

```html
<form action="/submit">
  <select>...</select>
  <textarea>...</textarea>
  <input type="submit">
</form>
```

## أفضل الممارسات

استخدم دائما Attribute باسم name لكل عنصر، وحدد أبعاد textarea لضمان تجربة مستخدم ممتازة.

- استخدم name لكل عنصر في النموذج
- حدد rows و cols لعنصر textarea
- تأكد من إغلاق جميع Tags بشكل صحيح
- استخدم label لتحسين إمكانية الوصول

## خاتمة وتحدي

قم بزيارة الرابط في الوصف لتجربة التحدي البرمجي بنفسك. شكرا لمتابعتكم وإلى اللقاء في درس قادم.

- راجع التحدي البرمجي في الرابط
- طبق الأكواد بنفسك في المتصفح
- استمر في ممارسة HTML يوميا
