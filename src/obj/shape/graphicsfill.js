class extends kagura.obj.shape.GraphicsProto{
  constructor(options){
    options=objSafe({
      fill:0xffffff
    },options);
    super(options);
    this.beginFill(options.fill);
    this.pivot.x=0;
    this.pivot.y=0;
  }
}