class extends PIXI.Loader{
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
}