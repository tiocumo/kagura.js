class extends kagura.obj.shape.GraphicsFill{
  constructor(options){
        //-, 0, -100, 70, -70,
    options=objSafe({
      paths:[[100,0],[70,70],[0,100],[-70,70],[-100,0],[-70,-70],[0,-100],[70,-70]]
    },options);
    super(options);
    let paths=[];
    for(let path of options.paths){
      if(path.length===2&&Array.isArray(path)){
        paths.push(path[0],path[1]);
      }else{
        console.error("Paths's arguments type is array, and children array's length is 2.");return;
      }
    }
    this.drawPolygon(paths).endFill();
        
  }
}