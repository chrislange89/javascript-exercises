const leapYears = function(year) {
  let oddYear = (year % 2 !== 0);
  let divisibleByFour = (year % 4 === 0);
  let divisibleByHundred = (year % 100 === 0);
  let divisibleByFourHundred = (year % 400 === 0);

  if (oddYear) return false;
  if (!divisibleByFour) return false;
  if (divisibleByHundred) return divisibleByFourHundred; 

  return true;
};

// Do not edit below this line
module.exports = leapYears;
