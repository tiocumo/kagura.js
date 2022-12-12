class extends kagura.obj.shape.GraphicsFill{
      constructor(options){
        options=objSafe({
          points:5,radius:10,innerRadius:0,outerRadius:Math.PI*2
        },options);
        super(options);
        this.drawTorus(0,0,options.innerRadius,options.outerRadius,options.startArc,options.endArc).endFill();
      }
    }