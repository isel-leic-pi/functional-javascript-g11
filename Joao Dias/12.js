function Spy(target, method) {

      let spy = {
        count : 0
      }

      let original = target[method];

      target[method] = function(){
        spy.count++;
        return original.apply(target, arguments);
      }
      return spy;
}

module.exports = Spy
