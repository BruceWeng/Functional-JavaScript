// Write a function identityf that takes an argument and returns a function that returns that argument.
// var three = identityf(3);
// three() // 3
function print(input) {
  console.log(input);
}
function identityf(id) {
  return function () {
    return id;
  };
}

var three = identityf(3);
print(three());
