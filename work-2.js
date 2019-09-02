// Write a JavaScript function to get all possible subsets of length 3 of the given array.
// Assume that all elements in the array are unique.

function getAllPossibleSubsetsOfLengthThree (array = []) {
  if (array.length < 3) {
    return array;
  }
  let result = [];
  let mainArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let z = j + 1; z < array.length; z++) {
        result.push(array[i], array[j], array[z]);
        mainArray.push(result);
        result = [];
      }
    }
  }
  return mainArray;
}

console.log(getAllPossibleSubsetsOfLengthThree([5, 9, 23, 0, -2, -1]));
