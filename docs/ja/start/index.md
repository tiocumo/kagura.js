# 始める
Kagura.jsは、PixiJSを利用したゲームエンジンです。
```html
<canvas id="canvas"></canvas>
```
でcanvasを作り、
```js
const app=kagura.Kagura({
  element:document.getElementById("canvas"),
  width:480,
  height:360
})
```
でスタートします。
