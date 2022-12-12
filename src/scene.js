/*
  Class "Scene"
  KaguraApp's Root Scene
*/
class{
  constructor(options){
    this.nextScene=false;
    this.stage=this.app.stage;
    this.renderer=this.app.renderer;
  }
  exit(nextScene){
    // Chenge Scene
    this.nextScene=nextScene;
  }
  update(args){}
  addChild(...arg){
      return this.app.stage.addChild(...arg);
  }
}