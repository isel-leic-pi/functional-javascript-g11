module.exports = function arrayMap(arr, fn) {
  return arr.reduce((accumulator, currentValue) => { accumulator.push(fn(currentValue)); return accumulator;
  } , []);
}
