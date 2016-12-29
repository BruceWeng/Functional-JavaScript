// Write a function liftf that takes a binary function, and makes it callable with two invocations.
// var addf = liftf(add);
// addf(3)(4) -> 7
// liftf(mul)(5)(6) -> 30
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

var addf = liftf(add);
print(addf(3)(4));
print(liftf(mul)(5)(6));
