function curryN(fn, n) {
      if(n==0) return fn();
      return function(a){
          let number = n || fn.length
          return curryN(fn.bind(null,a),--number)
      }
}

module.exports = curryN
