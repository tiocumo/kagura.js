class{
  constructor(elem=document){
    this.keys=[];
    document.addEventListener("keypress",e=>{
      if(!this.keys.includes(e.key)){
        this.keys.push(e.key);
      }
    });
    document.addEventListener("keyup",e=>{
      const index=this.keys.indexOf(e.key);
      if(index!==-1){
        this.keys.splice(index,1);
      }
    });
  }
}