(function(){
  function Grid(n,w,h){
    this.n=n;
    this.w=w;
    this.h=h;
    this.vw=w/(2*n);
    this.vh=h/(2*n);
    this.xy=function(x,y){
      return {
        x:(this.vw*x)+this.w/2,
        y:(this.vh*y)+this.h/2
      };
    };
    this.x=function(x){return (this.vw*x)+this.w/2};
    this.y=function(y){return (this.vh*y)+this.h/2};

    this.c={
      x:w/2,y:h/2
    };
  }
  return Grid;
})();
