# How TO - Include HTML

المصدر: https://www.w3schools.com/howto/howto_html_include.asp

## شرح Introduction to HTML Includes

سنتعلم اليوم كيفية تضمين ملفات HTML داخل بعضها البعض لتسهيل بناء صفحات الويب وإعادة استخدام الأكواد بشكل فعال.

- مفهوم Include HTML snippets in other HTML files
- مفهوم Promote code reusability and clean structure
- مفهوم Create modular web components easily

## شرح Creating the HTML Snippet

نقوم بحفظ الأكواد التي نريد تضمينها في ملف منفصل مثل content.html يحتوي على روابط متنوعة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <a href="maps.html">Google Maps</a><br>
      <a href="buttons.html">Buttons</a><br>
        <a href="modals.html">Modals</a><br>
        </body>
      </html>
```

## شرح Using the Custom Attribute

لتضمين هذا الملف في صفحتنا الرئيسية، نستخدم div Element مع إضافة Attribute خاص يسمى w3-include-html.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div w3-include-html="content.html"></div>
  </body>
</html>
```

## شرح JavaScript Include Function - Part 1

نستخدم لغة JavaScript لكتابة دالة includeHTML التي تبحث عن الـ Attribute المخصص في جميع عناصر الصفحة.

```javascript
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      // Request will be handled next
```

## شرح JavaScript Include Function - Part 2

ترسل الدالة طلب XMLHttpRequest لجلب محتوى الملف، ثم تستبدل المحتوى الداخلي للعنصر بالملف المطلوب.

```javascript
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4) {
    if (this.status == 200) {
      elmnt.innerHTML = this.responseText;
    }
    elmnt.removeAttribute("w3-include-html");
    includeHTML();
  }
};
```

## شرح Calling the Function

نقوم باستدعاء الدالة includeHTML في نهاية الصفحة الرئيسية داخل script Tag لتعمل تلقائيا.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <script>
      includeHTML();
    </script>
  </body>
</html>
```

## شرح Including Multiple Snippets

يمكننا تضمين أي عدد من ملفات HTML في نفس الصفحة بكل سهولة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div w3-include-html="h1.html"></div>
    <div w3-include-html="content.html"></div>
  </body>
</html>
```

## شرح Summary & Best Practices

تعتبر هذه الطريقة ممتازة لتقسيم المشروع إلى أجزاء صغيرة ومرنة. جربوا كتابة الأكواد بأنفسكم واطرحوا أسئلتكم في التعليقات.

- مفهوم Divide projects into small, manageable files
- مفهوم Use w3-include-html attribute for inclusion
- مفهوم Run on a local server to avoid CORS issues
