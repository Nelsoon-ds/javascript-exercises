const add = function (num1, num2) {
  total = num1 + num2;
  return total;
};

const subtract = function (num1, num2) {
  total = num1 - num2;
  return total;
};

const sum = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function (arr) {
  let total = 1;
  arr.map((currItem) => {
    total *= currItem;
  });
  return total;
};

const power = function (num, exponent) {
  var result = 1;

  for (let i = 0; i < exponent; i++) {
    result = num ** exponent;
  }
  return result;
};

const factorial = function (num) {
  let total = 1;
  for (let i = 0; i < num; i++) {
    total = num * total;
    num ++;
    
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
