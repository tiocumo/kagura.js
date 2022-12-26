class{
  constructor(object){
    this.obj=object;
    for(let key of Object.getOwnPropertyNames(this.obj)){
      let value=Object.getOwnPropertyDescriptor(this.obj,key);
      Object.defineProperty(this,key,{
        get:function(){
          return this.obj[key];
        },
        set:function(c){
          this.obj[key]=c;
        }
      });
    }
    this.__proto__=this.obj.__proto__;
    Object.assign(this.__proto__,{
      addChildTo:function(terget){
        terget.addChild(this.obj);return this;
      }
    })
  }
}