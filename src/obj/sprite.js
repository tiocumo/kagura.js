class extends kagura.pixi.Sprite{
      constructor(options){
        super();
        options=objSafe({
          texture:void(0),
          alpha:1,
          x:0,y:0,
          width:this.width,height:this.height,
          
          startX:0,startY:0,
          endX:this.width,endY:this.height
        },options);
        this.texture=options.texture;
        this.alpha=options.alpha;
        this.x=options.x;
        this.y=options.y;
      }
      addChildTo(target){
        target.addChild(this);return this;
      }
      
    }