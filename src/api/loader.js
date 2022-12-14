class{
  constructor(loads,loaded){
    if(!loads){
      console.error("Loads arguments is undefined.");return;
    }
    this.assets={};
    if(!loaded)loaded=function(){};
    this.loaded=loaded;
    this.loader=new kagura.pixi.Loader();
    this.loadedXhr={__pixiLoaded__:false};
    Object.keys(loads).forEach(elem=>{
      this.loadedXhr[elem]=false;
    });
    for(const load of Object.keys(loads)){
      const url=loads[load];
      this.loader.add(load,url);
      this.assets[load]={
        get text(){
          return this._text.result;
        },
        get json(){
          try{
            return JSON.parse(this.text);
          }catch{
            return undefined;
          }
        }
      };
      let xhr=new XMLHttpRequest();
      
      xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4 && xhr.status == 200){
          const my=this.assets[load];
          my.blobObj=xhr.response;
          my.blob=window.URL.createObjectURL(xhr.response);
          my.image=new Image(my.blob);
          my.sound=new Audio(my.blob);
          my.url=xhr.responseURL;
          my._text=new FileReader()
          my._text.readAsText(my.blobObj)
          
        }
        setTimeout(()=>this.loadedOneXhr(load),0)
      };
      xhr.responseType = "blob";
      xhr.open('GET',url,true);
      xhr.send();
    }
    this.loader.load(()=>{
      for(const title of Object.keys(this.loader.resources)){
        const value=this.loader.resources[title];
        const my=this.assets[title];
        my.pixiLoad=value;
        my.texture=value.texture;
        my.textures=value.textures
      }
      this.loadedOneXhr("__pixiLoaded__")
    });
  };
  get(id){
    return this.assets[id];
  }
  loadedOneXhr(key){
    this.loadedXhr[key]=true;
    if(Object.values(this.loadedXhr).reduce((a,b)=>a&&b)){
      this.loaded(this.assets,this);
    }
  }
};
