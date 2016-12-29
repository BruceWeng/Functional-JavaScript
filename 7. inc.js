// Without writing any new functions, show three ways to create the inc function.
// var inc = ___;
// inc(5) -> 6
// inc(inc(5)) -> 7
function print(input) {
  console.log(input);
}

function add(first, second) {
  return first + second;
}

function addf(first) {
  return function(second) {
    return first + second;
  };
}

function liftf(func) {
  return function (first) {
    return function (second) {
      return func(first, second);
    };
  };
}

function curry(binary, first) {
  return function (second) {
    return binary(first, second);
  };
}


var inc = addf(1);
// print(inc(5));
// print(inc(inc(5)));

var inc2 = liftf(add) (1);
// print(inc2(5));
// print(inc2(inc2(5)));

var inc3 = curry(add, 1);
// print(inc3(5));
// print(inc3(inc3(5)));
