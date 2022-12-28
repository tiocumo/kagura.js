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
  exit(nextScene,passValue){
    // Chenge Scene
    this.passValue=passValue
    this.nextScene=nextScene;
  }
  update(args){}
  addChild(...arg){
    return this.app.stage.addChild(...arg);
  }
}