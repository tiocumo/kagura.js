class extends kagura.obj.shape.GraphicsFill{
      constructor(options){
        options=objSafe({
          width:10,height:10
        },options);
        super(options);
        this.drawEllipse(0,0,options.width,options.height).endFill();
      }
    };