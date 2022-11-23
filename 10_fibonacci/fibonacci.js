const fibonacci = function(num) {
  let series = [1, 1];
  let inputNum = parseInt(num);
  if (inputNum < 0) return 'OOPS';
  if (inputNum == 1) return 1;
  if (inputNum == 2) return 1;
  
  let nextNum;

  for (let i = 2; i < inputNum; i++) {
    nextNum = series[i - 1] + series [i - 2];
    series.push(nextNum);
  }

  return series[series.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
