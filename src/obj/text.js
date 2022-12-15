//Text
//kagura.obj.Text
//kagura text
class extends kagura.pixi.Text{
  constructor(options){
    options=objSafe({
      text:"",
      x:0,
      y:0,
      fill:0xffffff,
      align:"left",
      fontFamily:"Arial",
      fontSize:26,
      fontStyle:"normal",
      fontVariant:"normal",
      fontWeight:"normal",
      stroke:"black",
      strokeThickness:0,
      
      
      options:{}
    },options);
    options.options=objSafe({
      fill:options.fill,
      align:options.align,
      fontFamily:options.fontFamily,
      fontSize:options.fontSize,
      fontVariant:options.fontVariant,
      fontWeight:options.fontWeight,
      stroke:options.stroke,
      strokeThickness:options.strokeThickness,
    },options.options);
    
    super(options.text,options.options);
    
    this.x=options.x;
    this.y=options.y;
  }
  addChildTo(terget){
    terget.addChild(terget);
  }
}