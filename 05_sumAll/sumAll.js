const sumAll = function(start, end) {
  if (isNaN(start) || isNaN(end) || typeof(start) === "string" || typeof(end) === "string") return 'ERROR';
  if (start < 0 || end < 0) return 'ERROR';

  let begin = (start > end) ? end : start;
  let finish = (start > end) ? start : end;

  let sum = 0;
  for (let x = begin; x <= finish; x++) {
    sum += x;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
