//GraphicsProto
//Kagura.obj.shape.GraphicsProto
//shapes prototype
class extends kagura.obj.Object{
  constructor(options){
    super(new PIXI.Graphics());
    options=objSafe({
      x:0,y:0,rotation:0,alpha:1,scale:{x:1,y:1}
    },options);
    this.obj.x=options.x;
    this.obj.y=options.y;
    this.obj.rotation=options.rotation;
    this.obj.alpha=options.alpha;
    this.obj.scale=options.scale;
  }
}
