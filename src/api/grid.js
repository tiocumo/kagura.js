class{
  constructor(n,w,h){
    this.n=n;
    this._w=w;
    this._h=h;
    this.ud();
    this.x=function(x){return (this.vw*x)+this.w/2};
    this.y=function(y){return (this.vh*y)+this.h/2};
  }
  xy(x,y){
    return {
      x:(this.vw*x)+this._w/2,
      y:(this.vh*y)+this._h/2
    };
  }
  ud(){
    this.vw=this._w/(2*this.n);
    this.vh=this._h/(2*this.n);
    this.c={
      x:this._w/2,y:this._h/2
    };
  }
  set w(c){
    this._w=c;
    this.ud();
  }
  set h(c){
    this._h=c;
    this.ud();
  }
  get w(){
    return this._w;
  }
  get h(){
    return this._h;
  }
}