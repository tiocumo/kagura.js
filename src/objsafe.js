const objSafe=(proto,arg)=>{
  if(typeof(arg)!=="object"){
    return proto;
  }
  for(let v of Object.keys(arg)){
    proto[v]=arg[v];
  }
  return proto;
};