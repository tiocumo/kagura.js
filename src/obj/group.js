//Group
//kagura.obj.Group
//kagura objects bindle
class extends PIXI.Container{
  constructor(options){
    options=objSafe({
      x:0,y:0,rotation:0,alpha:1
    },options);
    super();
    this.x=options.x;
    this.y=options.y;
    this.rotation=options.rotation;
    this.alpha=options.alpha;
  }
  addChildTo(terget){
    terget.addChild(this);
    return this;
  }
  each(func){
    let deletes=[];
    this.children.forEach((elem,index)=>{
      const result=func.call(elem,elem,index);
      if(result===true){deletes.push(index)}
    });
    deletes.reverse().forEach(index=>this.children.splice(index,1));
    return this;
  }
}