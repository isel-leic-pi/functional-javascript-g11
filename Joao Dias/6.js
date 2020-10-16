function countWords(inputWords) {

      return inputWords.reduce((accumulator,currentValue) => {
        if(accumulator[currentValue] == undefined)  accumulator[currentValue]=1;
        else accumulator[currentValue] += 1;
        return accumulator;
      },{});
}

module.exports = countWords
