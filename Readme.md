# SVG Animations

This is a Simple Project that I did with Learning purpuoses, oriented to SVG animations with CSS.

## Tooling 
- SVGO to make SVG smaller and performant
- vectr To edit SVGs Onlines


## My Findings
- We can use <object> in case we do not want to use inline (Js manipulation). With this approach Css properties needs to be part of the SVG file, otherwise css from a global scope will not have any effect on the SVG inside the object node.
- `stroke-dasharray` and `stroke-offset` to create an effect of icon drawing.


Advantages:
- SVGs don’t take much space and when used inline as a code, it doesn’t require an HTTP request in case is already part of the html
- Since it is a vector image is easy to scale
- It is possible to use part of the animations, that’s why it is better to use classes for elements instead of IDs


## Articles:
- 


	