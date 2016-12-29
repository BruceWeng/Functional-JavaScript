// Write a function curry that takes a binary function and an argument, and returns a function that can take a second argument.
// var add3 = curry(add, 3);
// add3(4) -> 7
// curry(mul, 5)(6) -> 30
function print(input) {
  console.log(input);
}

function add(first, second) {
  return first + second;
}

function mul(first, second) {
  return first * second;
}

function liftf(func) {
  return function (first) {
    return function (second) {
      return func(first, second);
    };
  };
}

function curry1(binary, first) {
  return function (second) {
    return binary(first, second);
  };
}

function curry2(binary, first) {
  return liftf(binary) (first);
}

// Currying: (Named after Haskell Curry)
// Taking a function with multiple arguments(add, mul) and turning it into multiple functions
// that take a single argument is called currying
function curry(func, ...first) {
  return function (...second) {
    return func(...first, ...second);
  };
}

var add3 = curry1(add, 3);
print(add3(4));
print(curry1(mul, 5) (6));

var add3 = curry2(add, 3);
print(add3(4));
print(curry2(mul, 5) (6));
var first = [1, 2, 3];
var second = [4, 5, 6];
