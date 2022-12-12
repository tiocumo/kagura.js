# 円を追加する
前回作ったシーンを、このように変えます。
```js
class MyScene extends kagura.Scene{
  constructor(){
    let circle=kagura.obj.shape.Circle({radius:10});  //半径が10の円を作成
    circle.x=100;  //円のX座標を100に
    circle.y=100;  //円のY座標を100に
    
    this.addChild(circle); //円をステージに追加
  }
}
```
すると、白い円が現れているはずです。
