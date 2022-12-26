//Text
//kagura.obj.Text
//kagura text
class extends kagura.obj.Object{
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
      anchor:{x:0,y:0},
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
    
    super(new kagura.pixi.Text(options.text,options.options));
    this.obj.x=options.x;
    this.obj.y=options.y;

  }
}
