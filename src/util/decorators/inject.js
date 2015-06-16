export function inject(...args){  
  return function(target){
    target.inject = args;
  }
}
