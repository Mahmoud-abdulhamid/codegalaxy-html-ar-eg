# HTML Drag and Drop API

المصدر: https://www.w3schools.com/html/html5_draganddrop.asp

## مقدمة حول Drag and Drop API

مقدمة حول تقنية Drag and Drop API في HTML.

- تقنية Drag and Drop تتيح سحب العناصر وإفلاتها
- تعتبر ميزة تفاعلية شائعة في تطبيقات الويب
- تعتمد على أحداث JavaScript مدمجة في HTML5

## جعل العناصر قابلة للسحب

استخدام Attribute draggable لجعل العناصر قابلة للسحب.

```html
<img id="img1" draggable="true">
<p id="p1" draggable="true">
  Draggable text
</p>
```

## الحدث ondragstart و setData

شرح كيفية تحديد البيانات عند بدء السحب.

```javascript
function dragstartHandler(ev) {
  ev.dataTransfer.setData(
    "text", 
    ev.target.id
  );
}
```

## الحدث ondragover ومنع السلوك الافتراضي

استخدام ondragover للسماح بعملية الإفلات.

```javascript
function dragoverHandler(ev) {
  ev.preventDefault();
}
```

## الحدث ondrop وإتمام العملية

إتمام عملية الإفلات باستخدام ondrop.

```javascript
function dropHandler(ev) {
  ev.preventDefault();
  const data = 
    ev.dataTransfer.getData("text");
  ev.target.appendChild(
    document.getElementById(data)
  );
}
```

## خلاصة الدرس

خلاصة حول استخدام Drag and Drop API.

- استخدام draggable لتمكين السحب
- استخدام setData لتخزين معرف العنصر
- استخدام preventDefault للسماح بالإفلات
- استخدام appendChild لنقل العنصر
