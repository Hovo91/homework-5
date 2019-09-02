// Write a JavaScript function to get all possible subsets of length 3 of the given array.
// Assume that all elements in the array are unique.

function getAllPossibleSubsetsOfLengthThree (array = []) {
  if (array.length < 3) {
    return array;
  }
  let result = [];
  let mainArray = [];
  for (let i = 0; i <= 3; i++) {
      for (let j = i + 1; j <= i + 4; j++) {
        if (checkingNotUndefined(array, j)) {
          for (let z = j + 1; z <= j + 4; z++) {
            if (checkingNotUndefined(array, z)) {
              result.push(array[i]);
              result.push(array[j]);
              result.push(array[z]);
              mainArray.push(result);
              result = [];
            }
          }
        }
      }
    }
  return mainArray;
}

function checkingNotUndefined(array, i) {
  return array[i] === undefined ? false : true;
}

console.log(getAllPossibleSubsetsOfLengthThree([5, 9, 23, 0, -2, -1]));
