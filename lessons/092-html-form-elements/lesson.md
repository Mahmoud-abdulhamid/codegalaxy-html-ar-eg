# HTML Form Elements

المصدر: https://www.w3schools.com/html/html_form_elements.asp

## مقدمة في HTML Form Elements

تعد HTML Form Elements حجر الأساس لبناء نماذج تفاعلية لجمع بيانات المستخدم في صفحات الويب.

- تستخدم النماذج لجمع مدخلات المستخدم
- تتكون من عناصر متنوعة مثل input و select
- تعتبر جزءا حيويا من تفاعل المستخدم مع الموقع

## عناصر input و label

يستخدم العنصر input لجمع البيانات، بينما يربط label النص بالحقل عبر Attribute for و id.

```html
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname">
```

## القوائم المنسدلة مع select

يوفر العنصر select قائمة من الخيارات، ويمكن تخصيصها ب Attributes مثل size و multiple.

```html
<select id="cars" name="cars" size="3">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat" selected>Fiat</option>
</select>
```

## عناصر textarea و button

يستخدم textarea للنصوص متعددة الأسطر، بينما يستخدم button لتنفيذ إجراءات عند النقر.

```html
<textarea name="msg" rows="4" cols="20">
نص افتراضي هنا
</textarea>
<button type="button">Click Me!</button>
```

## تجميع العناصر بـ fieldset

يساعد fieldset في تجميع العناصر ذات الصلة، بينما يضيف legend عنوانا توضيحيا للمجموعة.

```html
<fieldset>
  <legend>معلومات شخصية:</legend>
  <label>الاسم:</label>
  <input type="text">
</fieldset>
```

## عناصر datalist و output

تسهل datalist الإدخال، بينما تعرض output نتائج العمليات الحسابية داخل النموذج.

```html
<input list="browsers">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
</datalist>
```

## خلاصة الدرس

لقد غطينا العناصر الأساسية والمتقدمة للنماذج في HTML. جربوا الأكواد بأنفسكم لتعزيز مهاراتكم.

- استخدم input و label للبيانات الأساسية
- نظم النماذج باستخدام fieldset
- استفد من datalist لتحسين تجربة الإدخال
- راجع دائما HTML Tag Reference للمزيد
