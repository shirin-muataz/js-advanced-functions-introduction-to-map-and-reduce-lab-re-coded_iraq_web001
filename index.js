// Your code here
function  mapToNegativize(sourceArray){
 let newArr= [];
 for(let i = 0; i < sourceArray.length; i++){
   newArr[i] = sourceArray[i]*-1;
 }

 return newArr
}
console.log(mapToNegativize([1, 2, 3, -9]));
function mapToNoChange(sourceArray){
  return sourceArray
}
function mapToDouble(sourceArray){
  let newArr= [];
  for(let i = 0; i < sourceArray.length; i++){
    newArr[i] = sourceArray[i]*2;
  }
  return newArr
}
function mapToSquare(sourceArray){
  let newArr= [];
  for(let i = 0; i < sourceArray.length; i++){
    newArr[i] = sourceArray[i]**2;
  }
  return newArr
}
function reduceToTotal(sourceArray, startingPoint = 0){
  for(let i = 0; i < sourceArray.length; i++){
    startingPoint += sourceArray[i];
  }
  return startingPoint
}
function reduceToAllTrue(sourceArray){
  let startingPoint = true;
  for(let i = 0; i < sourceArray.length; i++){
    startingPoint &= !!sourceArray[i];
  }
  return !!startingPoint
}
function reduceToAnyTrue(sourceArray){
  let startingPoint = false;
  for(let i = 0; i < sourceArray.length; i++){
    startingPoint |= !!sourceArray[i];
  }
  return !!startingPoint
}
console.log(reduceToAllTrue([false,true,true])); 
