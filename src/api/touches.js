class{
  constructor(elem=document){
    this.mouse={x:0,y:0,down:false};
    this.touches={};
    this.lastPointer={
      x:0,y:0
    };
    //mouse
    elem.addEventListener('mousemove',e=>{
      this.mouse.x=e.clientX;
      this.mouse.y=e.clientY;
    });
    elem.addEventListener("mousedown",e=>{
      this.mouse.x=e.clientX;
      this.mouse.y=e.clientY;
      this.mouse.down=true;
    });
    elem.addEventListener("mouseup",e=>{
      this.mouse.x=e.clientX;
      this.mouse.y=e.clientY;
      this.mouse.down=false;
    });
    
    //touch
    elem.addEventListener("touchstart",e=>{
      for(let i=0;i<e.changedTouches.length;i++){
        const touch=e.changedTouches[i];
        this.touches[touch.identifier]={
          down:true,
          x:touch.pageX,
          y:touch.pageY,
          id:touch.identifier,
        };
      }
    });
    elem.addEventListener("touchend",e=>{
      for(let i=0;i<e.changedTouches.length;i++){
        const touch=e.changedTouches[i];
        delete this.touches[touch.identifier];
      }
    });
    elem.addEventListener("touchmove",e=>{
      for(let i=0;i<e.changedTouches.length;i++){
        const touch=e.changedTouches[i];
        this.touches[touch.identifier].x=touch.pageX;
        this.touches[touch.identifier].y=touch.pageY;
      }
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    });
    elem.addEventListener("touchcancel",e=>{
      for(let i=0;i<e.changedTouches.length;i++){
        const touch=e.changedTouches[i];
        delete this.touches[touch.identifier];
      }

    });
  }
  get get(){
    let pointer=this.lastPointer;
    pointer.down=false;
    const touches=Object.values(this.touches);
    if(this.mouse.down){
      pointer.x=this.mouse.x;
      pointer.y=this.mouse.y;
      pointer.down=true;
    }else if(touches.length!==0){
      pointer.x=touches[0].x;
      pointer.y=touches[0].y;
      pointer.down=true;
    }
    const result={
      pointer:pointer,
      touches:touches
    };
    return(result);
  }
}
