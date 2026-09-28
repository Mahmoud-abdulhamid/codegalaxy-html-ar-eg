# HTML Input Attributes

المصدر: https://www.w3schools.com/html/html_form_attributes.asp

## مقدمة خصائص input في HTML

سنتعرف اليوم بالتفصيل على مختلف Attributes الخاصة بعنصر input في لغة HTML.

- تستخدم لغة HTML عناصر Form متقدمة
- نضيف خصائص متنوعة لعنصر input
- نتحكم في سلوك المدخلات بدقة تامة

## خاصية القيمة الابتدائية value

خاصية value تحدد قيمة ابتدائية لحقل الإدخال لتعرض بشكل افتراضي للمستخدم.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form>
      <label for="fname">
        First name:
      </label><br>
      <input type="text"
      id="fname"
      name="fname"
      value="John">
    </form>
  </body>
</html>
```

## خاصية القراءة فقط readonly

خاصية readonly تجعل حقل الإدخال للقراءة فقط، وسيتم إرسال قيمته عند إرسال النموذج.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form>
      <input type="text"
      id="fname"
      name="fname"
      value="John"
      readonly>
    </form>
  </body>
</html>
```

## خاصية التعطيل disabled

خاصية disabled تعطل حقل الإدخال تماما ولن يتم إرسال قيمته عند تقديم النموذج.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form>
      <input type="text"
      id="fname"
      name="fname"
      value="John"
      disabled>
    </form>
  </body>
</html>
```

## خصائص الحجم والطول الأقصى

نستخدم size لتحديد العرض المرئي و maxlength لتقييد عدد الحروف المدخلة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form>
      <input type="text"
      id="pin"
      name="pin"
      size="4"
      maxlength="4">
    </form>
  </body>
</html>
```

## خصائص النطاق والأرقام

تحدد min و max و step النطاق القانوني والقيم المسموحة للأرقام والتواريخ.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form>
      <input type="number"
      id="quantity"
      name="quantity"
      min="1"
      max="5"
      step="1">
    </form>
  </body>
</html>
```

## التحقق والأنماط الإلزامية

خاصية required تجعل الحقل إجباريا، و pattern تتحقق من تطابق النمط البرمجي.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form>
      <input type="text"
      id="code"
      name="code"
      pattern="[A-Za-z]{3}"
      required>
    </form>
  </body>
</html>
```

## خلاصة الدرس وأفضل الممارسات

تعرفنا على أهم خصائص إدخال HTML لبناء نماذج ويب احترافية وفعالة.

- استخدام placeholder لتوجيه المستخدم
- تفعيل autofocus للتركيز التلقائي
- تفعيل autocomplete لتوقع القيم
