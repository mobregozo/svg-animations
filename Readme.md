# SVG Animations

This is a Simple Project that I did with Learning purposes, oriented to SVG animations with CSS.

## Demo

You can find this example running here: https://mobregozo.github.io/svg-animations/

## Tooling 
- SVGO to make SVG smaller and performant
- vectr To edit SVGs Onlines

## Related Articles:
- https://rafaltomal.com/svg-guide/
- https://medium.com/@aniboaz/animate-svg-4fa7dd00e860
- https://css-tricks.com/svg-line-animation-works/
- https://css-tricks.com/animating-svg-css/
- https://blog.logrocket.com/animating-svg-with-css-83e8e27d739c/
- https://css-tricks.com/guide-svg-animations-smil/
- https://jonsuh.com/blog/animate-svg-with-css/
- https://medium.com/@LewisMenelaws/how-to-create-beautiful-svg-animations-easily-610eb2690ac3


## Credits for the SVG file

<p> "<a href="/wiki/File:Black_Man_Playing_Guitar_Standing_Cartoon_Vector.svg##" title="File:Black Man Playing Guitar Standing Cartoon Vector.svg">Black Man Playing Guitar Standing Cartoon Vector.svg</a> from <a href="/wiki/Main_Page" title="Main Page">Wikimedia Commons</a> by <a rel="nofollow" class="external text" href="https://videoplasty.com/">Videoplasty.com</a>,&nbsp;<a rel="nofollow" class="external text" href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">CC-BY-SA 4.0</a>"
</p>

## My Findings
- We can use <object> in case we do not want to use inline (Js manipulation). With this approach Css properties needs to be part of the SVG file, otherwise css from a global scope will not have any effect on the SVG inside the object node.
- `stroke-dasharray` and `stroke-offset` to create an effect of icon drawing.

### Why SVG? Advantages:
- SVGs don’t take much space and when used inline as a code, it doesn’t require an HTTP request in case is already part of the html
- Since it is a vector image is easy to scale
- It is possible to use part of the animations, that’s why it is better to use classes for elements instead of IDs


	