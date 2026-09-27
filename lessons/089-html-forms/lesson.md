# HTML Forms and Input Elements

المصدر: https://www.w3schools.com/html/html_forms.asp

## مقدمة عن HTML Forms

مرحبا بكم في هذا الدرس من دورة HTML. سنتعرف اليوم على كيفية إنشاء HTML Forms لجمع مدخلات المستخدمين وإرسالها إلى Server.

- تستخدم HTML Forms لجمع مدخلات المستخدمين
- ترسل البيانات عادة إلى Server للمعالجة
- تتكون الاستمارة من عناصر إدخال متعددة
- تعتبر من أهم عناصر التفاعل في صفحات الويب

## عنصر <form> وعنصر <input>

تعتبر Form Element الحاوية الأساسية لجميع عناصر الإدخال، ونستخدم Tag input لتحديد نوع المدخلات عبر Attribute type.

```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname">
</form>
```

## حقول النصوص وعنصر <label>

نستخدم input مع type يساوي text لحقول النصوص، وربط label بواسطة Attribute for مع id يسهل الاستخدام للقارئات الصوتية.

```html
<form>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```

## أزرار الاختيار الأحادية Radio Buttons

نستخدم input مع type يساوي radio لاختيار خيار واحد فقط، ويجب استخدام نفس Attribute name لجميع الخيارات المرتبطة.

```html
<form>
  <input type="radio" id="html"
         name="fav" value="HTML">
  <label for="html">HTML</label>
</form>
```

## مربعات الاختيار المتعدد Checkboxes

تتيح Checkboxes للمستخدم اختيار عدة خيارات أو عدم اختيار أي منها باستخدام type يساوي checkbox.

```html
<form>
  <input type="checkbox" id="v1"
         name="vehicle" value="Car">
  <label for="v1">I have a car</label>
</form>
```

## زر الإرسال Submit Button و Attribute action

يستخدم Submit Button لإرسال بيانات النموذج، ويحدد Attribute action اسم الملف المعالج للبيانات على Server.

```html
<form action="/action_page.php">
  <input type="text" id="fname"
         name="fname" value="John"><br>
  <input type="submit" value="Submit">
</form>
```

## أهمية Attribute name ومعاينة الشكل

بدون Attribute name لن يتم إرسال قيمة حقل الإدخال إلى Server إطلاقا عند إرسال النموذج.

## ملخص الدرس وأفضل الممارسات

في ختام الدرس تعلمنا كيفية بناء HTML Forms واستخدام عناصر label و input وأنوعها المختلفة.

- تضمين عناصر الإدخال دائما داخل <form>
- ربط <label> مع <input> عبر Attribute for و id
- تحديد Attribute name لكل حقل إدخال لإرسال البيانات
- اختيار type المناسب مثل text و radio و checkbox
