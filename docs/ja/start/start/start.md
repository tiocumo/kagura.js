```html
<canvas id="canvas"></canvas>
```
でcanvasを作ります。
次に、シーンを作りましょう。
```js
// kagura.Sceneを継承してMySceneを作成
class MyScene extends kagura.scene{
  constructor(){
    super(); //親クラス初期化
  }
}
```
これは一番シンプルなシーンです。
このままだと動作しないので、フレームワークを起動させます。
```js
const app=kagura.Kagura({
  element:document.getElementById("canvas"),
  width:480,
  height:360,
  StartScene:MyScene,  //先程つくったシーン
});
app.mainroop(); //起動
```
真っ黒な画面が表示されたはずです
