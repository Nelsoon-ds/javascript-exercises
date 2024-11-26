const sumAll = function (a, b) {
    if (a < 0 || b < 0) return "ERROR";
    if (typeof a !== 'number' || typeof b !== 'number') return "ERROR";
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);


  let sum = 0;

  for (let i = lower; i <= upper; i++) {
        sum += i;
    }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
