// Write a function square that takes two arrays and returns an array with square of each elements.
// 	square(...[1, 3, 5],...[2, 4, 6])// [1, 9, 25, 4, 16, 36]

function print(input) {
  console.log(input);
}

function square(...numbers) {
  return numbers.map(function (number) {
    return number * number;
  });
}

var numbers1 = [1, 3, 5];
var numbers2 = [2, 4, 6];
print(square(...numbers1, ...numbers2));
