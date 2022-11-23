const palindromes = function (input) {
  const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  const normalInput = input
    .toLowerCase()
    .split('')
    .filter((letter) => {return (punctuation.indexOf(letter) === -1)})
    .filter((letter) => {return letter !== ' '})
    .join('');
  const reversedInput = normalInput.split('').reverse().join('');
  console.log(`${normalInput} 
${reversedInput}`);

  return (reversedInput == normalInput);

};

// Do not edit below this line
module.exports = palindromes;
