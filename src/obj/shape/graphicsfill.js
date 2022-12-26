class extends kagura.obj.shape.GraphicsProto{
  constructor(options,draw){
    options=objSafe({
      fill:0xffffff
    },options);
    super(options);
    this.draw=draw;
    this.options=options;
    this.obj.beginFill(options.fill);
    this.draw(this.obj,this.options)
    this.obj.pivot.x=0;
    this.obj.pivot.y=0;
  }
  set fill(chenge){
    this.obj.clear();
    this.obj.beginFill(chenge);
    this.draw(this.obj,this.options);
  }
}