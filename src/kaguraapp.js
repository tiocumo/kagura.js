class{
  constructor(options){
    options=objSafe({
      element:null,
      fps:30,
      width:null,
      height:null,
      StartScene:kagura.Scene,
      backgroundColor:"#000",
      autoFpsControl:true,
      autoViewSize:false,
    },options);
          
    this.options=options;
    const pixiArgs={
      view:options.element,
      width:options.width,
      height:options.height,
      backgroundColor:options.backgroundColor
    };
    this.app=new PIXI.Application(pixiArgs);
          
    this.app.renderer.resize(options.width, options.height);
          
    let StartScene=options.StartScene;
    this.scene=this.newClass(StartScene);
    if(options.autoViewSize){
      scaleToWindow(this.app.view);
      window.addEventListener("resize", () => {
        scaleToWindow(this.app.view);
      });
    }
    if(options.autoFpsControl)this.fpsHistory=[];
      this.backgroundColor=options.backgroundColor;
          
      this.backFlameTime=new Date();
    }
  roop(){
      // delta time define
      let deltaTime=(new Date().getTime()-this.backFlameTime.getTime());
      this.backFlameTime=new Date();

      // scene's flame counter
      this.sceneFlame++;

      //Update Scene
      this.scene.update({
        sceneFlame:this.sceneFlame,
        sceneTime:(new Date().getTime()-this.sceneStartTime.getTime())/1000,
        fps:1000/deltaTime,
        deltaTime:deltaTime,
        deltaFlame:deltaTime/(1000/this.options.fps)
      });

      // Chenge Scene
      if(this.scene.nextScene!==false){
        //delete children
        let app=this.app; 
        this.app.stage.children=[];
        
        //chenge
        this.scene=this.newClass(this.scene.nextScene);
      } 

      //Update Background color
      this.app.renderer.backgroundColor=this.scene.backgroundColor;
      
      let fps;
      if(this.options.autoFpsControl){
        this.fpsHistory.push(1000/deltaTime);
          if(this.fpsHistory.length===10)this.fpsHistory.shift();
          let aveFps=this.fpsHistory.reduce((acc,cur) => acc+cur)/this.fpsHistory.length;
          fps=this.options.fps;
          fps*=(fps/aveFps);
      }else{
        fps=this.options.fps;
      }
      setTimeout(this.roop.bind(this),1000/fps); //ReqAnimFrame
    }
  
  newClass(Class){
      this.sceneFlame=0;
      this.sceneStartTime=new Date();
          
      Class.prototype.app=this.app;
      Class.prototype.width=this.app.renderer.width;
      Class.prototype.height=this.app.renderer.height;
      Class.prototype.backgroundColor=this.options.backgroundColor;
      return new Class();
    }
  mainroop(){
    // start system
    requestAnimationFrame(this.roop.bind(this));
  }
}