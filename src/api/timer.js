class{
  constructor(unit){
    this._startTime=new Date();
    this.unit=unit;
  }
  get time(){
    return this.unit*((new Date().getTime())-(this._startTime.getTime()));
  }
}