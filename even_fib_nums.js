/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  let sum = 0;
  // do your work here

  let arr = [1,1];

  while (arr[arr.length-1]<maxFibValue){
    arr.push (arr[arr.length-1]+arr[arr.length-2]);
    if (arr[arr.length-1]%2===0){
      sum+=arr[arr.length-1];
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  let highest = 0;

  //define your base case, validate your input


  //do your work here

  let arr = [1,1];

  while (arr[arr.length-1]<maxFibValue){
    arr.push (arr[arr.length-1]+arr[arr.length-2]);
    highest = arr[arr.length-1];
  }

  if (highest >=maxFibValue){
    highest = arr[arr.length-2];
  }

  return highest;
};

function _collegeTry (maxFibValue){
  let highest = 0;
  let last = 0;
  let current = 1;

  while (highest<maxFibValue){
    highest = current + last;
    last = current;
    current = highest;
  };

  if (highest >=maxFibValue){
    highest = last;
  }
};


/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber,
  collegeTry: _collegeTry,
};
