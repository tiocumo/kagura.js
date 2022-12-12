//Boxer
//kagura.Boxer
//Object
class{
  constructor(options){
    for(let option of Object.keys(options)){
      this[option]=options[option];
    }
  }
}