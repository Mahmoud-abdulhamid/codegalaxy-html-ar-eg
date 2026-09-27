# HTML Input Types Comprehensive Guide

المصدر: https://www.w3schools.com/html/html_form_input_types.asp

## مقدمة حول HTML input element

سنتعرف اليوم على العنصر input وأنواعه المختلفة التي تساعدنا في بناء نماذج الويب التفاعلية.

- العنصر input هو الوسيلة الأساسية لجمع بيانات المستخدم
- يتم تحديد نوع الحقل باستخدام Attribute type
- القيمة الافتراضية للسمة type هي text

## أنواع الحقول النصية وكلمات المرور

استخدام النوع text للنصوص والنوع password لحقول كلمات المرور.

```html
<form>
  <label for="user">User:</label>
  <input type="text" id="user">
  <label for="pwd">Pass:</label>
  <input type="password" id="pwd">
</form>
```

## أزرار الإرسال وإعادة التعيين

استخدام النوع submit للإرسال والنوع reset لإعادة تعيين النموذج.

```html
<form action="/submit">
  <input type="submit" value="Send">
  <input type="reset" value="Clear">
</form>
```

## الاختيارات المتعددة و Radio buttons

الفرق بين radio للاختيار الفردي و checkbox للاختيارات المتعددة.

```html
<input type="radio" name="opt">
<label>Option 1</label>
<input type="checkbox" name="box">
<label>Option 2</label>
```

## التعامل مع الأرقام والمدى

استخدام النوع number و range لضبط المدخلات الرقمية.

```html
<input type="number" min="1" max="5">
<input type="range" min="0" max="100">
```

## أنواع متقدمة مثل التاريخ واللون

استخدام الأنواع المتقدمة مثل date و color و email.

```html
<input type="date">
<input type="color">
<input type="email">
```

## خلاصة الدرس

خلاصة: اختر النوع المناسب لكل حقل لتحسين تجربة المستخدم.

- استخدم النوع المناسب للبيانات المطلوبة
- استفد من Attributes min و max و step
- جرب الأكواد بنفسك عبر الرابط المرفق
