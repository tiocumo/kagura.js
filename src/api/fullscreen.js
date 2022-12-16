function(elem){
  if(!elem){
    elem=document.documentElement;
  }
  function isIn(obj,key){
    return key in obj;
  }
  if(isIn(elem,"webkitRequestFullscreen")){
    elem.webkitRequestFullscreen();
  }else if(isIn(elem,"requestFullscreen")){
    elem.requestFullscreen();
  }else if(isIn(elem,"mozRequestFullScreen")){
    elem.mozRequestFullScreen();
  }
}