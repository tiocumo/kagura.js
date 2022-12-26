class extends kagura.obj.shape.GraphicsFill{
  constructor(options){
    options=objSafe({
      radius:10
    },options);
    super(options,(obj,options)=>{
      obj.drawCircle(0,0,options.radius).endFill();
    });
  }
  get radius(){
    return this.obj.radius;
  }
  set radius(chenge){
    this.obj.radius=chenge;
  }
}