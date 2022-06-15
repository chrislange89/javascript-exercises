const repeatString = function(string, times) {
  if (times < 0) return 'ERROR';
  if (string === '' || times === 0) return '';

  let res = '';
  for (let x = 0; x < times; x++) {
    res += string;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
