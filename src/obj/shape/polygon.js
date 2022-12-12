class extends kagura.obj.shape.GraphicsFill{
      constructor(options){
        options=objSafe({
          radius:10,sides:1,corner:1
        },options);
        super(options);
        this.drawRoundedPolygon(0,0,options.radius,options.sides,options.corner,0).endFill();
  }
}