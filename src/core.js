const objSafe=(proto,arg)=>{
  if(typeof(arg)!=="object"){
    return proto;
  }
  for(let v of Object.keys(arg)){
    proto[v]=arg[v];
  }
  return proto;
};
const kagura=function(){
    const kagura={
      Kagpi:class{
        constructor(options){
          options=objSafe({
            element:null,
            fps:30,
            width:null,
            height:null,
            StartScene:class extends kagura.Scene{
              constructor(){super()}
            },
            backgroundColor:"#000",
            autoFpsControl:true,
            autoViewSize:false,
          },options);
          this.options=options;
          let pixiArgs={
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
          let deltaTime=(new Date().getTime()-this.backFlameTime.getTime());
          this.backFlameTime=new Date();
          
          this.sceneFlame++;
        
          this.scene.update({
            sceneFlame:this.sceneFlame,
            sceneTime:(new Date().getTime()-this.sceneStartTime.getTime())/1000,
            fps:1000/deltaTime,
            deltaTime:deltaTime,
            deltaFlame:deltaTime/(1000/this.options.fps)
          }); //UpDate Scene
          
          if(this.scene.nextScene!==false){
            let app=this.app; 
            this.app.stage.children=[];
        
            this.scene=this.newClass(this.scene.nextScene);
          } // Chenge Scene
          
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
          
          return new Class();
        }
        mainroop(){
          requestAnimationFrame(this.roop.bind(this));
        }
      },
      Scene:class{
        constructor(options){
          this.nextScene=false;
          this.stage=this.app.stage;
          this.renderer=this.app.renderer;
        }
        exit(nextScene){
          this.nextScene=nextScene;
        }
        update(args){}
        addChild(...arg){
          return this.app.stage.addChild(...arg);
        }
      },
      obj:{
        shape:{
          isNewTest:"",
          
          GraphicsProto:class extends PIXI.Graphics{
            constructor(options){
              super();
              options=objSafe({
                x:0,y:0,rotation:0,alpha:1,scale:{x:1,y:1}
              },options);
              this.x=options.x;
              this.y=options.y;
              this.rotation=options.rotation;
              this.alpha=options.alpha;
              this.scale=options.scale;
            }
            addChildTo(target){
              target.addChild(this);
              return this;
            }
          },
        },
        Group:class extends PIXI.Container{
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
      },
      Boxer:class{
        constructor(options){
          for(let option of Object.keys(options)){
            this[option]=options[option];
          }
        }
      },
      FullScreen:function(){
        (document.body.webkitRequestFullscreen||document.body.requestFullscreen||document.body.mozRequestFullScreen)();
      },
      pixi:PIXI,
    };
    
    kagura.browser=function(userAgent){
      userAgent=userAgent.toLowerCase();
      if(userAgent.indexOf('msie')!=-1||userAgent.indexOf('trident')!=-1){
        return 'ie';
      }else if(userAgent.indexOf('edge')!=-1){
        return 'edge';
      }else if(userAgent.indexOf('chrome')!=-1){
        return 'chrome';
      }else if(userAgent.indexOf('safari')!=-1){
        return 'safari';
      }else if(userAgent.indexOf('firefox')!=-1) {
        return 'firefox';
      }else if(userAgent.indexOf('opera')!=-1) {
        return 'opera';
      }else{
        return '';
      }
    }(window.navigator.userAgent);
  
    kagura.obj.shape.GraphicsFill=class extends kagura.obj.shape.GraphicsProto{
      constructor(options){
        options=objSafe({
          fill:0xffffff
        },options);
        super(options);
        this.beginFill(options.fill);
        this.pivot.x=0;
        this.pivot.y=0;
      }
    };
    kagura.obj.shape.Circle=class extends kagura.obj.shape.GraphicsFill{
      constructor(options){
        options=objSafe({
          radius:10
        },options);
        super(options);
        this.drawCircle(0,0,options.radius).endFill();
      }
    };
    kagura.obj.shape.Ellipse=class extends kagura.obj.shape.GraphicsFill{
      constructor(options){
        options=objSafe({
          width:10,height:10
        },options);
        super(options);
        this.drawEllipse(0,0,options.width,options.height).endFill();
      }
    };
    kagura.obj.shape.Path=class extends kagura.obj.shape.GraphicsFill{
      constructor(options){
        //-, 0, -100, 70, -70,
        options=objSafe({
          paths:[[100,0],[70,70],[0,100],[-70,70],[-100,0],[-70,-70],[0,-100],[70,-70]]
        },options);
        super(options);
        let paths=[];
        for(let path of options.paths){
          if(path.length===2&&Array.isArray(path)){
            paths.push(path[0],path[1]);
          }else{
            console.error("Paths's arguments type is array, and children array's length is 2.");return;
          }
        }
        this.drawPolygon(paths).endFill();
        
      }
    };
    kagura.obj.shape.Rect=class extends kagura.obj.shape.GraphicsFill{
      constructor(options){
        options=objSafe({
          width:100,height:100,fillet:0
        },options);
        super(options);
        this.drawFilletRect(0,0,options.width,options.height,options.fillet).endFill();
      }
    };
    kagura.obj.shape.Polygon=class extends kagura.obj.shape.GraphicsFill{
      constructor(options){
        options=objSafe({
          radius:10,sides:1,corner:1
        },options);
        super(options);
        this.drawRoundedPolygon(0,0,options.radius,options.sides,options.corner,0).endFill();
      }
    };
    kagura.obj.shape.Star=class extends kagura.obj.shape.GraphicsFill{
      constructor(options){
        options=objSafe({
          points:5,radius:10,innerRadius:20
        },options);
        super(options);
        this.drawStar(0,0,options.points,options.radius,options.innerRadius,0).endFill();
      }
    };
    kagura.obj.shape.Torus=class extends kagura.obj.shape.GraphicsFill{
      constructor(options){
        options=objSafe({
          points:5,radius:10,innerRadius:0,outerRadius:Math.PI*2
        },options);
        super(options);
        this.drawTorus(0,0,options.innerRadius,options.outerRadius,options.startArc,options.endArc).endFill();
      }
    };
    kagura.obj.shape.Line=class extends kagura.obj.shape.GraphicsProto{
      constructor(options){
        options=objSafe({
          color:0xffffff,paths:[[0,0],[10,10]],size:1
        },options);
        super(options);
        this.lineStyle(options.size,options.color);
        let i=0;
        for(let path of options.paths){
          i++;
          if(path.length===2&&Array.isArray(path)){
            if(i===1){
              this.moveTo(...path);
            }
            this.lineTo(...path);
          }else{console.error("Paths's arguments type is array, and children array's length is 2.");return;}
        }
      }
    };
    
    kagura.Loader=class extends PIXI.Loader{
      constructor(loads,loaded){
        super();
        for(let load of Object.keys(loads)){
          this.add(load,loads[load]);
        }
        if(typeof(loaded)=="function"){
          this.load(loaded.bind(this));
        }
      }
      get(id){
        return this.resources[id];
      }
    };
    
    kagura.obj.Sprite=class extends kagura.pixi.Sprite{
      constructor(options){
        super();
        options=objSafe({
          texture:void(0),
          alpha:1,
          x:0,y:0,
          width:this.width,height:this.height,
          
          startX:0,startY:0,
          endX:this.width,endY:this.height
        },options);
        this.texture=options.texture;
        this.alpha=options.alpha;
        this.x=options.x;
        this.y=options.y;
      }
      addChildTo(target){
        target.addChild(this);return this;
      }
      
    };
    
    return kagura;
  }();