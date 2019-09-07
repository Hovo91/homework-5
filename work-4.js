//Write a function, which receives an array as an argument which elements arrays of numbers. Find biggest negative number of each array.
//If there is not any negative number, ignore that array. Check that items of the given array are arrays.

function checkArray(array = []) {
  let checkArray = array.filter((item) => Array.isArray(item));
  if (checkArray.length !== array.length) {
    return 'Invalid Argument';
    };
  if (checkArray.every((item) => item.every((item) => item >= 0))) {
    return 'No negatives';
    };
    let arrayWithNegs = checkArray.map((item) => item.filter((item) => item < 0));
    let arrayWithMaxNeg = arrayWithNegs.map((item) => item.length === 0 ? 1 : item.reduce((min, item) => min > item ? min : item));
  return arrayWithMaxNeg.reduce((product, elem) => product * elem);
}

console.log(checkArray([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));
