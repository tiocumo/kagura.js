{{!objsafe.js!}}

const kagura=function(){
    const kagura={
      Kagura:{{!kaguraapp.js!}},
      Scene:{{!scene.js!}},
      obj:{
        shape:{
          isNewTest:"",
        },
        
      },
      Boxer:{{!api/boxer.js!}},
      FullScreen:{{!api/fullscreen.js!}},
      pixi:PIXI,
    };
    kagura.exitFullscreen=Document.exitFullscreen;
    kagura.Grid={{!api/grid.js!}}
    kagura.browser={{!browsercheck.js!}}(window.navigator.userAgent)

    kagura.obj.Object={{!obj/object.js!}}
    
    kagura.obj.Text={{!obj/text.js!}}
    kagura.obj.Group={{!obj/group.js!}}
    kagura.obj.shape.GraphicsProto={{!obj/shape/graphicsproto.js!}};
    kagura.obj.shape.GraphicsFill={{!obj/shape/graphicsfill.js!}};
    kagura.obj.shape.Circle={{!obj/shape/circle.js!}}
    kagura.obj.shape.Ellipse={{!obj/shape/ellipse.js!}}
    kagura.obj.shape.Path={{!obj/shape/path.js!}};
    kagura.obj.shape.Rect={{!obj/shape/rect.js!}};
    kagura.obj.shape.Polygon={{!obj/shape/polygon.js!}};
    kagura.obj.shape.Star={{!obj/shape/star.js!}};
    kagura.obj.shape.Torus={{!obj/shape/torus.js!}};
    kagura.obj.shape.Line={{!obj/shape/line.js!}};
    
    kagura.Loader={{!api/loader.js!}};
    
    kagura.obj.Sprite={{!obj/sprite.js!}};

    kagura.Keyboard={{!api/keyboard.js!}};
    kagura.Touches={{!api/touches.js!}};
    return kagura;
  }();
console.log("Kagura.js -github.com/tiocumo/kagura.js")