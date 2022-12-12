class extends kagura.obj.shape.GraphicsFill{
  constructor(options){
    options=objSafe({
      radius:10
    },options);
    super(options);
    this.drawCircle(0,0,options.radius).endFill();
  }
}