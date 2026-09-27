# HTML SVG Graphics

المصدر: https://www.w3schools.com/html/html5_svg.asp

## شرح Introduction to SVG

سنتعرف اليوم على تقنية SVG لرسم الرسومات المتجهة ثنائية الأبعاد داخل صفحات HTML.

- مفهوم SVG stands for Scalable Vector Graphics
- مفهوم Defines vector-based graphics in XML
- مفهوم Directly embedded in HTML pages
- مفهوم Supported by all major browsers

## شرح The <svg> Element and Circle

يعتبر عنصر <svg> حاوية للرسومات. نستخدم عنصر <circle> لرسم دائرة وتحديد خصائصها.

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40"
    stroke="green" stroke-width="4"
    fill="yellow" />
</svg>
```

## شرح Circle Output

تظهر الدائرة على المتصفح بدقة عالية وألوان زاهية دون الحاجة لصور خارجية.

## شرح Drawing Rectangles

لرسم مستطيل، نستخدم عنصر <rect> ونحدد نقطة البداية والعرض والارتفاع والألوان.

```html
<svg width="400" height="120">
  <rect x="10" y="10"
    width="200" height="100"
    stroke="red" stroke-width="6"
    fill="blue" />
</svg>
```

## شرح Rounded Rectangles

يمكن جعل حواف المستطيل دائرية باستخدام الخصائص rx و ry لتحديد انحناء الزوايا.

```html
<svg width="400" height="180">
  <rect x="50" y="20"
    rx="20" ry="20"
    width="150" height="150"
    style="fill:red;stroke:black;
    stroke-width:5;opacity:0.5" />
</svg>
```

## شرح Drawing Polygons

لرسم الأشكال متعددة الأضلاع كالنجمة، نستخدم عنصر <polygon> ونحدد النقاط عبر points.

```html
<svg width="300" height="200">
  <polygon points="100,10 40,198
    190,78 10,78 160,198"
    style="fill:lime;stroke:purple;
    stroke-width:5;
    fill-rule:evenodd;" />
</svg>
```

## شرح SVG vs Canvas

تعتمد تقنية SVG على XML مما يجعل الأشكال جزءا من DOM، بينما يعتمد Canvas على البكسلات.

## شرح Conclusion

تقنية SVG مثالية للشعارات والأيقونات لمرونتها وقابليتها للتكبير دون فقدان الجودة.

- مفهوم SVG is vector-based and scalable
- مفهوم Directly embedded in HTML
- مفهوم Supports CSS styling and JS events
- مفهوم Ideal for icons and simple graphics
