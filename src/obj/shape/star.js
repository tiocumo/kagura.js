class extends kagura.obj.shape.GraphicsFill{
      constructor(options){
        options=objSafe({
          points:5,radius:10,innerRadius:20
        },options);
        super(options);
        this.drawStar(0,0,options.points,options.radius,options.innerRadius,0).endFill();
      }
    }