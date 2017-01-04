// Write a curry function compose that takes two unary functions and returns a unary function that calls them both.
// 	compose(doubl) (square) (5) // 50
function print(input) {
  console.log(input);
}

function doubl(val) {
  return val * 2;
}

function square(val) {
  return val * val;
}

function compose(unary1) {
  return function(unary2) {
    return function (val) {
      return unary1(unary2(val));
    }
  }
}

print(compose(doubl) (square) (5));
