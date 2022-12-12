class extends kagura.obj.shape.GraphicsFill{
      constructor(options){
        options=objSafe({
          width:100,height:100,fillet:0
        },options);
        super(options);
        this.drawFilletRect(0,0,options.width,options.height,options.fillet).endFill();
      }
    }