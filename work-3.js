// Given a word and a list of possible anagrams, select the correct sublist.

function checkSublist(word, array = []) {
  let filteredArray = array.filter(item => word.split('').sort().join('') === item.split('').sort().join(''));
  return filteredArray;
}

console.log(checkSublist('pencil', ['licnep', 'circular', 'pupil', 'nilcpe']));
