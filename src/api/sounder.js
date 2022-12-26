class Sounder{
  constructor(url){
    this.url=url;
  }
  make(){
    return new (class{
      constructor(url,autokill=true){
        this.elem=document.createElement("audio");
        this.elem.src=url;
        if(autokill){
          this.elem.addEventListener("ended",()=>{
            this.kill();
          });
        }
      }
      play(){
        this.elem.play();
      }
      pause(){
        this.elem.pause();
      }
      get time(){
        return this.elem.currentTime;
      }
      set time(time){
        this.elem.currentTime=time;
      }
      get max(){
        return this.elem.max;
      }
      set max(max){
        this.elem.max=max;
      }
      get volume(){
        return this.elem.volume;
      }
      set volume(volume){
        this.elem.volume=volume;
      }
      get ended(){
        return this.elem.ended;
      }
      get speed(){
        return this.elem.playbackRate;
      }
      set speed(speed){
        this.elem.playbackRate=speed;
      }
      kill(){
        this.elem.remove();
        delete this.elem;
        console.log(this)
      }
    })(this.url);
  }
}
