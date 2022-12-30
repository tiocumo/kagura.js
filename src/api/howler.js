class{
  constructor(url){
    this.url=url;
  }
  make(options){
    options.src=[this.url];
    return new kagura.Howl(options);
  }
}