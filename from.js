// var index = from(0);
// index() // 0
// index() // 1
// index() // 2
function print(input) {
  console.log(input);
}

function from(start) {
  return function() {
    var next = start;
    start += 1;
    return next;
  };
}

var index = from(0);
print(index());
print(index());
print(index());
