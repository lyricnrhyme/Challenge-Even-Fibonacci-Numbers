/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) { //13
  var sum = 0;
  var currentVal = 0;
  var add = 0;
  var prevVal = 0;
  while (currentVal <= maxFibValue) {
    if (currentVal === 0) {
      currentVal++;
      prevVal++;
      add++;
    } else {
      // add += prevVal;
      prevVal = currentVal;
      currentVal = add;
      if (currentVal%2 === 0) {
        sum += currentVal;
      }
      console.log('result', currentVal);
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){ //100
  var highest = 0;

  var currentVal = 0;
  var add = 0;
  var prevVal = 0;
  while (currentVal <= maxFibValue) {
    if (currentVal === 0) {
      currentVal++;
      prevVal++;
      add++;
    } else {
      add += prevVal;
      prevVal = currentVal;
      currentVal = add;
      highest = prevVal;
      console.log('result', currentVal);
    }
  }
  //define your base case, validate your input


  //do your work here

  return highest;
};

function _primeSums (maxFibValue){
  var sum = 0;
  var currentVal = 0;
  var add = 0;
  var prevVal = 0;
  while (currentVal <= maxFibValue) {
    if (currentVal === 0) {
      currentVal++;
      add++;
      prevVal++;
    } else {
      add += prevVal;
      prevVal = currentVal;
      currentVal = add;
      if (currentVal > 2) {
        // for (var i=2; i<currentVal; i++) {
        //   if (currentVal%i === 0) {
        //     break;
        //   } else {
        //     sum += currentVal;
        //   }
        // }
      }
    }
  }
  return sum;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber,
  primeSums : _primeSums
};