class extends kagura.obj.shape.GraphicsFill{
  constructor(options){
    options=objSafe({
      points:5,radius:10,innerRadius:20
    },options);
    super(options,(obj,options)=>{
      obj.drawStar(0,0,options.points,options.radius,options.innerRadius,0).endFill();
    });
      }
}