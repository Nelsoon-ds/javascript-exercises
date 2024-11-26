const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  let number = parseInt(n);

  if (number <= 1) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
