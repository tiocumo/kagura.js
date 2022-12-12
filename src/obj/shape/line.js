class extends kagura.obj.shape.GraphicsProto{
      constructor(options){
        options=objSafe({
          color:0xffffff,paths:[[0,0],[10,10]],size:1
        },options);
        super(options);
        this.lineStyle(options.size,options.color);
        let i=0;
        for(let path of options.paths){
          i++;
          if(path.length===2&&Array.isArray(path)){
            if(i===1){
              this.moveTo(...path);
            }
            this.lineTo(...path);
          }else{console.error("Paths's arguments type is array, and children array's length is 2.");return;}
        }
      }
    }