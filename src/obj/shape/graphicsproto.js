//GraphicsProto
//Kagura.obj.shape.GraphicsProto
//shapes prototype
class extends PIXI.Graphics{
  constructor(options){
    super();
    options=objSafe({
      x:0,y:0,rotation:0,alpha:1,scale:{x:1,y:1}
    },options);
    this.x=options.x;
    this.y=options.y;
    this.rotation=options.rotation;
    this.alpha=options.alpha;
    this.scale=options.scale;
  }
  addChildTo(target){
    target.addChild(this);
    return this;
  }
}
