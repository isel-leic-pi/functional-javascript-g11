/*function reduce(arr, fn, initial) {{
      if(arr.length == 0 ) return initial
      let accumulator =  fn(initial,arr[0],0,arr)
      return reduce(arr.slice(1),fn,accumulator)
}*/

function reduce(arr, fn, initial) {
  return function reduceOne(index,value){
    if(index>arr.length-1) return value;
    let acc = fn(value, arr[index], index, arr);
    return reduceOne(index+1,acc)
  }(0,initial)
}



module.exports = reduce
