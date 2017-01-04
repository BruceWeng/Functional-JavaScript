// Write a curry function composeII that takes two unary functions and returns a unary function that calls them both on all elements in arrays.
// 	composeII(doubl) (square) ([1, 3, 5]) ([2, 4, 6])// [2, 18, 50, 8, 32, 72]

function print(input) {
  console.log(input);
}

function doubl(...numbers) {
  return numbers.map(function (number) {
    return number * 2;
  });
}

function square(...numbers) {
  return numbers.map(function (number) {
    return number * number;
  });
}

function composeII(unary1) {
  return function(unary2) {
    return function (numbers1) {
      return function (numbers2) {
        return unary1(...unary2(...numbers1, ...numbers2));
      }
    }
  }
}

var numbers1 = [1, 3, 5];
var numbers2 = [2, 4, 6];
print(composeII(doubl) (square) (numbers1) (numbers2));
