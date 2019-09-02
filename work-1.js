let number = +prompt();

function oneDigitNumber(number) {
  let answer = '';
  switch(number) {
    case 0:
    answer = ' ';
    break;
    case 1:
    answer = ' one';
    break;
    case 2:
    answer = ' two';
    break;
    case 3:
    answer = ' tree';
    break;
    case 4:
    answer = ' four';
    break;
    case 5:
    answer = ' five';
    break;
    case 6:
    answer = ' six';
    break;
    case 7:
    answer = ' seven';
    break;
    case 8:
    answer = ' eight';
    break;
    case 9:
    answer = ' nine';
    break;
    default:
  }
  return answer;
}

function twoDigitNumber(number) {
  let lastDigit = number % 10;
  let firstDigit = (number - lastDigit) / 10;
  let lastDigitInWord = oneDigitNumber(lastDigit);
  let answer = '';
  switch(number) {
    case 10:
    answer = ' ten';
    break;
    case 11:
    answer = ' eleven';
    break;
    case 12:
    answer = ' twelve';
    break;
    case 13:
    answer = ' thirteen';
    break;
    case 14:
    answer = ' fourteen';
    break;
    case 15:
    answer = ' fiveteen';
    break;
    case 16:
    answer = ' sixteen';
    break;
    case 17:
    answer = ' seventeen';
    break;
    case 18:
    answer = ' eightteen';
    break;
    case 19:
    answer = ' nineteen';
    break;
    default:
  }
    switch(firstDigit) {
    case 0:
    answer = '' + lastDigitInWord;
    break;
    break;
    case 2:
    answer = ' twenty' + lastDigitInWord;
    break;
    case 3:
    answer = ' thirty' + lastDigitInWord;
    break;
    case 4:
    answer = ' fourty' + lastDigitInWord;
    break;
    case 5:
    answer = ' fifty' + lastDigitInWord;
    break;
    case 6:
    answer = ' sixty' + lastDigitInWord;
    break;
    case 7:
    answer = ' seventy' + lastDigitInWord;
    break;
    case 8:
    answer = ' eigthy' + lastDigitInWord;
    break;
    case 9:
    answer = ' ninety' + lastDigitInWord;
    break;
    default:
  }
  return answer;
}

function threeDigitNumber(number) {
  let lastTwoDigit = number % 100; 
  if (number !== 000){
  let firstDigit = (number - lastTwoDigit) / 100;
  let lastTwoDigitInWord = twoDigitNumber(lastTwoDigit);
  let firstDigitInWord = oneDigitNumber(firstDigit) + ' hundred';
  return firstDigitInWord + lastTwoDigitInWord;
  } else {
    return '';
  }
}

function fourToSixDigitNumber(number) {
  let answer = '';
  if (number < 9999 && number >= 1000){
    let lastThreeDigit = number % 1000;
    let firstOneDigit = (number - lastThreeDigit) / 1000;
    let firstOneDigitInWord = oneDigitNumber(firstOneDigit) + ' thousand';
    let lastThreeDigitInWord = threeDigitNumber(lastThreeDigit);
    answer = firstOneDigitInWord + lastThreeDigitInWord;
  } else if (number < 99999 && number >= 10000) {
    let lastThreeDigit = number % 1000;
    let firstTwoDigit = (number - lastThreeDigit) / 1000;
    let firstTwoDigitInWord = twoDigitNumber(firstTwoDigit) + ' thousand';
    let lastThreeDigitInWord = threeDigitNumber(lastThreeDigit);
    answer = firstTwoDigitInWord + lastThreeDigitInWord;
  } else {
    let lastThreeDigit = number % 1000;
    let firstThreeDigit = (number - lastThreeDigit) / 1000;
    let firstThreeDigitInWord = threeDigitNumber(firstThreeDigit) + ' thousand';
    let lastThreeDigitInWord = threeDigitNumber(lastThreeDigit);
    answer = firstThreeDigitInWord + lastThreeDigitInWord;
  }
  return answer;
}

function makeNumberWord(number) {
  let answer = '';
  if (number === 0) {
    answer = 'zero'
  }
  if (number >= 1 && number <= 9) {
    answer = oneDigitNumber(number);
  }
  if (number >= 10 && number <= 99) {
    answer = twoDigitNumber(number);
  }
  if (number >= 100 && number <= 999) {
    answer = threeDigitNumber(number);
  }
  if (number >= 1000 && number <= 999999) {
    answer = fourToSixDigitNumber(number);
  }
  return answer;
}

alert(makeNumberWord(number));
