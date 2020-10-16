
function repeat(operation, num) {
      return function() {
        if (num <= 0) return
        operation()
        return repeat(operation, num-1)
      }
}

function trampoline(fn) {
      let result = fn()
      while(fn && typeof result === 'function'){
        result = result()
      }
}

module.exports = function(operation, num) {

      trampoline(function (){
        return repeat(operation,num)
      })
}
